// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333333', // Dark background color
    },
    secondary: {
      main: '#ff5722', // Color for buttons
    },
    text: {
      primary: '#000000', // Text color for content
      secondary: '#ffffff', // Text color for input (white)
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 2,
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        borderColor: '#555555', // Darker border color
      },
    },
  },
});

export default theme;
