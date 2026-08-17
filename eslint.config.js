// eslint.config.js — Flat config (ESLint 10.x)
import reactPlugin from '@eslint-react/eslint-plugin'
import js from '@eslint/js'
import reactDom from 'eslint-plugin-react-dom'
import reactJsx from 'eslint-plugin-react-jsx' // pacote dedicado às regras JSX
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['dist/**', 'build/**', 'coverage/**', 'node_modules/**'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@eslint-react': reactPlugin,
      'react-dom': reactDom,
      'react-jsx': reactJsx,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactDom.configs.recommended.rules,
      ...reactJsx.configs.recommended.rules,

      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  {
    files: ['**/*.test.{ts,tsx,js,jsx}'],
    languageOptions: {
      globals: { ...globals.jest, ...globals.vitest },
    },
  },
)
