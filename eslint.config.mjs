// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import noOnlyTests from 'eslint-plugin-no-only-tests'

export default tseslint.config({
  files: ['**/*.ts'],
  ignores: ['node_modules', 'test-results'],
  plugins: {
    'no-only-tests': noOnlyTests
  },
  extends: [
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    {
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname
        }
      }
    }
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'linebreak-style': ['error', 'unix'],
    'no-only-tests/no-only-tests': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  }
})
