import { useEffect } from 'react';

import {
  getAllOwnedTokens,
  useAccountStore,
} from 'store/account';

import { getLoadTokensList } from './selectors';
import { useTokenStore } from './useTokenStore';

function useToken() {
  const loadTokenList = useTokenStore(getLoadTokensList)
  const allOwnedTokens = useAccountStore(getAllOwnedTokens)

  useEffect(() => {
    loadTokenList(allOwnedTokens)
  }, [loadTokenList, allOwnedTokens])
}

export { useToken };
