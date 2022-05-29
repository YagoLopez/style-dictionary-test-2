const { transform } = require('@divriots/style-dictionary-to-figma');

module.exports = {
  source: ['./figma-tokens/**/*.json'],
  format: {
    figmaTokensPlugin: ({ dictionary }) => {
      const transformedTokens = transform(dictionary.tokens);
      return JSON.stringify(transformedTokens, null, 2);
    },
  },
  platforms: {
    json: {
      transformGroup: 'js',
      buildPath: './figma-tokens/',
      files: [
        {
          destination: 'tokens.json',
          format: 'figmaTokensPlugin',
        },
      ],
    },
  },
};
