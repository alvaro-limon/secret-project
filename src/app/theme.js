import { createTheme } from "@mui/material";

const maintheme = createTheme({
    palette: {
        common: {
            black: '#000',
            white: '#fff',
        },
        primary: {
            main: '#7AAC95',
            light: '#e3f2fd',
            dark: '#7AAC95'
        },
        secondary: {
            main: '#ce93d8',
            light: '#f3e5f5',
            dark: '#ab47bc'
        },
         
        text: {
            primary: '#2F4858',
            secondary: '#38616D',
            disabled: 'rgba(255,255,255,0.5)',
            icon: 'rgba(255,255,255,0.5)',
            divider: 'rgba(255,255,255,0.12)'
        },

        background: {
            default: '#A0C49D',
            dark: '#84a081',
            paper: '#add3aa'
        }
    }
})

export { maintheme }