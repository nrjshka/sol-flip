import create from 'zustand';

import { RawAccount } from '@solana/spl-token';

import { config } from './config';
import { TUseTokenStore } from './types';

const initialState: Omit<TUseTokenStore, 'loadTokensList'> = {
  rawTokensList: config,
  tokensList: [],
}

const useTokenStore = create<TUseTokenStore>(() => ({
  ...initialState,
  loadTokensList: (allOwnedTokens: RawAccount[]) => {
    console.log(allOwnedTokens)
  },
}))

export { useTokenStore };
