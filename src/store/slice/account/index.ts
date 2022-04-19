import { createSlice } from '@reduxjs/toolkit';

import { AccountState } from './types';

const initialState: AccountState = {}

const account = createSlice({
  name: 'account',
  initialState,
  reducers: {},
})

const { reducer, actions } = account

export default reducer
export const {} = actions

export * from './middleware'
export * from './types'
