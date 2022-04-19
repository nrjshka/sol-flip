import { createSlice } from '@reduxjs/toolkit';

import { loadApp } from './middleware';
import { AppState } from './types';

const initialState: AppState = {
  isLoading: true,
}

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadApp.fulfilled, (state) => {
      state.isLoading = false
    })
  },
})

const { reducer, actions } = app

export default reducer
export const {} = actions

export * from './middleware'
export * from './types'
