import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  // 1. Arquivos e pastas ignorados pelo Linter
  { ignores: ['dist/**', 'node_modules/**', 'vite.config.ts', 'public/**'] },

  // 2. Configuração principal para arquivos TypeScript e React
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Regras do React Hooks
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Regras de Boas Práticas e Padronização
      'prefer-const': 'error', // Exige 'const' se a variável não for reatribuída
      'no-console': ['warn', { allow: ['warn', 'error'] }], // Evita console.log esquecidos
      camelcase: 'warn', // Padroniza nomenclatura de variáveis

      // Regras do TypeScript
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // 3. Integração com o Prettier (Deve ser sempre o último para sobrescrever regras de estilo conflitantes)
  prettierPlugin
);
