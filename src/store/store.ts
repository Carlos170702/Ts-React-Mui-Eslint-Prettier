import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* 
configuracion de cuando guardara los datos a localstorage 
  1.-nombre de los datos
  2.-es algo que importamos de la libreria de redux-persist 
  3.- whitelist es los datos que quieres agregar y si le pones blacklist son los datos que no quieres que se agrege 
*/
const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['value']
};

export const store = configureStore({
  // a cada reducer se le tieene que poner un persistReducer y hacer un persistConfig nuevo para cada uno
  reducer: {
    auth: persistReducer<ReturnType<typeof authSlice.reducer>>(
      persistAuthConfig,
      authSlice.reducer
    )
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false
    })
});

export const persistent = persistStore(store);

export type TypeReducer = ReturnType<typeof store.getState>;
export type TypeDispatch = typeof store.dispatch;
