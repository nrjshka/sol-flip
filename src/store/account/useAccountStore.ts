import create from 'zustand';

import { RawAccount } from '@solana/spl-token';
import {
  Connection,
  PublicKey,
} from '@solana/web3.js';

import {
  fetchBalance,
  fetchTokenAccountsByOwner,
} from './utils';

type TUseAccountStore = {
  isConnected: boolean
  balance: number
  allOwnedTokens: RawAccount[]
  connection: Connection | null
  publicKey: PublicKey | null
  fetchAccountInfo: VoidFunction
}

const initialState: Omit<TUseAccountStore, 'fetchAccountInfo'> = {
  isConnected: false,
  balance: 0,
  allOwnedTokens: [],
  connection: null,
  publicKey: null,
}

const useAccountStore = create<TUseAccountStore>((set, getStore) => ({
  ...initialState,
  fetchAccountInfo: async () => {
    const { publicKey, connection } = getStore()

    if (!publicKey || !connection) {
      return
    }

    try {
      const [balance, allOwnedTokens] = await Promise.all([
        fetchBalance({ connection, publicKey }),
        fetchTokenAccountsByOwner({ connection, publicKey }),
      ])

      set(() => ({
        balance,
        allOwnedTokens,
      }))
    } catch (e) {
      console.error('Error while fetching user info')

      set(() => ({
        balance: 0,
      }))
    }
  },
}))

useAccountStore.subscribe((data) => console.log('useAccountStore', data))

export { initialState, useAccountStore };
export type { TUseAccountStore };
