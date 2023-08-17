import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface PropsSettings {
  themeMode: string;
}

const initialState: PropsSettings = { themeMode: 'light' };

export const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    onChangeMode: (state, action: PayloadAction<string>) => {
      state.themeMode = action.payload;
    }
  }
});

export const { onChangeMode } = settingSlice.actions;
