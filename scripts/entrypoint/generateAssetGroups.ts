import {
  getAbsolutePath,
  customAssetGroups,
  getAssetGroupInfoPath,
  getNetworkPath,
  getNetworkTokenInfoPath,
} from "../common/repo-structure"
import {
  isPathExistsSync
} from "../common/filesystem"
import { readJsonFile, checkFile, writeToFileWithUpdate } from "../common/json"
import { getFullNetworkInfo } from "../common/networks"


const generateAssetGroups = (dataType = "mainnet") => {
  const distPath = getAbsolutePath('/dist')
  const dataPath = `${distPath}/${dataType}`
  const networksInfoFileName = 'networksInfo.json'
  const assetGroupsFileName = 'assets-groups.json'

  const assetGroups: AssetGroup[] = []
  const assetGroupsBySymbol: AssetGroupsBySymbol = {}

  // Preparing networks info for fast access to it
  const networksInfo = readJsonFile(`${dataPath}/${networksInfoFileName}`) as NetworkFullInfo[]

  const networkPriorityBySlug: {[network: string]: number} = {}
  const networkInfoBySlug: {[network: string]: NetworkFullInfo} = {}

  const sortedNetworksInfo = networksInfo.sort((a,b) => a.priority - b.priority)

  sortedNetworksInfo.forEach((networkInfo, index) => {
      networkPriorityBySlug[networkInfo.slug] = index
      networkInfoBySlug[networkInfo.slug] = networkInfo
    })

  // Generating custom asset-groups
  const generatedCustomAssetGroups: AssetGroup[] = []
  const customAssetsAbsolutePaths: string[] = []

  const generatedNetworksCoinsAssetGroups: AssetGroup[] = []
  const networksCoinsAbsolutePaths: string[] = []

  const customAssetGroupsInfo: CustomAssetGroup[] = customAssetGroups.map(assetGroup => {
    const assetGroupInfoPath = getAssetGroupInfoPath(assetGroup)

    if (isPathExistsSync(assetGroupInfoPath))
      return readJsonFile(assetGroupInfoPath)
  })

  customAssetGroupsInfo.forEach(customAssetGroup => {
    const {
      symbol,
      name,
      logo,
      "asset-list": assetList
    } = customAssetGroup

    const mainAssetRelativePath = assetList[0]
    const mainAssetNetworkSlug = getNetworkSlugByAssetRelativePath(mainAssetRelativePath)

    const networksWithAssets: NetworkWithAssets[] = []

    assetList.forEach(assetRelativePath => {
      const assetAbsolutePath = getAbsolutePath(assetRelativePath)
      customAssetsAbsolutePaths.push(assetAbsolutePath)

      const assetNetworkSlug = getNetworkSlugByAssetRelativePath(assetRelativePath)

      const networkWithAssetsIndex =
        networksWithAssets
          .findIndex(networkWithAssets => networkWithAssets.network.slug === assetNetworkSlug)

      const isAlreadyHaveNetwork = networkWithAssetsIndex !== -1

      const assetInfo = getAssetInfo(assetAbsolutePath)

      if (isAlreadyHaveNetwork) {
        return networksWithAssets[networkWithAssetsIndex].assets.push(assetInfo)
      }

      const assetNetworkInfo = getAssetNetworkInfoBySlug(assetNetworkSlug)

      networksWithAssets.push({
        network: assetNetworkInfo,
        assets: [assetInfo]
      })
    })

    const assetGroup: AssetGroup = {
      symbol,
      name,
      logo,
      priority: networkPriorityBySlug[mainAssetNetworkSlug],
      networks: networksWithAssets
    }


    const isCustomAssetGroup = !isNetworkCoinAssetGroup(mainAssetNetworkSlug, symbol)

    isCustomAssetGroup
    ? generatedCustomAssetGroups.push(assetGroup)
    : generatedNetworksCoinsAssetGroups.push(assetGroup)

    assetGroupsBySymbol[assetGroup.symbol] = assetGroup
  })

  // Sorting and set priority for custom asset-groups, it need for this expample:
  // we have 2 Avalanche mainet networks and 1 AVAX asset-groups
  generatedNetworksCoinsAssetGroups
    .sort((a,b) => a.priority - b.priority)
    .map((assetGroup, index) => {
      assetGroup.priority = index
      assetGroupsBySymbol[assetGroup.symbol] = assetGroup
      return assetGroup
    })

  // Generating networks coins asset-groups

  Object.keys(networkInfoBySlug).forEach(network => {
    const { coins: networkCoins } = networkInfoBySlug[network]
    const assetNetworkInfo = getAssetNetworkInfoBySlug(network)

    networkCoins.forEach((coinPath: string) => {
      const coinAbsolutePath = getAbsolutePath(coinPath)

      // Don't add asset if it includes in customAssets coins
      if (customAssetsAbsolutePaths.includes(coinAbsolutePath)) return

      networksCoinsAbsolutePaths.push(coinAbsolutePath)

      const assetInfo = getAssetInfo(coinAbsolutePath)
      const { symbol, name, logo } = assetInfo

      if (assetGroupsBySymbol[symbol]) return // you can add logic if asset-group is exist

      const networksWithAssets: NetworkWithAssets[] = []

      networksWithAssets.push({
        network: assetNetworkInfo,
        assets: [assetInfo]
      })

      const assetGroup: AssetGroup = {
        symbol,
        name,
        logo,
        priority: generatedNetworksCoinsAssetGroups.length,
        networks: networksWithAssets
      }

      generatedNetworksCoinsAssetGroups.push(assetGroup)
      assetGroupsBySymbol[symbol] = assetGroup
    })
  })

  // Sorting and set priority for custom asset-groups, it need for this expample:
  // we have 2 Avalanche mainet networks and 1 AVAX asset-groups
  generatedCustomAssetGroups
    .sort((a,b) => a.priority - b.priority)
    .map((assetGroup, index) => {
      assetGroup.priority = index + generatedNetworksCoinsAssetGroups.length
      assetGroupsBySymbol[assetGroup.symbol] = assetGroup
      return assetGroup
    })

  // Generating networks tokens asset-groups
  const generatedNetworksTokensAssetGroups: AssetGroup[] = []
  const assetGroupWithDuplicatedSymbol: AssetGroup[] = []

  Object.keys(networkInfoBySlug).forEach(network => {
    const networkPath = getNetworkPath(network)
    const allowlistFileName = 'allowlist.json'
    const allowlistPath = `${networkPath}/${allowlistFileName}`

    if (!isPathExistsSync(allowlistPath)) return

    const assetNetworkInfo = getAssetNetworkInfoBySlug(network)
    const allowlist = readJsonFile(allowlistPath) as string[]

    allowlist.forEach((tokenID: string, index) => {
      const tokenPath = getNetworkTokenInfoPath(network, tokenID)

      // Don't add asset if it includes in customAssets or networks coins
      if (
        customAssetsAbsolutePaths.includes(tokenPath) ||
        networksCoinsAbsolutePaths.includes(tokenPath)
      ) return

      const assetInfo = getAssetInfo(tokenPath)
      const { symbol, name, logo } = assetInfo

      const networksWithAssets: NetworkWithAssets[] = []

      networksWithAssets.push({
        network: assetNetworkInfo,
        assets: [assetInfo]
      })

      const priority =
        generatedCustomAssetGroups.length +
        generatedNetworksCoinsAssetGroups.length +
        generatedNetworksTokensAssetGroups.length

      const assetGroup: AssetGroup = {
        symbol,
        name,
        logo,
        priority,
        networks: networksWithAssets
      }

      if (assetGroupsBySymbol[symbol]) {
        assetGroup.priority = -1
        return assetGroupWithDuplicatedSymbol.push(assetGroup)
      }

      generatedNetworksTokensAssetGroups.push(assetGroup)
      assetGroupsBySymbol[symbol] = assetGroup
    })
  })


  assetGroups.push(
    ...generatedNetworksCoinsAssetGroups,
    ...generatedCustomAssetGroups,
    ...generatedNetworksTokensAssetGroups
  )


  if (assetGroupWithDuplicatedSymbol.length) {
    const duplicatedAssetGroups = 'duplicatedAssetGroups.json'
    checkFile(dataPath, duplicatedAssetGroups, [])
    writeToFileWithUpdate(dataPath, duplicatedAssetGroups, assetGroupWithDuplicatedSymbol)
  }

  checkFile(dataPath, assetGroupsFileName, [])
  writeToFileWithUpdate(dataPath, assetGroupsFileName, assetGroups)
}

