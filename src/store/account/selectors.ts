import { TUseAccountStore } from './useAccountStore';

const getIsConnected = (store: TUseAccountStore) => store.isConnected

const getFetchAccountInfo = (store: TUseAccountStore) => store.fetchAccountInfo

export { getFetchAccountInfo, getIsConnected };
