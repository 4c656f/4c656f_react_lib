import React, {createContext, FC, useEffect, useState} from 'react';

interface ThemeProviderProps{
    children: JSX.Element
}




export const ThemeContext = createContext({
    isDark: true,
    toggleTheme: ()=>{}
})

const ThemeProvider:FC<ThemeProviderProps> = ({children}) => {
    const [isDark, setIsDark] = useState(false)


    const toggleTheme = ():void => {
        setIsDark((prevState)=>!prevState)
    }

    useEffect(()=>{
        document.body.dataset.theme = isDark?'dark':'light'
    },[isDark])

    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;