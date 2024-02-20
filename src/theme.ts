import { ThemeOptions, createTheme } from '@mui/material';

const styleOverrides: ThemeOptions = {
    palette: {
        primary: {
            main: '#5e44ff',
        },
        secondary: {
            main: '#65c427',
        },
    },
    components: {
        MuiTabs: {
            styleOverrides: {
                root: {
                    maxHeight: 'inherit',
                },
                indicator: {
                    backgroundColor: '#5e44ff',
                },
            },
        },    },
};

export default createTheme(styleOverrides);
