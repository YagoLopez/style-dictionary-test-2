#Import figma token in project as scss variables
## POC

This example show how to include figma tokens in a github project

- Create a new Figma project
- Install Figma Tokens plugin
- Create some tokens in Figma Tokens plugin
- Clone this GitHub repository https://github.com/YagoLopez/style-dictionary-test-2
- Run npm install to install dependencies
- Make sure `/figma-tokens` folder is empty in the project
- Open Figma Tokens plugin and push tokens to the repo`YagoLopez/style-dictionary-test-2`. Use this github personal access token: `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`
- Open project `YagoLopez/style-dictionary-test-2` and pull changes
- Run import script:

```bash
npm run transform-tokens-to-scss
```

You should see something like this output:
```

Running `style-dictionary build` for the first time to generate build artifacts.

scss
✔︎  build/scss/_variables.scss

```

Tokens should be imported as scss variables in `src/scss/_variables.scss` folder:

**SCSS**

```scss
// src/scss/_variables.scss
$color-base-gray-light: #cccccc;
$color-base-gray-medium: #999999;
$color-base-gray-dark: #111111;
$color-base-red: #ff0000;
$color-base-green: #00ff00;
$color-font-base: #ff0000;
$color-font-secondary: #00ff00;
$color-font-tertiary: #cccccc;
$size-font-small: 0.75rem;
$size-font-medium: 1rem;
$size-font-large: 2rem;
$size-font-base: 1rem;
```