const getNetworkSlugByAssetRelativePath = (relativePath: string): string => relativePath.split('/')[2]

const getAssetNetworkInfoBySlug = (network: string): AssetNetworkInfo => {
  const networkInfo = getFullNetworkInfo({ network }) as NetworkFullInfo
  const mainNetworkCoinPath = getAbsolutePath(networkInfo.coins[0])
  const mainNetworkCoinInfo = getAssetInfo(mainNetworkCoinPath)

  return {
    name: networkInfo.name,
    slug: networkInfo.slug,
    logo: mainNetworkCoinInfo.logo
  }
}

const getAssetInfo = (assetPath: string) => {

  const assetAbsolutePath =
    isPathExistsSync(assetPath) ?
      assetPath :
      getAbsolutePath(assetPath)

  const assetInfo = readJsonFile(assetAbsolutePath) as AssetInfo

  if (!assetInfo.type) assetInfo.type = "token"

  return assetInfo
}

const isNetworkCoinAssetGroup = (network: string, coinSymbol: string) => {
  const networkInfo = getFullNetworkInfo({ network }) as NetworkFullInfo
  let isCoinFind = false

  networkInfo.coins.forEach(coinPath => {
    const { symbol } = getAssetInfo(getAbsolutePath(coinPath))
    if (coinSymbol === symbol) isCoinFind = true
  })

  return isCoinFind
}

generateAssetGroups()