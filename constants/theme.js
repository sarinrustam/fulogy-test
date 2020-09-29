import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Open-Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  overrides: {
    MuiBreadcrumbs: {
      ol: {
        lineHeight: '16px',
        fontSize: '12px',
        fontWeight: '400',
      },
      separator: {
        color: 'white',
        marginLeft: '0',
        marginRight: '0',
      }
    },
    MuiIconButton: {
      root: {
        padding: '0',
        color: 'white',
        margin: '0'
      }
    }
  }
});

export default theme;