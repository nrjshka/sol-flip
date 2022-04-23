import create from 'zustand';

import { LAMPORTS_PER_SOL } from '@solana/web3.js';

import { Token } from './';
import { config } from './config';
import { TUseTokenStore } from './types';

const initialState: Omit<TUseTokenStore, 'loadTokensList'> = {
  rawTokensList: config,
  tokensList: new Set(),
}

const useTokenStore = create<TUseTokenStore>((set, getState) => ({
  ...initialState,
  loadTokensList: ({ allOwnedTokens, balance }) => {
    const { official, unOfficial } = getState().rawTokensList

    const mergedTokens = [...official, ...unOfficial]

    const tokensList = new Set<Token>()

    if (balance) {
      tokensList.add({
        symbol: '',
        name: 'Solana',
        mint: '',
        decimals: LAMPORTS_PER_SOL,
        extensions: {},
        icon: '',
        balance,
      })
    }

    for (let ownedToken of allOwnedTokens) {
      const searchedToken = mergedTokens.find((token) => token.mint === ownedToken.mint.toString())

      if (searchedToken) {
        tokensList.add({
          ...searchedToken,
          balance: 20,
        })
      }
    }

    for (let token of mergedTokens) {
      tokensList.add({
        ...token,
        balance: 0,
      })
    }

    set((s) => ({
      tokensList,
    }))
  },
}))

useTokenStore.subscribe((data) => console.log('useTokenStore', data))

export { useTokenStore };
