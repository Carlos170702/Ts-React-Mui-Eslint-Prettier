import {
  type Action,
  configureStore,
  type ThunkAction
} from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* 
configuracion de cuando guardara los datos a localstorage 
  1.-nombre de los datos
  2.-es algo que importamos de la libreria de redux-persist 
  3.- whitelist es los datos que quiers que se agrege y si le pones blacklist son los datos que no quieres que se agrege 
*/
const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
};

export const store = configureStore({
  /*
    a cada reducer se le tiene que poner un persistReducer y hacer un persistConfig nuevo para cada uno y
    tienes que tipar nuevamente el persisReducer por que si no no te dara el autho completado enla llamada del useCustomSelector 
    eso es con el: 
    * persistReducer<ReturnType<typeof (name_Slice.reducer)>>
    asi es como lo tipamos 
  */
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

// este es el persistor que se le pondra en el provider de esta configuracion
export const persistent = persistStore(store);

// esto es para exponer el tipo de dato que da el reducer y poder tipar el
// useSelector a lo mismo que el useDispatch esto aparece en la documentacion de redux
export type TypeSelector = ReturnType<typeof store.getState>;
export type TypeDispatch = typeof store.dispatch;
// este es para tipar una accion
export type TypeThunk = ThunkAction<
  Promise<unknown>,
  TypeSelector,
  unknown,
  Action<unknown>
>;
