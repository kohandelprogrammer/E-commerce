import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  {
    rules: {
      'no-console': 0,
      'react-hooks/rules-of-hooks': 0,
      '@typescript-eslint/no-explicit-any': 1,
      'react-hooks/exhaustive-deps': 0,
      '@typescript-eslint/no-unused-vars': 1,
    },
  },
];

export default eslintConfig;
