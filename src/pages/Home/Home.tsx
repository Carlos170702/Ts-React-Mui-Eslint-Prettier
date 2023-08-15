import { useCustomDispatch, useCustomSelector } from 'hook/redux';
import React from 'react';
import { type DataLogin, startLogin } from 'store/auth/thunk';

export const Home: React.FC = () => {
  const { token, isLoading } = useCustomSelector((state) => state.auth);
  const dispatch = useCustomDispatch();

  const handleLogin = async (): Promise<void> => {
    const newData: DataLogin = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    };
    await dispatch(startLogin(newData));
  };

  return (
    <>
      <div>
        <h2>{!isLoading ? token : 'Loading.....'}</h2>
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};
