import { useCustomDispatch, useCustomSelector } from 'hook/redux';
import React from 'react';
import { increment } from 'store/auth/authSlice';

export const Home: React.FC = () => {
  const { value } = useCustomSelector((state) => state.auth);
  const disatch = useCustomDispatch();

  const handlePlus = (): void => {
    disatch(increment(value + 1));
  };

  return (
    <>
      <div>
        <h1>{value}</h1>
        <button onClick={handlePlus}>+</button>
      </div>
    </>
  );
};
