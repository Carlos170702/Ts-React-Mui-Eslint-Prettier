import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useCustomSelector } from 'hook/redux';

interface Props {
  children: React.ReactNode;
}

const Themeprovider: React.FC<Props> = ({ children }) => {
  const { themeMode } = useCustomSelector((state) => state.settings);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#651fff'
      },
      mode: themeMode === 'light' ? 'light' : 'dark'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {children}
    </ThemeProvider>
  );
};

export default Themeprovider;
