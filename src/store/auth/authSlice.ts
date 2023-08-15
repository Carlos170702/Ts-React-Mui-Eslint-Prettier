import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

// se usa PayloadAction para tipar el tipo de dato que debera traer el payload

export interface PropsAuth {
  token: string | null;
  isLoading: boolean;
}

const initialState: PropsAuth = { token: null, isLoading: false };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    onIsloading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

export const { onLogin, onIsloading } = authSlice.actions;
