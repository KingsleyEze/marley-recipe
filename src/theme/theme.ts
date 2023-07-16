import { ThemeOptions, createTheme } from '@mui/material';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const themeOptions: ThemeOptions = {
  palette: {
    background: {
      default: '#ffebee',
    },
    primary: {
      main: '#1976d2',
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
