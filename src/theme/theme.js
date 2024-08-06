import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#222720',
    },
    secondary: {
      main: '#DCECD6',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    allVariants: {
      color: '#222720',
    },
  },
});

export default theme;
