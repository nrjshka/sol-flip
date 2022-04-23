import { TUseTokenStore } from './types';

const getRawTokensList = (store: TUseTokenStore) => store.rawTokensList

const getLoadTokensList = (store: TUseTokenStore) => store.loadTokensList

export { getLoadTokensList, getRawTokensList };
