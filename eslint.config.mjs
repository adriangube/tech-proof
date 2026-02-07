import { baseConfig } from './packages/config/eslint.base.mjs';
import globals from 'globals';

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/out/**',
      '**/coverage/**',
      '**/.turbo/**',
      '**/generated/**',
    ],
  },
  {
    ...baseConfig.typescript,
    languageOptions: {
      ...baseConfig.typescript.languageOptions,
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
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
  },
];