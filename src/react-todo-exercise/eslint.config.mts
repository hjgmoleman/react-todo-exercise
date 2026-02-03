import * as js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import * as eslintImport from 'eslint-plugin-import'
import * as pluginNewLines from 'eslint-plugin-import-newlines'
import * as perfectionist from 'eslint-plugin-perfectionist'
import useEffectAnalyzer from 'eslint-plugin-react-you-might-not-need-an-effect'
import {
    defineConfig,
    globalIgnores,
} from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
    globalIgnores(['.config/*', './src/routeTree.gen.ts']),
    js.configs.recommended,
    tseslint.configs.recommended,
    stylistic.configs.recommended,
    perfectionist.configs['recommended-natural'],
    useEffectAnalyzer.configs.recommended,
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,tsx,jsx}'],
        languageOptions: {
            globals: globals.browser,
        },
        plugins: {
            '@stylistic': stylistic,
            'import': eslintImport,
            'import-newlines': pluginNewLines,
            js,
        },
        rules: {
            '@stylistic/array-bracket-newline': ['error', 'consistent'],
            '@stylistic/dot-location': ['error', 'property'],
            '@stylistic/function-call-spacing': ['error', 'never'],
            '@stylistic/function-paren-newline': ['error', 'consistent'],
            '@stylistic/indent': ['error', 4],
            '@stylistic/jsx-indent-props': ['error', 4],
            '@stylistic/object-curly-newline': [
                'error', {
                    ExportDeclaration: {
                        minProperties: 2,
                        multiline: true,
                    },

                    ImportDeclaration: {
                        minProperties: 2,
                        multiline: true,
                    },

                    ObjectExpression: {
                        consistent: true,
                        minProperties: 2,
                        multiline: true,
                    },

                    ObjectPattern: {
                        minProperties: 2,
                        multiline: true,
                    },
                },
            ],
            '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
            '@stylistic/padding-line-between-statements': [
                'error', {
                    blankLine: 'always',
                    next: '*',
                    prev: 'multiline-block-like',
                }, {
                    blankLine: 'always',
                    next: 'return',
                    prev: '*',
                }, {
                    blankLine: 'always',
                    next: 'export',
                    prev: '*',
                }, {
                    blankLine: 'any',
                    next: 'export',
                    prev: 'export',
                },
            ],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/semi': ['error', 'never'],

            'camelcase': ['error', { properties: 'never' }],
            'complexity': 'warn',
            'curly': 'error',
            'default-param-last': 'error',
            'no-object-constructor': 'error',
            'no-underscore-dangle': [
                'error', {
                    allowAfterSuper: true,
                    allowAfterThis: true,
                },
            ],
            'object-shorthand': 'error',
            'perfectionist/sort-imports': ['error', {
                customGroups: [{
                    elementNamePattern: '^react$',
                    groupName: 'value-react',
                    modifiers: ['value'],
                }, {
                    elementNamePattern: '^react$',
                    groupName: 'type-react',
                    modifiers: ['type'],
                }],

                groups: [
                    'type-react',
                    { newlinesBetween: 0 },
                    'value-react',

                    'type-external',
                    { newlinesBetween: 0 },
                    'value-external',

                    'type-internal',
                    { newlinesBetween: 0 },
                    'value-internal',

                    ['type-parent', 'type-sibling', 'type-index'],
                    { newlinesBetween: 0 },
                    ['value-parent', 'value-sibling', 'value-index'],

                    'ts-equals-import',
                    'style',
                    'unknown',
                ],
                internalPattern: ['^~/.+'],
                order: 'asc',
                type: 'alphabetical',
            }],
            'perfectionist/sort-objects': ['error', { partitionByNewLine: true }],
            'radix': 'warn',

            'import-newlines/enforce': ['error', { items: 1 }],
            'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
            'import/first': 'error',
        },
    },
])
