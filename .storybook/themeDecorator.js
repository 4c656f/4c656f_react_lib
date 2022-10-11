import React from "react"
import ThemeProvider from "../src/components/ThemeProvider/ThemeProvider"

const ThemeDecorator = storyFn => (
    <ThemeProvider>
        {storyFn()}
    </ThemeProvider>
)

export default ThemeDecorator