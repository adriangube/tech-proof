import { baseConfig } from '../../packages/config/eslint.base.mjs';
import globals from 'globals';

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'coverage/**',
      'src/generated/**',
    ],
  },
  {
    ...baseConfig.typescript,
    languageOptions: {
      ...baseConfig.typescript.languageOptions,
      parserOptions: {
        ...baseConfig.typescript.languageOptions.parserOptions,
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      ...baseConfig.typescript.rules,

      'no-console': 'off',
      'no-process-exit': 'error',
      'no-throw-literal': 'error',
      'prefer-promise-reject-errors': 'error',
      'no-unused-expressions': 'error',
      'no-return-await': 'error',
    },
  },
  {
    ...baseConfig.javascript,
    languageOptions: {
      ...baseConfig.javascript.languageOptions,
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      ...baseConfig.javascript.rules,
      'no-console': 'off',
      'no-process-exit': 'error',
    },
  },
];
