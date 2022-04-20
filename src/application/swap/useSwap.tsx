import { useEffect } from 'react';

import { useAccountStore } from 'store';

import {
  useConnection,
  useWallet,
} from '@solana/wallet-adapter-react';

function useSwap() {
  const { connection } = useConnection()
  const { publicKey, connected } = useWallet()

  const { fetchAccountInfo } = useAccountStore()

  useEffect(() => {
    if (connected) {
      fetchAccountInfo()
    }
  }, [connected, fetchAccountInfo])

  return { connected }
}

export { useSwap };
