module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "indent": ["error", 2, { "SwitchCase": 1, "MemberExpression": 0 }],
    "quotes": ["error", "double"],
    "no-var": "error",
    "one-var": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "brace-style": ["error", "1tbs"],
    "comma-dangle": ["error", "never"],
    "computed-property-spacing": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "no-use-before-define": ["error", { "functions": true, "classes": true, "variables": true }],
    "quote-props": ["error", "consistent-as-needed"]
  },
  overrides: [
    {
      files: ['src/*.ts', '*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ]
    }
  ]
};