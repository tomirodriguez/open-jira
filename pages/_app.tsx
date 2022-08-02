import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { SnackbarProvider } from 'notistack';
import { EntriesProvider } from '../context/Entries';
import { UIProvider } from '../context/UI';

import { lightTheme } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <UIProvider>
        <EntriesProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </EntriesProvider>
      </UIProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
