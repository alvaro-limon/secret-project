import { createTheme } from "@mui/material";

const maintheme = createTheme({
    palette: {
        common: {
            black: '#000',
            white: '#fff',
        },
        primary: {
            main: '#A0C49D',
            light: '#e3f2fd',
            dark: '#7AAC95'
        },
        secondary: {
            main: '#ce93d8',
            light: '#f3e5f5',
            dark: '#ab47bc'
        },
         
        text: {
            primary: '#3E4A3D',
            secondary: '#A1AFA0',
            disabled: 'rgba(255,255,255,0.5)',
            icon: 'rgba(255,255,255,0.5)',
            divider: 'rgba(255,255,255,0.12)'
        },

        background: {
            default: '#A0C49D',
            dark: '#d7e6f0',
            paper: '#f1f9ff'
        }
    }
})

export { maintheme }