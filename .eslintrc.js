module.exports = {
  extends: [
    'expo',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'react-native'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react-native/no-unused-styles': 'error',
  },
};
