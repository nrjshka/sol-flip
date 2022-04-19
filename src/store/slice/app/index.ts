import { createSlice } from '@reduxjs/toolkit';

import { AppState } from './types';

const initialState: AppState = {
  isLoading: true,
}

const search = createSlice({
  name: 'app',
  initialState,
  reducers: {},
})

const { reducer, actions } = search

export default reducer
export const {} = actions

export * from './types'
