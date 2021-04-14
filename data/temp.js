var networks = {
    "bitcoin": {
        "messagePrefix": "\u0018Bitcoin Signed Message:\n",
        "bech32": "bc",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 0,
        "scriptHash": 5,
        "wif": 128,
        "p2wpkh": {
            "baseNetwork": "bitcoin",
            "messagePrefix": "\u0018Bitcoin Signed Message:\n",
            "bech32": "bc",
            "bip32": {
                "public": 78792518,
                "private": 78791436
            },
            "pubKeyHash": 0,
            "scriptHash": 5,
            "wif": 128
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "bitcoin",
            "messagePrefix": "\u0018Bitcoin Signed Message:\n",
            "bech32": "bc",
            "bip32": {
                "public": 77429938,
                "private": 77428856
            },
            "pubKeyHash": 0,
            "scriptHash": 5,
            "wif": 128
        },
        "p2wsh": {
            "baseNetwork": "bitcoin",
            "messagePrefix": "\u0018Bitcoin Signed Message:\n",
            "bech32": "bc",
            "bip32": {
                "public": 44728019,
                "private": 44726937
            },
            "pubKeyHash": 0,
            "scriptHash": 5,
            "wif": 128
        },
        "p2wshInP2sh": {
            "baseNetwork": "bitcoin",
            "messagePrefix": "\u0018Bitcoin Signed Message:\n",
            "bech32": "bc",
            "bip32": {
                "public": 43365439,
                "private": 43364357
            },
            "pubKeyHash": 0,
            "scriptHash": 5,
            "wif": 128
        }
    },
    "testnet": {
        "messagePrefix": "\u0018Bitcoin Signed Message:\n",
        "bech32": "tb",
        "bip32": {
            "public": 70617039,
            "private": 70615956
        },
        "pubKeyHash": 111,
        "scriptHash": 196,
        "wif": 239,
        "p2wpkh": {
            "baseNetwork": "testnet",
            "messagePrefix": "\u0018Bitcoin Signed Message:\n",
            "bech32": "tb",
            "bip32": {
                "public": 73342198,
                "private": 73341116
            },
            "pubKeyHash": 111,
            "scriptHash": 196,
            "wif": 239
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "testnet",
            "messagePrefix": "\u0018Bitcoin Signed Message:\n",
            "bech32": "tb",
            "bip32": {
                "public": 71979618,
                "private": 71978536
            },
            "pubKeyHash": 111,
            "scriptHash": 196,
            "wif": 239
        },
        "p2wsh": {
            "baseNetwork": "testnet",
            "messagePrefix": "\u0018Bitcoin Signed Message:\n",
            "bech32": "tb",
            "bip32": {
                "public": 39277699,
                "private": 39276616
            },
            "pubKeyHash": 111,
            "scriptHash": 196,
            "wif": 239
        },
        "p2wshInP2sh": {
            "baseNetwork": "testnet",
            "messagePrefix": "\u0018Bitcoin Signed Message:\n",
            "bech32": "tb",
            "bip32": {
                "public": 37915119,
                "private": 37914037
            },
            "pubKeyHash": 111,
            "scriptHash": 196,
            "wif": 239
        }
    },
    "litecoin": {
        "messagePrefix": "\u0019Litecoin Signed Message:\n",
        "bip32": {
            "public": 27108450,
            "private": 27106558
        },
        "pubKeyHash": 48,
        "scriptHash": 50,
        "wif": 176,
        "p2wpkh": {
            "baseNetwork": "litecoin",
            "messagePrefix": "\u0019Litecoin Signed Message:\n",
            "bech32": "ltc",
            "bip32": {
                "public": 78792518,
                "private": 78791436
            },
            "pubKeyHash": 48,
            "scriptHash": 50,
            "wif": 176
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "litecoin",
            "messagePrefix": "\u0019Litecoin Signed Message:\n",
            "bech32": "ltc",
            "bip32": {
                "public": 28471030,
                "private": 28469138
            },
            "pubKeyHash": 48,
            "scriptHash": 50,
            "wif": 176
        }
    },
    "shadow": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 4001376362,
            "private": 4001378792
        },
        "pubKeyHash": 63,
        "scriptHash": 125,
        "wif": 191
    },
    "shadowtn": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 1992359419,
            "private": 1992361850
        },
        "pubKeyHash": 127,
        "scriptHash": 196,
        "wif": 255
    },
    "clam": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 2831314276,
            "private": 2831251494
        },
        "pubKeyHash": 137,
        "scriptHash": 13,
        "wif": 133
    },
    "crown": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 0,
        "scriptHash": 5,
        "wif": 128
    },
    "dash": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 76,
        "scriptHash": 16,
        "wif": 204
    },
    "maza": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 50,
        "scriptHash": 9,
        "wif": 224
    },
    "dashtn": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 70617039,
            "private": 70615956
        },
        "pubKeyHash": 140,
        "scriptHash": 19,
        "wif": 239
    },
    "game": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 38,
        "scriptHash": 5,
        "wif": 166
    },
    "namecoin": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 52,
        "scriptHash": 13,
        "wif": 180
    },
    "peercoin": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 55,
        "scriptHash": 117,
        "wif": 183
    },
    "axe": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 55,
        "scriptHash": 16,
        "wif": 204
    },
    "scribe": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 60,
        "scriptHash": 125,
        "wif": 110
    },
    "slimcoin": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 4016758544,
            "private": 4016695936
        },
        "pubKeyHash": 63,
        "scriptHash": 125,
        "wif": 70
    },
    "slimcointn": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 70617039,
            "private": 70615956
        },
        "pubKeyHash": 111,
        "scriptHash": 196,
        "wif": 87
    },
    "dogecoin": {
        "messagePrefix": "\u0019Dogecoin Signed Message:\n",
        "bip32": {
            "public": 49990397,
            "private": 49988504
        },
        "pubKeyHash": 30,
        "scriptHash": 22,
        "wif": 158
    },
    "dogecointestnet": {
        "messagePrefix": "\u0019Dogecoin Signed Message:\n",
        "bip32": {
            "public": 70617039,
            "private": 70615956
        },
        "pubKeyHash": 113,
        "scriptHash": 196,
        "wif": 241,
        "p2wpkh": {
            "baseNetwork": "dogecointestnet",
            "messagePrefix": "\u0019Dogecoin Signed Message:\n",
            "bech32": "dogecointestnet",
            "bip32": {
                "public": 70617039,
                "private": 70615956
            },
            "pubKeyHash": 113,
            "scriptHash": 196,
            "wif": 241
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "dogecointestnet",
            "messagePrefix": "\u0019Dogecoin Signed Message:\n",
            "bech32": "dogecointestnet",
            "bip32": {
                "public": 70617039,
                "private": 70615956
            },
            "pubKeyHash": 113,
            "scriptHash": 196,
            "wif": 241
        }
    },
    "denarius": {
        "messagePrefix": "\u0019Denarius Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 30,
        "scriptHash": 90,
        "wif": 158
    },
    "neblio": {
        "messagePrefix": "\u0018Neblio Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 53,
        "scriptHash": 112,
        "wif": 181
    },
    "viacoin": {
        "messagePrefix": "\u0018Viacoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 71,
        "scriptHash": 33,
        "wif": 199,
        "p2wpkh": {
            "baseNetwork": "viacoin",
            "messagePrefix": "\u0018Viacoin Signed Message:\n",
            "bech32": "viacoin",
            "bip32": {
                "public": 76067358,
                "private": 76066276
            },
            "pubKeyHash": 71,
            "scriptHash": 33,
            "wif": 199
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "viacoin",
            "messagePrefix": "\u0018Viacoin Signed Message:\n",
            "bech32": "viacoin",
            "bip32": {
                "public": 76067358,
                "private": 76066276
            },
            "pubKeyHash": 71,
            "scriptHash": 33,
            "wif": 199
        }
    },
    "viacointestnet": {
        "messagePrefix": "\u0018Viacoin Signed Message:\n",
        "bip32": {
            "public": 70617039,
            "private": 70615956
        },
        "pubKeyHash": 127,
        "scriptHash": 196,
        "wif": 255
    },
    "gamerscoin": {
        "messagePrefix": "\u0019Gamerscoin Signed Message:\n",
        "bip32": {
            "public": 27108450,
            "private": 27106558
        },
        "pubKeyHash": 38,
        "scriptHash": 5,
        "wif": 166
    },
    "jumbucks": {
        "messagePrefix": "\u0019Jumbucks Signed Message:\n",
        "bip32": {
            "public": 58353818,
            "private": 58352736
        },
        "pubKeyHash": 43,
        "scriptHash": 5,
        "wif": 171
    },
    "zetacoin": {
        "messagePrefix": "\u0018Zetacoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 80,
        "scriptHash": 9,
        "wif": 224
    },
    "myriadcoin": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 50,
        "scriptHash": 9,
        "wif": 178
    },
    "bolivarcoin": {
        "messagePrefix": "Bolivarcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 85,
        "scriptHash": 5,
        "wif": 213
    },
    "onixcoin": {
        "messagePrefix": "ONIX Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 75,
        "scriptHash": 5,
        "wif": 203
    },
    "lkrcoin": {
        "messagePrefix": "\u0018LKRcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 48,
        "scriptHash": 85,
        "wif": 176
    },
    "pivx": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 36513075,
            "private": 35729707
        },
        "pubKeyHash": 30,
        "scriptHash": 13,
        "wif": 212
    },
    "pivxtestnet": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 981492128,
            "private": 981489719
        },
        "pubKeyHash": 139,
        "scriptHash": 19,
        "wif": 239
    },
    "fix": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 36513075,
            "private": 35729707
        },
        "pubKeyHash": 35,
        "scriptHash": 95,
        "wif": 60
    },
    "fixtestnet": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 981492128,
            "private": 981489719
        },
        "pubKeyHash": 76,
        "scriptHash": 137,
        "wif": 237
    },
    "fujicoin": {
        "messagePrefix": "\u0019FujiCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 36,
        "scriptHash": 16,
        "wif": 164,
        "p2wpkh": {
            "baseNetwork": "fujicoin",
            "messagePrefix": "\u0019FujiCoin Signed Message:\n",
            "bech32": "fc",
            "bip32": {
                "public": 78792518,
                "private": 78791436
            },
            "pubKeyHash": 36,
            "scriptHash": 16,
            "wif": 164
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "fujicoin",
            "messagePrefix": "\u0019FujiCoin Signed Message:\n",
            "bech32": "fc",
            "bip32": {
                "public": 77429938,
                "private": 77428856
            },
            "pubKeyHash": 36,
            "scriptHash": 16,
            "wif": 164
        }
    },
    "nubits": {
        "messagePrefix": "\u0018Nu Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 25,
        "scriptHash": 26,
        "wif": 150
    },
    "bgold": {
        "messagePrefix": "\u001dBitcoin Gold Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 38,
        "scriptHash": 23,
        "wif": 128,
        "p2wpkh": {
            "baseNetwork": "bgold",
            "messagePrefix": "\u001dBitcoin Gold Signed Message:\n",
            "bech32": "btg",
            "bip32": {
                "public": 78792518,
                "private": 78791436
            },
            "pubKeyHash": 38,
            "scriptHash": 23,
            "wif": 128
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "bgold",
            "messagePrefix": "\u001dBitcoin Gold Signed Message:\n",
            "bech32": "btg",
            "bip32": {
                "public": 77429938,
                "private": 77428856
            },
            "pubKeyHash": 38,
            "scriptHash": 23,
            "wif": 128
        }
    },
    "monacoin": {
        "messagePrefix": "\u0018Monacoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 50,
        "scriptHash": 55,
        "wif": 176,
        "p2wpkh": {
            "baseNetwork": "monacoin",
            "messagePrefix": "\u0018Monacoin Signed Message:\n",
            "bech32": "mona",
            "bip32": {
                "public": 76067358,
                "private": 76066276
            },
            "pubKeyHash": 50,
            "scriptHash": 55,
            "wif": 176
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "monacoin",
            "messagePrefix": "\u0018Monacoin Signed Message:\n",
            "bech32": "mona",
            "bip32": {
                "public": 76067358,
                "private": 76066276
            },
            "pubKeyHash": 50,
            "scriptHash": 55,
            "wif": 176
        }
    },
    "litecoinXprv": {
        "messagePrefix": "\u0019Litecoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 48,
        "scriptHash": 50,
        "wif": 176
    },
    "komodo": {
        "messagePrefix": "\u0018Komodo Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 60,
        "scriptHash": 85,
        "wif": 188
    },
    "blackcoin": {
        "messagePrefix": "\u0018BlackCoin Signed Message:\n",
        "bip32": {
            "public": 47169246,
            "private": 47169376
        },
        "pubKeyHash": 25,
        "scriptHash": 85,
        "wif": 153
    },
    "beetlecoin": {
        "messagePrefix": "\u0019Beetlecoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 26,
        "scriptHash": 85,
        "wif": 153
    },
    "adcoin": {
        "messagePrefix": "\u0018AdCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 23,
        "scriptHash": 5,
        "wif": 176
    },
    "asiacoin": {
        "messagePrefix": "\u0018AsiaCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 23,
        "scriptHash": 8,
        "wif": 151
    },
    "auroracoin": {
        "messagePrefix": "\u0018AuroraCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 23,
        "scriptHash": 5,
        "wif": 151
    },
    "bata": {
        "messagePrefix": "\u0018Bata Signed Message:\n",
        "bip32": {
            "public": 2752284410,
            "private": 2752221629
        },
        "pubKeyHash": 25,
        "scriptHash": 5,
        "wif": 164
    },
    "belacoin": {
        "messagePrefix": "\u0018BelaCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 25,
        "scriptHash": 5,
        "wif": 153
    },
    "atom": {
        "messagePrefix": "\u0018Bitcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 23,
        "scriptHash": 10,
        "wif": 128,
        "p2wpkh": {
            "baseNetwork": "atom",
            "messagePrefix": "\u0018Bitcoin Atom Signed Message:\n",
            "bech32": "atom",
            "bip32": {
                "public": 76067358,
                "private": 76066276
            },
            "pubKeyHash": 23,
            "scriptHash": 10,
            "wif": 128
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "atom",
            "messagePrefix": "\u0018Bitcoin Atom Signed Message:\n",
            "bech32": "atom",
            "bip32": {
                "public": 76067358,
                "private": 76066276
            },
            "pubKeyHash": 23,
            "scriptHash": 10,
            "wif": 128
        }
    },
    "bitcoinplus": {
        "messagePrefix": "\u0018BitcoinPlus Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 25,
        "scriptHash": 8,
        "wif": 153
    },
    "bitcloud": {
        "messagePrefix": "\u0018BitCloud Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 25,
        "scriptHash": 5,
        "wif": 153
    },
    "bitcore": {
        "messagePrefix": "\u0018BitCore Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 3,
        "scriptHash": 125,
        "wif": 128,
        "p2wpkh": {
            "baseNetwork": "bitcore",
            "messagePrefix": "\u0018BitCore Signed Message:\n",
            "bech32": "bitcore",
            "bip32": {
                "public": 76067358,
                "private": 76066276
            },
            "pubKeyHash": 3,
            "scriptHash": 125,
            "wif": 128
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "bitcore",
            "messagePrefix": "\u0018BitCore Signed Message:\n",
            "bech32": "bitcore",
            "bip32": {
                "public": 76067358,
                "private": 76066276
            },
            "pubKeyHash": 3,
            "scriptHash": 125,
            "wif": 128
        }
    },
    "bitsend": {
        "messagePrefix": "\u0018Bitsend Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 102,
        "scriptHash": 5,
        "wif": 204
    },
    "britcoin": {
        "messagePrefix": "\u0018BritCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 25,
        "scriptHash": 85,
        "wif": 153
    },
    "canadaecoin": {
        "messagePrefix": "\u0018Canada eCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 28,
        "scriptHash": 5,
        "wif": 156
    },
    "cannacoin": {
        "messagePrefix": "\u0018Cannacoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 28,
        "scriptHash": 5,
        "wif": 156
    },
    "cranepay": {
        "messagePrefix": "\u0018Bitcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 28,
        "scriptHash": 10,
        "wif": 123,
        "p2wpkhInP2sh": {
            "baseNetwork": "cranepay",
            "messagePrefix": "\u0018Bitcoin Signed Message:\n",
            "bech32": "cp",
            "bip32": {
                "public": 77429938,
                "private": 77428856
            },
            "pubKeyHash": 28,
            "scriptHash": 10,
            "wif": 123
        },
        "p2wpkh": {
            "baseNetwork": "cranepay",
            "messagePrefix": "\u0018Bitcoin Signed Message:\n",
            "bech32": "cp",
            "bip32": {
                "public": 78792518,
                "private": 78791436
            },
            "pubKeyHash": 28,
            "scriptHash": 10,
            "wif": 123
        }
    },
    "cryptoescudo": {
        "messagePrefix": "\u0018Cryptoescudo Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 28,
        "scriptHash": 5,
        "wif": 156
    },
    "clubcoin": {
        "messagePrefix": "\u0018ClubCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 28,
        "scriptHash": 85,
        "wif": 153
    },
    "compcoin": {
        "messagePrefix": "\u0018CompCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 28,
        "scriptHash": 85,
        "wif": 156
    },
    "crave": {
        "messagePrefix": "\u0018DarkNet Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 70,
        "scriptHash": 85,
        "wif": 153
    },
    "defcoin": {
        "messagePrefix": "\u0018defcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 30,
        "scriptHash": 5,
        "wif": 158
    },
    "diamond": {
        "messagePrefix": "\u0018Diamond Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 90,
        "scriptHash": 8,
        "wif": 218
    },
    "digibyte": {
        "messagePrefix": "\u0019DigiByte Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 30,
        "scriptHash": 5,
        "wif": 128,
        "p2wpkh": {
            "baseNetwork": "digibyte",
            "messagePrefix": "x19DigiByte Signed Message:\n",
            "bech32": "dgb",
            "bip32": {
                "public": 78792518,
                "private": 78791436
            },
            "pubKeyHash": 30,
            "scriptHash": 63,
            "wif": 128
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "digibyte",
            "messagePrefix": "\u0019DigiByte Signed Message:\n",
            "bech32": "dgb",
            "bip32": {
                "public": 77429938,
                "private": 77428856
            },
            "pubKeyHash": 30,
            "scriptHash": 63,
            "wif": 128
        }
    },
    "digitalcoin": {
        "messagePrefix": "\u0018Digitalcoin Signed Message:\n",
        "bip32": {
            "public": 2651097266,
            "private": 76066276
        },
        "pubKeyHash": 30,
        "scriptHash": 5,
        "wif": 158
    },
    "ecoin": {
        "messagePrefix": "\u0018eCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 92,
        "scriptHash": 20,
        "wif": 220
    },
    "edrcoin": {
        "messagePrefix": "\u0018EDRcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 93,
        "scriptHash": 28,
        "wif": 221
    },
    "egulden": {
        "messagePrefix": "\u0018Egulden Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 48,
        "scriptHash": 5,
        "wif": 176
    },
    "einsteinium": {
        "messagePrefix": "\u0018Einsteinium Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 33,
        "scriptHash": 5,
        "wif": 161
    },
    "europecoin": {
        "messagePrefix": "\u0018Bitcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 33,
        "scriptHash": 5,
        "wif": 168
    },
    "exclusivecoin": {
        "messagePrefix": "\u0018ExclusiveCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 33,
        "scriptHash": 137,
        "wif": 161
    },
    "feathercoin": {
        "messagePrefix": "\u0018Feathercoin Signed Message:\n",
        "bip32": {
            "public": 76069926,
            "private": 76077806
        },
        "pubKeyHash": 14,
        "scriptHash": 5,
        "wif": 142
    },
    "firo": {
        "messagePrefix": "\u0018Firo Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 82,
        "scriptHash": 7,
        "wif": 210
    },
    "zcoin": {
        "messagePrefix": "\u0018Zcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 82,
        "scriptHash": 7,
        "wif": 210
    },
    "firstcoin": {
        "messagePrefix": "\u0018FirstCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 35,
        "scriptHash": 5,
        "wif": 163
    },
    "flashcoin": {
        "messagePrefix": "\u0018Flashcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 68,
        "scriptHash": 130,
        "wif": 196
    },
    "gcr": {
        "messagePrefix": "\u0018GCR Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 38,
        "scriptHash": 97,
        "wif": 154
    },
    "gobyte": {
        "messagePrefix": "\u0018DarkCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 38,
        "scriptHash": 10,
        "wif": 198
    },
    "gridcoin": {
        "messagePrefix": "\u0018Gridcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 62,
        "scriptHash": 85,
        "wif": 190
    },
    "groestlcoin": {
        "messagePrefix": "\u0019GroestlCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 36,
        "scriptHash": 5,
        "wif": 128,
        "p2wpkh": {
            "baseNetwork": "groestlcoin",
            "messagePrefix": "\u0019GroestlCoin Signed Message:\n",
            "bech32": "grs",
            "bip32": {
                "public": 78792518,
                "private": 78791436
            },
            "pubKeyHash": 36,
            "scriptHash": 5,
            "wif": 128
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "groestlcoin",
            "messagePrefix": "\u0019GroestlCoin Signed Message:\n",
            "bech32": "grs",
            "bip32": {
                "public": 77429938,
                "private": 77428856
            },
            "pubKeyHash": 36,
            "scriptHash": 5,
            "wif": 128
        }
    },
    "groestlcointestnet": {
        "messagePrefix": "\u0019GroestlCoin Signed Message:\n",
        "bip32": {
            "public": 70617039,
            "private": 70615956
        },
        "pubKeyHash": 111,
        "scriptHash": 196,
        "wif": 239,
        "p2wpkh": {
            "baseNetwork": "groestlcointestnet",
            "messagePrefix": "\u0019GroestlCoin Signed Message:\n",
            "bech32": "tgrs",
            "bip32": {
                "public": 73342198,
                "private": 73341116
            },
            "pubKeyHash": 111,
            "scriptHash": 196,
            "wif": 239
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "groestlcointestnet",
            "messagePrefix": "\u0019GroestlCoin Signed Message:\n",
            "bech32": "tgrs",
            "bip32": {
                "public": 71979618,
                "private": 71978536
            },
            "pubKeyHash": 111,
            "scriptHash": 196,
            "wif": 239
        }
    },
    "gulden": {
        "messagePrefix": "\u0018Guldencoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 38,
        "scriptHash": 98,
        "wif": 98
    },
    "helleniccoin": {
        "messagePrefix": "\u0018helleniccoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 48,
        "scriptHash": 5,
        "wif": 176
    },
    "hempcoin": {
        "messagePrefix": "\u0018Hempcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 40,
        "scriptHash": 8,
        "wif": 168
    },
    "insane": {
        "messagePrefix": "\u0018INSaNe Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 102,
        "scriptHash": 57,
        "wif": 55
    },
    "iop": {
        "messagePrefix": "\u0018IoP Signed Message:\n",
        "bip32": {
            "public": 662737247,
            "private": 2922649334
        },
        "pubKeyHash": 117,
        "scriptHash": 174,
        "wif": 49
    },
    "ixcoin": {
        "messagePrefix": "\u0018Ixcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 138,
        "scriptHash": 5,
        "wif": 128
    },
    "kobocoin": {
        "messagePrefix": "\u0018Kobocoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 35,
        "scriptHash": 28,
        "wif": 163
    },
    "landcoin": {
        "messagePrefix": "\u0018Landcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 48,
        "scriptHash": 122,
        "wif": 176
    },
    "lbry": {
        "messagePrefix": "\u0018LBRYcrd Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 85,
        "scriptHash": 122,
        "wif": 28
    },
    "linx": {
        "messagePrefix": "\u0018LinX Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 75,
        "scriptHash": 5,
        "wif": 203
    },
    "litecointestnet": {
        "messagePrefix": "\u0018Litecoin Signed Message:\n",
        "bip32": {
            "public": 70617039,
            "private": 70615956
        },
        "pubKeyHash": 111,
        "scriptHash": 196,
        "wif": 239,
        "p2wpkh": {
            "baseNetwork": "litecointestnet",
            "messagePrefix": "\u0018Litecoin Signed Message:\n",
            "bech32": "litecointestnet",
            "bip32": {
                "public": 70617039,
                "private": 70615956
            },
            "pubKeyHash": 111,
            "scriptHash": 196,
            "wif": 239
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "litecointestnet",
            "messagePrefix": "\u0018Litecoin Signed Message:\n",
            "bech32": "litecointestnet",
            "bip32": {
                "public": 70617039,
                "private": 70615956
            },
            "pubKeyHash": 111,
            "scriptHash": 196,
            "wif": 239
        }
    },
    "litecoincash": {
        "messagePrefix": "\u0018Litecoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 28,
        "scriptHash": 5,
        "wif": 176
    },
    "lynx": {
        "messagePrefix": "\u0018Lynx Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 45,
        "scriptHash": 50,
        "wif": 173
    },
    "megacoin": {
        "messagePrefix": "\u0018Megacoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 50,
        "scriptHash": 5,
        "wif": 178
    },
    "minexcoin": {
        "messagePrefix": "\u0018Bitcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 75,
        "scriptHash": 5,
        "wif": 128
    },
    "navcoin": {
        "messagePrefix": "\u0018Navcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 53,
        "scriptHash": 85,
        "wif": 150
    },
    "neoscoin": {
        "messagePrefix": "\u0018NeosCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 53,
        "scriptHash": 5,
        "wif": 177
    },
    "nix": {
        "messagePrefix": "\u0018Nix Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 38,
        "scriptHash": 53,
        "wif": 128,
        "p2wpkh": {
            "baseNetwork": "nix",
            "messagePrefix": "\u0018Nix Signed Message:\n",
            "bech32": "nix",
            "bip32": {
                "public": 76067358,
                "private": 76066276
            },
            "pubKeyHash": 38,
            "scriptHash": 53,
            "wif": 128
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "nix",
            "messagePrefix": "\u0018Nix Signed Message:\n",
            "bech32": "nix",
            "bip32": {
                "public": 76067358,
                "private": 76066276
            },
            "pubKeyHash": 38,
            "scriptHash": 53,
            "wif": 128
        }
    },
    "neurocoin": {
        "messagePrefix": "\u0018PPCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 53,
        "scriptHash": 117,
        "wif": 181
    },
    "newyorkc": {
        "messagePrefix": "\u0018newyorkc Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 60,
        "scriptHash": 22,
        "wif": 188
    },
    "novacoin": {
        "messagePrefix": "\u0018NovaCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 8,
        "scriptHash": 20,
        "wif": 136
    },
    "nushares": {
        "messagePrefix": "\u0018Nu Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 63,
        "scriptHash": 64,
        "wif": 149
    },
    "okcash": {
        "messagePrefix": "\u0018OKCash Signed Message:\n",
        "bip32": {
            "public": 63710167,
            "private": 63708275
        },
        "pubKeyHash": 55,
        "scriptHash": 28,
        "wif": 3
    },
    "omnicore": {
        "messagePrefix": "\u0018Bitcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 0,
        "scriptHash": 5,
        "wif": 128
    },
    "pesobit": {
        "messagePrefix": "\u0018Pesobit Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 55,
        "scriptHash": 85,
        "wif": 183
    },
    "pinkcoin": {
        "messagePrefix": "\u0018Pinkcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 3,
        "scriptHash": 28,
        "wif": 131
    },
    "poswcoin": {
        "messagePrefix": "\u0018Poswcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 55,
        "scriptHash": 85,
        "wif": 183
    },
    "potcoin": {
        "messagePrefix": "\u0018Potcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 55,
        "scriptHash": 5,
        "wif": 183
    },
    "putincoin": {
        "messagePrefix": "\u0018PutinCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 55,
        "scriptHash": 20,
        "wif": 183
    },
    "ravencoin": {
        "messagePrefix": "\u0016Raven Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 60,
        "scriptHash": 122,
        "wif": 128
    },
    "reddcoin": {
        "messagePrefix": "\u0018Reddcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 61,
        "scriptHash": 5,
        "wif": 189
    },
    "revolutionvr": {
        "messagePrefix": "\u0018Voxels Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 70,
        "scriptHash": 5,
        "wif": 198
    },
    "ritocoin": {
        "messagePrefix": "\u0015Rito Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 25,
        "scriptHash": 105,
        "wif": 139
    },
    "rsk": {
        "messagePrefix": "\u0018RSK Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 0,
        "scriptHash": 5,
        "wif": 128
    },
    "rsktestnet": {
        "messagePrefix": "\u0018RSK Testnet Signed Message:\n",
        "bip32": {
            "public": 70617039,
            "private": 70615956
        },
        "pubKeyHash": 111,
        "scriptHash": 196,
        "wif": 239
    },
    "rubycoin": {
        "messagePrefix": "\u0018Rubycoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 60,
        "scriptHash": 85,
        "wif": 188
    },
    "safecoin": {
        "messagePrefix": "\u0018Safecoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 61,
        "scriptHash": 86,
        "wif": 189
    },
    "salus": {
        "messagePrefix": "\u0018Salus Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 63,
        "scriptHash": 196,
        "wif": 191
    },
    "smileycoin": {
        "messagePrefix": "\u0018Smileycoin Signed Message:\n",
        "bip32": {
            "public": 508964250,
            "private": 508965308
        },
        "pubKeyHash": 25,
        "scriptHash": 5,
        "wif": 5
    },
    "solarcoin": {
        "messagePrefix": "\u0018SolarCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 18,
        "scriptHash": 5,
        "wif": 146
    },
    "stash": {
        "messagePrefix": "\u0018Stash Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 76,
        "scriptHash": 16,
        "wif": 204
    },
    "stashtn": {
        "messagePrefix": "\u0018Stash Test Signed Message:\n",
        "bip32": {
            "public": 70617039,
            "private": 70615956
        },
        "pubKeyHash": 140,
        "scriptHash": 19,
        "wif": 239
    },
    "stratis": {
        "messagePrefix": "\u0018Stratis Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 63,
        "scriptHash": 125,
        "wif": 191
    },
    "stratistest": {
        "messagePrefix": "\u0018Stratis Test Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 65,
        "scriptHash": 125,
        "wif": 191
    },
    "syscoin": {
        "messagePrefix": "\u0018Syscoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 63,
        "scriptHash": 5,
        "wif": 128,
        "p2wpkh": {
            "baseNetwork": "syscoin",
            "messagePrefix": "\u0018Syscoin Signed Message:\n",
            "bech32": "sys",
            "bip32": {
                "public": 78792518,
                "private": 78791436
            },
            "pubKeyHash": 63,
            "scriptHash": 5,
            "wif": 128
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "syscoin",
            "messagePrefix": "\u0018Syscoin Signed Message:\n",
            "bech32": "sys",
            "bip32": {
                "public": 77429938,
                "private": 77428856
            },
            "pubKeyHash": 63,
            "scriptHash": 5,
            "wif": 128
        }
    },
    "toa": {
        "messagePrefix": "\u0018TOA Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 65,
        "scriptHash": 23,
        "wif": 193
    },
    "twins": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 36513075,
            "private": 35729707
        },
        "pubKeyHash": 73,
        "scriptHash": 83,
        "wif": 66
    },
    "twinstestnet": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 981492128,
            "private": 981489719
        },
        "pubKeyHash": 76,
        "scriptHash": 137,
        "wif": 237
    },
    "ultimatesecurecash": {
        "messagePrefix": "\u0018UltimateSecureCash Signed Message:\n",
        "bip32": {
            "public": 4001376362,
            "private": 4001378792
        },
        "pubKeyHash": 68,
        "scriptHash": 125,
        "wif": 191
    },
    "unobtanium": {
        "messagePrefix": "\u0018Unobtanium Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 130,
        "scriptHash": 30,
        "wif": 224
    },
    "vcash": {
        "messagePrefix": "\u0018Vcash Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 71,
        "scriptHash": 8,
        "wif": 199
    },
    "verge": {
        "messagePrefix": "\u0018VERGE Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 30,
        "scriptHash": 33,
        "wif": 158
    },
    "vertcoin": {
        "messagePrefix": "\u0018Vertcoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 71,
        "scriptHash": 5,
        "wif": 128,
        "p2wpkh": {
            "baseNetwork": "vertcoin",
            "messagePrefix": "\u0018Vertcoin Signed Message:\n",
            "bech32": "vtc",
            "bip32": {
                "public": 76067358,
                "private": 76066276
            },
            "pubKeyHash": 71,
            "scriptHash": 5,
            "wif": 128
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "vertcoin",
            "messagePrefix": "\u0018Vertcoin Signed Message:\n",
            "bip32": {
                "public": 76067358,
                "private": 76066276
            },
            "pubKeyHash": 71,
            "scriptHash": 5,
            "wif": 128
        }
    },
    "vivo": {
        "messagePrefix": "\u0018DarkCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 70,
        "scriptHash": 10,
        "wif": 198
    },
    "vpncoin": {
        "messagePrefix": "\u0018VpnCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 71,
        "scriptHash": 5,
        "wif": 199
    },
    "whitecoin": {
        "messagePrefix": "\u0018Whitecoin Signed Message:\n",
        "bip32": {
            "public": 76054302,
            "private": 76059885
        },
        "pubKeyHash": 73,
        "scriptHash": 87,
        "wif": 201
    },
    "wincoin": {
        "messagePrefix": "\u0018WinCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 73,
        "scriptHash": 28,
        "wif": 201
    },
    "zcash": {
        "messagePrefix": "\u0018Zcash Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 7352,
        "scriptHash": 7357,
        "wif": 128
    },
    "xuez": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 36513075,
            "private": 35729707
        },
        "pubKeyHash": 75,
        "scriptHash": 18,
        "wif": 212
    },
    "bitcoinprivate": {
        "messagePrefix": "\u0018BitcoinPrivate Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 4901,
        "scriptHash": 5039,
        "wif": 128
    },
    "bitcoinz": {
        "messagePrefix": "\u0018BitcoinZ Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 7352,
        "scriptHash": 7357,
        "wif": 128
    },
    "hush": {
        "messagePrefix": "\u0018Hush Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 7352,
        "scriptHash": 7357,
        "wif": 128
    },
    "hush3": {
        "messagePrefix": "\u0018Hush Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 60,
        "scriptHash": 85,
        "wif": 188
    },
    "zoobc": {
        "messagePrefix": "\u0018ZooBC Signed Message:\n",
        "bech32": "bc",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 0,
        "scriptHash": 5,
        "wif": 128
    },
    "zclassic": {
        "messagePrefix": "\u0018Zcash Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 7352,
        "scriptHash": 7357,
        "wif": 128
    },
    "zencash": {
        "messagePrefix": "\u0018Zcash Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 8329,
        "scriptHash": 8342,
        "wif": 128
    },
    "energi": {
        "messagePrefix": "DarkCoin Signed Message:\n",
        "bip32": {
            "public": 62441558,
            "private": 3621547679
        },
        "pubKeyHash": 33,
        "scriptHash": 53,
        "wif": 106
    },
    "exchangecoin": {
        "messagePrefix": "ExchangeCoin Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 8633,
        "scriptHash": 13487,
        "wif": 128
    },
    "artax": {
        "messagePrefix": "\u0018Artax Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 23,
        "scriptHash": 7357,
        "wif": 151
    },
    "bitcoingreen": {
        "messagePrefix": "\u0018BitcoinGreen Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 38,
        "scriptHash": 7357,
        "wif": 46
    },
    "anon": {
        "messagePrefix": "\u0018ANON Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 1410,
        "scriptHash": 21385,
        "wif": 128
    },
    "projectcoin": {
        "messagePrefix": "\u0018ProjectCoin Signed Message:\n",
        "bip32": {
            "public": 36513075,
            "private": 35729707
        },
        "pubKeyHash": 55,
        "scriptHash": 8,
        "wif": 117
    },
    "phore": {
        "messagePrefix": "\u0018Phore Signed Message:\n",
        "bip32": {
            "public": 36513075,
            "private": 35729707
        },
        "pubKeyHash": 55,
        "scriptHash": 13,
        "wif": 212
    },
    "blocknode": {
        "messagePrefix": "\u0018Blocknode Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 25,
        "scriptHash": 63,
        "wif": 75
    },
    "blocknode_testnet": {
        "messagePrefix": "\u0018Blocknode Testnet Signed Message:\n",
        "bip32": {
            "public": 70617039,
            "private": 70615956
        },
        "pubKeyHash": 85,
        "scriptHash": 125,
        "wif": 137
    },
    "litecoinz": {
        "messagePrefix": "\u0018LitecoinZ Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066275
        },
        "pubKeyHash": 2739,
        "scriptHash": 2744,
        "wif": 128
    },
    "blockstamp": {
        "messagePrefix": "\u0018BlockStamp Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 0,
        "scriptHash": 5,
        "wif": 128,
        "p2wpkh": {
            "baseNetwork": "blockstamp",
            "messagePrefix": "\u0018BlockStamp Signed Message:\n",
            "bech32": "bc",
            "bip32": {
                "public": 76067358,
                "private": 76066276
            },
            "pubKeyHash": 0,
            "scriptHash": 5,
            "wif": 128
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "blockstamp",
            "messagePrefix": "\u0018BlockStamp Signed Message:\n",
            "bech32": "bc",
            "bip32": {
                "public": 76067358,
                "private": 76066276
            },
            "pubKeyHash": 0,
            "scriptHash": 5,
            "wif": 128
        }
    },
    "deeponion": {
        "messagePrefix": "x18DeepOnion Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 31,
        "scriptHash": 78,
        "wif": 159,
        "p2wpkh": {
            "baseNetwork": "deeponion",
            "messagePrefix": "\u0018DeepOnion Signed Message:\n",
            "bech32": "dpn",
            "bip32": {
                "public": 76067358,
                "private": 76066276
            },
            "pubKeyHash": 31,
            "scriptHash": 78,
            "wif": 159
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "deeponion",
            "messagePrefix": "\u0018DeepOnion Signed Message:\n",
            "bech32": "dpn",
            "bip32": {
                "public": 76067358,
                "private": 76066276
            },
            "pubKeyHash": 31,
            "scriptHash": 78,
            "wif": 159
        }
    },
    "cpuchain": {
        "messagePrefix": "x18CPUchain Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 28,
        "scriptHash": 30,
        "wif": 128,
        "p2wpkh": {
            "baseNetwork": "cpuchain",
            "messagePrefix": "\u001dCPUchain Signed Message:\n",
            "bech32": "cpu",
            "bip32": {
                "public": 78792518,
                "private": 78791436
            },
            "pubKeyHash": 28,
            "scriptHash": 30,
            "wif": 128
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "cpuchain",
            "messagePrefix": "\u001dCPUchain Signed Message:\n",
            "bech32": "cpu",
            "bip32": {
                "public": 77429938,
                "private": 77428856
            },
            "pubKeyHash": 28,
            "scriptHash": 30,
            "wif": 128
        }
    },
    "wagerr": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 36513075,
            "private": 35729707
        },
        "pubKeyHash": 73,
        "scriptHash": 63,
        "wif": 199
    },
    "bitcoinsv": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 0,
        "scriptHash": 5,
        "wif": 128
    },
    "monkeyproject": {
        "messagePrefix": "Monkey Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76078564
        },
        "pubKeyHash": 51,
        "scriptHash": 28,
        "wif": 55,
        "p2wpkh": {
            "baseNetwork": "monkeyproject",
            "messagePrefix": "Monkey Signed Message:\n",
            "bech32": "monkey",
            "bip32": {
                "public": 76067358,
                "private": 76078564
            },
            "pubKeyHash": 51,
            "scriptHash": 28,
            "wif": 55
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "monkeyproject",
            "messagePrefix": "Monkey Signed Message:\n",
            "bech32": "monkey",
            "bip32": {
                "public": 76067358,
                "private": 76078564
            },
            "pubKeyHash": 51,
            "scriptHash": 28,
            "wif": 55
        }
    },
    "rapids": {
        "messagePrefix": "DarkNet Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 61,
        "scriptHash": 6,
        "wif": 46
    },
    "aryacoin": {
        "messagePrefix": "\u0018Aryacoin Signed Message:\n",
        "bech32": "arya",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 23,
        "scriptHash": 111,
        "wif": 151
    },
    "thought": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 4224098317,
            "private": 1525405894
        },
        "pubKeyHash": 7,
        "scriptHash": 9,
        "wif": 123
    },
    "elastos": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 33,
        "scriptHash": 196,
        "wif": 239
    },
    "sugarchain": {
        "messagePrefix": "\u0018Sugarchain Signed Message:\n",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 63,
        "scriptHash": 125,
        "wif": 128,
        "p2wpkh": {
            "baseNetwork": "sugarchain",
            "messagePrefix": "\u001dSugarchain Signed Message:\n",
            "bech32": "sugar",
            "bip32": {
                "public": 78792518,
                "private": 78791436
            },
            "pubKeyHash": 63,
            "scriptHash": 125,
            "wif": 128
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "sugarchain",
            "messagePrefix": "\u001dSugarchain Signed Message:\n",
            "bech32": "sugar",
            "bip32": {
                "public": 77429938,
                "private": 77428856
            },
            "pubKeyHash": 63,
            "scriptHash": 125,
            "wif": 128
        }
    },
    "sugarchaintestnet": {
        "messagePrefix": "\u0018Sugarchain Signed Message:\n",
        "bip32": {
            "public": 73342198,
            "private": 73341116
        },
        "pubKeyHash": 66,
        "scriptHash": 128,
        "wif": 239,
        "p2wpkh": {
            "baseNetwork": "sugarchaintestnet",
            "messagePrefix": "\u0018Sugarchain Signed Message:\n",
            "bech32": "tugar",
            "bip32": {
                "public": 73342198,
                "private": 73341116
            },
            "pubKeyHash": 66,
            "scriptHash": 128,
            "wif": 239
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "sugarchaintestnet",
            "messagePrefix": "\u0018Sugarchain Signed Message:\n",
            "bech32": "tugar",
            "bip32": {
                "public": 71979618,
                "private": 71978536
            },
            "pubKeyHash": 66,
            "scriptHash": 128,
            "wif": 239
        }
    },
    "regtest": {
        "messagePrefix": "\u0018Bitcoin Signed Message:\n",
        "bech32": "bcrt",
        "bip32": {
            "public": 70617039,
            "private": 70615956
        },
        "pubKeyHash": 111,
        "scriptHash": 196,
        "wif": 239,
        "p2wpkh": {
            "baseNetwork": "regtest",
            "messagePrefix": "\u0018Bitcoin Signed Message:\n",
            "bech32": "bcrt",
            "bip32": {
                "public": 73342198,
                "private": 73341116
            },
            "pubKeyHash": 111,
            "scriptHash": 196,
            "wif": 239
        },
        "p2wpkhInP2sh": {
            "baseNetwork": "regtest",
            "messagePrefix": "\u0018Bitcoin Signed Message:\n",
            "bech32": "bcrt",
            "bip32": {
                "public": 71979618,
                "private": 71978536
            },
            "pubKeyHash": 111,
            "scriptHash": 196,
            "wif": 239
        },
        "p2wsh": {
            "baseNetwork": "regtest",
            "messagePrefix": "\u0018Bitcoin Signed Message:\n",
            "bech32": "bcrt",
            "bip32": {
                "public": 39277699,
                "private": 39276616
            },
            "pubKeyHash": 111,
            "scriptHash": 196,
            "wif": 239
        },
        "p2wshInP2sh": {
            "baseNetwork": "regtest",
            "messagePrefix": "\u0018Bitcoin Signed Message:\n",
            "bech32": "bcrt",
            "bip32": {
                "public": 37915119,
                "private": 37914037
            },
            "pubKeyHash": 111,
            "scriptHash": 196,
            "wif": 239
        }
    },
    "argoneum": {
        "messagePrefix": "unused",
        "bip32": {
            "public": 76067358,
            "private": 76066276
        },
        "pubKeyHash": 50,
        "scriptHash": 97,
        "wif": 191
    }
}