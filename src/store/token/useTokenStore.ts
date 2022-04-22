import create from 'zustand';

import { config } from './config';
import { TUseTokenStore } from './types';

const useTokenStore = create<TUseTokenStore>(() => ({
  tokensList: config,
}))

export { useTokenStore };
