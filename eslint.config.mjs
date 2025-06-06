import { FlatCompat } from '@eslint/eslintrc';
import { defineConfig } from 'eslint/config';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default defineConfig([
    {
        extends: compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
        plugins: {
            'simple-import-sort': pluginSimpleImportSort,
        },
        rules: {
            'react-hooks/exhaustive-deps': 'off', // deps are not always needed
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    },
]);
