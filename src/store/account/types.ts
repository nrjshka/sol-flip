import { RawAccount } from '@solana/spl-token';
import {
  Connection,
  PublicKey,
} from '@solana/web3.js';

type TUseAccountStore = {
  isConnected: boolean
  balance: number
  allOwnedTokens: RawAccount[]
  connection: Connection | null
  publicKey: PublicKey | null
  fetchAccountInfo: VoidFunction
}

export type { TUseAccountStore };
