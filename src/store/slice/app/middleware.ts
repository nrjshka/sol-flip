import { createAsyncThunk } from '@reduxjs/toolkit';

import { loadAccountInfo } from '../account';
import { AppActionTypes } from './types';

// initialize app
const loadApp = createAsyncThunk(AppActionTypes.LOAD, async (_, { dispatch }) => {
  await Promise.allSettled([dispatch(loadAccountInfo())])
})

export { loadApp };
