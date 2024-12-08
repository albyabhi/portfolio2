// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Set the theme to dark mode
    primary: {
      main: '#90caf9', // Light blue for primary
      contrastText: '#ffffff', // Ensure text is visible on primary
    },
    background: {
      default: '#242424', // Background color as provided
      paper: '#2c2c2c', // Slightly lighter shade for paper elements
    },
    
    divider: 'rgba(255, 255, 255, 0.12)', // Divider color
  },
 
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevent uppercase button text
          color: '#90caf9',
        },
      },
    },
  },
});

export default theme;
