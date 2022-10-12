import React, {createContext, FC, useEffect, useState} from 'react';

interface ThemeProviderProps{
    theme: boolean;
    fill?: boolean;
    left?: boolean;
    children: JSX.Element
}




export const ThemeContext = createContext({
    theme: true,

})



const ThemeProvider:FC<ThemeProviderProps> = ({
                                                  theme,
                                                  children,
                                                  left,
                                                  fill



                                              }) => {


    useEffect(()=>{
        document.body.dataset.theme = theme?'dark':'light'
    },[theme])

    return (
        <ThemeContext.Provider value={{theme}}>
            <div style={
                {
                    position: "absolute",
                    left: left?0:fill?0:'50%',
                    top: 0,
                    height: "100%",
                    width: fill?"100%": "50%",
                    backgroundColor: theme?'#000':'#F3F4F5',
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center'
                }

            }>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;