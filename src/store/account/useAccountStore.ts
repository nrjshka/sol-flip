import create from 'zustand';

import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from '@solana/web3.js';

type TUseAccountStore = {
  isConnected: boolean
  balance: number
  connection: Connection | null
  publicKey: PublicKey | null
  fetchAccountInfo: VoidFunction
}

const useAccountStore = create<TUseAccountStore>((set, getStore) => ({
  isConnected: false,
  balance: 0,
  connection: null,
  publicKey: null,
  fetchAccountInfo: async () => {
    const { publicKey, connection } = getStore()

    if (!publicKey || !connection) {
      return
    }

    try {
      const balanceRaw = await connection?.getBalance(publicKey, 'confirmed')

      set(() => ({
        balance: balanceRaw / LAMPORTS_PER_SOL,
      }))
    } catch (e) {
      console.error('Error while fetching balance')

      set(() => ({
        balance: 0,
      }))
    }
  },
}))

useAccountStore.subscribe((data) => console.log('useAccountStore', data))

export { useAccountStore };
export type { TUseAccountStore };
