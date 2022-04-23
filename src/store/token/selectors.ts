import { TUseTokenStore } from './types';

const getRawTokensList = (store: TUseTokenStore) => store.rawTokensList
const getTokensList = (store: TUseTokenStore) => store.tokensList
const getLoadTokensList = (store: TUseTokenStore) => store.loadTokensList

export { getLoadTokensList, getRawTokensList, getTokensList };
