# Import Figma Tokens in a Project as SCSS variables

#### Proof Of Concept

This example show how to import Figma Tokens in a Github project using **Style Dictionary** npm package

- Create a new Figma project
- Install Figma Tokens Plugin
- Configure Figma Tokens Plugin
  -  Github Repository: `YagoLopez/style-dictionary-test-2`
  - Github personal access token: `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`
  - Default branch: `master`
  - Branch name for the pull request: `tokens`
  - File path: `figma-tokens/tokens.json`
- Create some tokens in Figma Tokens Plugin. [Here is an example of Figma Tokens](https://github.com/YagoLopez/style-dictionary-test-2/blob/master/tokens/figma-tokens-example.json)
- Clone this GitHub repository https://github.com/YagoLopez/style-dictionary-test-2
- Run npm install to install dependencies
- Make sure `/figma-tokens` folder is empty in the project
- Pull changes in project `YagoLopez/style-dictionary-test-2` 
- Run tokens import script:

```bash
npm run transform-tokens-to-scss
```

You should see something like this output:
```

Running `style-dictionary build` for the first time to generate build artifacts.

scss
✔︎  build/scss/_variables.scss

```

**Tokens should be imported as SCSS variables in `src/scss/_variables.scss` folder:**

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

