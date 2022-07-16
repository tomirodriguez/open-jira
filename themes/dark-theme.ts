import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: grey[900],
    },
  },
});
