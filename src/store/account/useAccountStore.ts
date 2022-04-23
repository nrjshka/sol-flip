import create from 'zustand';

import { TUseAccountStore } from './types';
import {
  fetchBalance,
  fetchTokenAccountsByOwner,
} from './utils';

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
        allOwnedTokens: [],
      }))
    }
  },
}))

useAccountStore.subscribe((data) => console.log('useAccountStore', data))

export { initialState, useAccountStore };
export type { TUseAccountStore };
