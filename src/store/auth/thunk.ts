import { type TypeThunk } from 'store/store';
import { instanceAxios } from 'utils/axios';
import { onIsloading, onLogin } from './authSlice';
import { type AxiosError, type AxiosResponse } from 'axios';

interface ResponseLogin {
  token: string;
}

export interface DataLogin {
  email: string;
  password: string;
}

export const startLogin = (dataUser: DataLogin): TypeThunk => {
  return async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(onIsloading(true));
    try {
      const response = await instanceAxios.post<ResponseLogin>(
        '/login',
        dataUser
      );

      dispatch(onLogin(response.data.token));
      return response;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(onIsloading(false));
    }
  };
};
