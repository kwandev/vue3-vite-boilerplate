module.exports = {
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // "vue/no-unused-vars": "error",
    'vue/multi-word-component-names': 0,
    'no-useless-catch': 0,
    'no-unused-vars': 'off',
  },
};
