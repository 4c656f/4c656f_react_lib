module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  staticDirs: ['../src/fonts'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules"
  ],
  "core": {
    "builder": "webpack5"
  }
}