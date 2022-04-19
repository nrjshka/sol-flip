import { combineReducers } from '@reduxjs/toolkit';

import app, { AppState } from './app';

const reducer = combineReducers({
  app,
})

type StoreType = {
  app: AppState
}

export { reducer };
export type { StoreType };

export * from './app'
