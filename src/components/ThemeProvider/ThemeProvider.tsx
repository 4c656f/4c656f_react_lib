import React, {createContext, FC, useEffect, useState} from 'react';
import "../../index.scss"

interface ThemeProviderProps {
    children: JSX.Element
}
export interface IThemeContext {
    isDark: boolean,
    toggleTheme: () => void
}
const defaultState = {
    isDark: true,
    toggleTheme: () => {}
}
export const ThemeContext = createContext<IThemeContext>(defaultState)

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {

    const [isDark, setIsDark] = useState<boolean>(false)


    const toggleTheme = (): void => {
        setIsDark((prevState) => !prevState)
    }

    useEffect(() => {
        document.body.dataset.theme = isDark ? 'dark' : 'light'
    }, [isDark])

    return (
        <ThemeContext.Provider value={{isDark: isDark, toggleTheme: toggleTheme} as IThemeContext}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;