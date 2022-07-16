import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { EntriesProvider } from '../context';

import { lightTheme } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </EntriesProvider>
  );
}

export default MyApp;
