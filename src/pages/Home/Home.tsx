import React from 'react';
import { useCustomDispatch, useCustomSelector } from 'hook/redux';
import { type DataLogin, startLogin } from 'store/auth/thunk';
import { AppBar, Button, Switch, Typography, styled } from '@mui/material';
import { onChangeMode } from 'store/settings/SettingsSlice';

export const Home: React.FC = () => {
  const { token, isLoading } = useCustomSelector((state) => state.auth);
  const { themeMode } = useCustomSelector((state) => state.settings);
  const dispatch = useCustomDispatch();

  const handleLogin = async (): Promise<void> => {
    const newData: DataLogin = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    };
    await dispatch(startLogin(newData));
  };

  const handleChangeMode = (): void => {
    const activeMode = themeMode === 'dark' ? 'light' : 'dark';

    dispatch(onChangeMode(activeMode));
  };

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    display: 'flex',
    color: theme.palette.primary.dark,
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'sticky'
  }));

  return (
    <>
      <div>
        <AppBarStyled>
          <Typography variant="h6">Carlos daniel</Typography>
          <Switch onChange={handleChangeMode} />
        </AppBarStyled>
        <Typography variant="h1">
          {!isLoading ? token : 'Loading.....'}
        </Typography>
        <Button onClick={handleLogin} variant="contained">
          Login
        </Button>
      </div>
    </>
  );
};
