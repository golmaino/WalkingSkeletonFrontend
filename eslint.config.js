import tseslint from 'typescript-eslint';
import globals from 'globals';
import angularTemplate from '@angular-eslint/eslint-plugin-template';
import templateParser from '@angular-eslint/template-parser';

export default tseslint.configs
  .recommended
  .flatMap(config => [
    {
      ...config,
      files: ['**/*.ts'],
      languageOptions: {
        ...config.languageOptions,
        parser: tseslint.parser,
        parserOptions: {
          project: ['./tsconfig.json'],
          sourceType: 'module',
          ecmaVersion: 'latest'
        },
        globals: {
          ...globals.browser,
          ...globals.node,
        },
      },
      rules: {
        ...config.rules,
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
      },
    },
    {
      files: ['**/*.html'],
      languageOptions: {
        parser: templateParser,
      },
      plugins: {
        '@angular-eslint/template': angularTemplate,
      },
      rules: {
        ...angularTemplate.configs.recommended.rules,
      },
    }
  ]);
