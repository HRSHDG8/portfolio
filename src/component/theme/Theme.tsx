import {createContext, Dispatch, FC, SetStateAction, useContext, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material";

type Mode = 'dark' | 'light'

interface ITheme {
    theme: Mode,
    setTheme: Dispatch<SetStateAction<Mode>>
}

const defaultTheme: ITheme = {
    theme: "light",
    setTheme: value => {
    }
}
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        secondary: {
            main: '#4caf50'
        }
    },

})
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff',
            contrastText: '#000000',
        },
        secondary: {
            main: '#ff8a00',
        },
    },
})

const ThemeContext = createContext(defaultTheme);
export const useTheme = () => useContext(ThemeContext);

export const Theme: FC = ({children}) => {
    const [theme, setTheme] = useState<Mode>('light');

    return <ThemeContext.Provider
        value={{
            theme: theme,
            setTheme: setTheme
        }}>
        <ThemeProvider theme={theme==='light'?lightTheme:darkTheme}>
        {children}
        </ThemeProvider>
    </ThemeContext.Provider>
}