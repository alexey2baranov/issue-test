module.exports = {
  root: true,

  env: {
    node: true
  },

  'extends': [
    // 'plugin:vue/vue3-essential',
    // 'eslint:recommended',
    // '@vue/typescript/recommended'
  ],

  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "prefer-const": ["off", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
    'no-unused-vars': 'off',
    'no-empty-function': 'off',
    "interface-name-prefix": [ "off", { "prefixWithI": "always" }]
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
  ]
}
