import { createAsyncThunk } from '@reduxjs/toolkit';

import { AccountActionTypes } from './types';

// initialize account info
const loadAccountInfo = createAsyncThunk(AccountActionTypes.LOAD, async (_, { dispatch }) => {})

export { loadAccountInfo };
