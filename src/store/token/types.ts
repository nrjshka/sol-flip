import { RawAccount } from '@solana/spl-token';

type RawToken = {
  symbol: string
  name: string
  mint: string
  decimals: Number
  extensions: Record<string, string>
  icon: string
}

type Token = {
  balance: number
} & RawToken

type TokenList = {
  name: string
  timestamp: string
  version: {
    major: Number
    minor: Number
    patch: Number
  }
  official: RawToken[]
  unOfficial: RawToken[]
  blacklist: RawToken[]
}

type TUseTokenStore = {
  rawTokensList: TokenList
  tokensList: Set<Token>
  loadTokensList: (opt: { allOwnedTokens: RawAccount[]; balance: number }) => void
}

export type { RawToken, Token, TokenList, TUseTokenStore };
