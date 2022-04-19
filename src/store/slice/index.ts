import { combineReducers } from '@reduxjs/toolkit';

import account, { AccountState } from './account';
import app, { AppState } from './app';

const reducer = combineReducers({
  app,
  account,
})

type StoreType = {
  app: AppState
  account: AccountState
}

export { reducer };
export type { StoreType };

export * from './app'
