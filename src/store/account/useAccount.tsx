import { useEffect } from 'react';

import {
  useConnection,
  useWallet,
} from '@solana/wallet-adapter-react';

import {
  getFetchAccountInfo,
  getIsConnected,
} from './selectors';
import {
  initialState,
  useAccountStore,
} from './useAccountStore';

function useAccount() {
  const { connection } = useConnection()
  const { publicKey, connected } = useWallet()

  const isConnected = useAccountStore(getIsConnected)
  const fetchAccountInfo = useAccountStore(getFetchAccountInfo)

  // store setup
  useEffect(() => {
    if (connected) {
      useAccountStore.setState({
        publicKey,
        isConnected: connected,
        connection,
      })
    } else {
      useAccountStore.setState(initialState)
    }
  }, [connected, publicKey, connection])

  // fetch account info
  useEffect(() => {
    if (isConnected) {
      fetchAccountInfo()
    }
  }, [isConnected, fetchAccountInfo])

  return { isConnected }
}

export { useAccount };
