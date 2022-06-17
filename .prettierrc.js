'use strict';

module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  overrides: [
    {
      files: '*.hbs',
      options: {
        printWidth: 80,
        parser: 'glimmer',
        singleQuote: false,
      },
    },
  ],
};
