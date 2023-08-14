import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface PropsAuth {
  value: number;
}

const initialState: PropsAuth = { value: 0 };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    }
  }
});

export const { increment } = authSlice.actions;
