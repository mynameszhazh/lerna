module.exports = {
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersioin: 5,
    // sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  env: { node: true },
};
