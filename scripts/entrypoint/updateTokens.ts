import {
  allNetworks,
  getNetworkPath,
  getNetworkLogoPath,
  getNetworkTokenInfoPath,
  getNetworkTokensPath,
  getNetworkTokenPath,
  getNetworkTokenLogoPath,
  tokenFolderAllowedFiles,
  getNetworkFolderFilesList,
  networkFolderAllowedFiles,
  getNetworkInfoPath,
} from "../common/repo-structure"
import {
  readDirSync,
  isPathExistsSync
} from "../common/filesystem"
import { readJsonFile } from "../common/json"
import { getFullNetworkInfo } from "../common/networks"
import axios from "axios"


const main = async () => {
  const errors: string[] = []
  const warnings: string[] = []
  console.log('im here')
  allNetworks.forEach(network => {
    const tokensPath = getNetworkTokensPath(network)
    console.log('tokensPath', tokensPath)
    if (isPathExistsSync(tokensPath)) {
      readDirSync(tokensPath).forEach(tokenID => {
        const logoFullPath = getNetworkTokenLogoPath(network, tokenID)
        const logoExists = isPathExistsSync(logoFullPath)
        const infoFullPath = getNetworkTokenInfoPath(network, tokenID)
        const infoExists = isPathExistsSync(infoFullPath)
        // Tokens should have a logo and an info file.  Exceptions:
        // - status=spam tokens may have no logo
        // - on some networks some valid tokens have no info (should be fixed)
        console.log('network and token', network, tokenID)
        console.log('logoExists', logoExists)
        console.log('infoExists', infoExists)
        const tokenInfo: any = readJsonFile(infoFullPath)
        console.log('tokenInfo', tokenInfo)
      })
    }
  })
  console.log('errors, warnings', errors, warnings)
}

const syncTokensByNetwork = async (network: string) => {
  const errors: string[] = []
  const warnings: string[] = []

  const tokensIDs: string[] = []
  const tokens: {}[] = []

  const networkInfo = getFullNetworkInfo({ network })

  console.log('networkInfo', networkInfo)

  const tokensPath = getNetworkTokensPath(network)
  if (isPathExistsSync(tokensPath)) {
    tokensIDs.push(...readDirSync(tokensPath))
    tokensIDs.forEach(tokenID => {
      const logoFullPath = getNetworkTokenLogoPath(network, tokenID)
      const logoExists = isPathExistsSync(logoFullPath)
      const infoFullPath = getNetworkTokenInfoPath(network, tokenID)
      const infoExists = isPathExistsSync(infoFullPath)
      if (infoExists) {
        const tokenInfo: any = readJsonFile(infoFullPath)
        tokens.push(tokenInfo)
      }
    })
  } else{
    warnings.push(`${network} have not any assets`)
  }

  const externalTokensList = await getExternalTokensList('https://api.borgswap.exchange/tokens.json')

  console.log('externalTokensList number', externalTokensList.tokens.length)

  const externakTokensIDs: string[] = []

  externalTokensList.tokens.forEach((token: any) => {
    if (!token.name || !token.symbol || !token.address || !token.decimals || !token.chainId) {
      errors.push(`Token haven't some prop for add to tokens list`)
    }
    externakTokensIDs.push(`${token.symbol}--${token.address}`)
  })

  if (tokensIDs.length) console.log('tokensIDs number', tokensIDs.length)
  if (tokens.length) console.log('tokens number', tokens.length)
  if (externakTokensIDs.length) console.log('externakTokensIDs', externakTokensIDs)
  if (warnings.length) console.log('warnings', warnings)
  if (errors.length) console.log('errors', errors)

  const tokenInfo = {
    "name": "Tether USD",
    "address": "0x55d398326f99059ff775485246999027b3197955",
    "symbol": "USDT",
    "decimals": 18,
    "chainId": 56,
    "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
    "tags": ["bep20", "custom"]
  }


}

const getExternalTokensList = async (url: string) => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

// main()

syncTokensByNetwork('binance-smart-chain')