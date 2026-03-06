import typescriptEslint from '@typescript-eslint/eslint-plugin';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: [
      '*.css',
      '.next/',
      'node_modules/',
      'out/',
      'build/',
      'next.config.ts',
    ],
    extends: [...nextCoreWebVitals],
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { varsIgnorePattern: '__dirname', argsIgnorePattern: '^_' },
      ],
      'no-unreachable': 'error',
      'no-self-assign': 'error',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'require-await': 'error',
      'prefer-const': 'error',
      yoda: 'error',
      'react/function-component-definition': [
        'error',
        { namedComponents: 'function-declaration' },
      ],
      'react-hooks/rules-of-hooks': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
  },

  {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    rules: {},
  },
]);
