module.exports = {
  root: true,
  env: {
    node: true,
    "cypress/globals": true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    "plugin:cypress/recommended"
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-unused-vars": 'warn'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],
  "plugins": [
    "cypress"
  ]
}
