import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    greeny: {
      main: '#01BDA7',
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
        margin: '0',
      }
    },
    MuiTypography: {
      root: {
        margin: '0 0 10px 0',
      }
    },
    MuiFormControl: {
      root: {
        fontSize: '14px',
        lineHeight: '19px',
        fontWeight: '400',
      }
    },
    MuiInputBase: {
      input: {
        fontSize: '14px',
        lineHeight: '19px',
        fontWeight: '400',
        color: 'rgba(49, 49, 49, 0.5)',
      }
    },
    MuiButton: {
      root: {
        borderRadius: '36px',
        padding: '15px 26px',
      },
      containedPrimary: {
        backgroundColor: '#01BDA7',
      },
      outlined: {
        borderColor: '#01BDA7',
        color: '#01BDA7',
        paddingTop: '15px',
        paddingBottom: '16px',
      },
      label: {
        textTransform: 'none',
        fontSize: '14px',
        lineHeight: '19px',
        fontWeight: '600',
      }
    },
    MuiDialog: {
      paper: {
        margin: '0',
      },
      paperWidthSm: {
        width: '100%',
      }
    }
  }
});

export default theme;