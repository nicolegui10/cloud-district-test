import { createMuiTheme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const appTheme = createMuiTheme({
    // https://material-ui.com/style/color/#color-palette
    palette: {
        type: 'dark',
        primary: {
            main: '#00e6ec',
            google: '#F44336'
        },
        secondary: {
            main: '#f5f0ec'
        },
        error: {
            main: '#F44336'
        },
        warning: {
            main: '#FFD54F'
        }
    },
    typography: {
        useNextVariants: true,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            'Ubuntu',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
    },
});

export default appTheme;