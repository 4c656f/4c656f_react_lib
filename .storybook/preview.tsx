import {configure, addDecorator, DecoratorFn} from "@storybook/react"
import themeDecorator from "./ThemeProviderStory"
import {useEffect} from "react";
import ThemeProvider from "../src/components/ThemeProvider/ThemeProvider"
import ThemeProviderStory from "./ThemeProviderStory";
import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import React from "react";

addons.setConfig({
  theme: themes.dark,
});

const withTheme:DecoratorFn = (StoryFn, context) => {
  // Get the active theme value from the story parameter
  const { theme } = context.globals


  switch (theme){
    case 'side-by-side': {
      return (
          <>
            <ThemeProviderStory theme={true} left>
              <StoryFn />
            </ThemeProviderStory>
            <ThemeProviderStory theme={false} >
              <StoryFn />
            </ThemeProviderStory>
          </>
      )
    }
    default:{
      return (
          <ThemeProviderStory theme={theme === 'dark' ? true : false} fill>
            <StoryFn />
          </ThemeProviderStory>)
    }
  }

}

addDecorator(withTheme)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme for the components',
    defaultValue: 'light',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
        { value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
}