import { TUseAccountStore } from './useAccountStore';

const getIsConnected = (store: TUseAccountStore) => store.isConnected

const getAllOwnedTokens = (store: TUseAccountStore) => store.allOwnedTokens

const getFetchAccountInfo = (store: TUseAccountStore) => store.fetchAccountInfo

export { getAllOwnedTokens, getFetchAccountInfo, getIsConnected };
