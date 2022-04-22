type RawToken = {
  symbol: string
  name: string
  mint: string
  decimals: Number
  extensions: Record<string, string>
  icon: string
}

type TokenList = {
  name: string
  timestamp: string
  version: {
    major: Number
    minor: Number
    patch: Number
  }
  official: RawToken[]
}

type TUseTokenStore = {
  tokensList: TokenList
}

export type { RawToken, TokenList, TUseTokenStore };
