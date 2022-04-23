import { useEffect } from 'react';

import {
  getAllOwnedTokens,
  getBalance,
  useAccountStore,
} from 'store/account';

import { getLoadTokensList } from './selectors';
import { useTokenStore } from './useTokenStore';

function useToken() {
  const loadTokenList = useTokenStore(getLoadTokensList)
  const allOwnedTokens = useAccountStore(getAllOwnedTokens)
  const balance = useAccountStore(getBalance)

  useEffect(() => {
    loadTokenList({ allOwnedTokens, balance })
  }, [loadTokenList, allOwnedTokens, balance])
}

export { useToken };
