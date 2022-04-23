import { TUseAccountStore } from './useAccountStore';

const getIsConnected = (store: TUseAccountStore) => store.isConnected
const getBalance = (store: TUseAccountStore) => store.balance
const getAllOwnedTokens = (store: TUseAccountStore) => store.allOwnedTokens
const getFetchAccountInfo = (store: TUseAccountStore) => store.fetchAccountInfo

export { getAllOwnedTokens, getBalance, getFetchAccountInfo, getIsConnected };
