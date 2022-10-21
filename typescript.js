module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    plugins: [
        '@typescript-eslint',
        'typescript-sort-keys'
    ],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        // Default ESlint rules to TypeScript-ESlint
        'brace-style': 0,
        '@typescript-eslint/brace-style': 2,
        'comma-dangle': 0,
        '@typescript-eslint/comma-dangle': 2,
        'dot-notation': 0,
        '@typescript-eslint/dot-notation': 2,
        'keyword-spacing': 0,
        '@typescript-eslint/keyword-spacing': 2,
        'no-array-constructor': 0,
        '@typescript-eslint/no-array-constructor': 2,
        'no-dupe-class-members': 0,
        '@typescript-eslint/no-dupe-class-members': 2,
        'no-empty-function': 0,
        '@typescript-eslint/no-empty-function': 2,
        'no-extra-semi': 0,
        '@typescript-eslint/no-extra-semi': 2,
        'no-implied-eval': 0,
        '@typescript-eslint/no-implied-eval': 2,
        'no-invalid-this': 0,
        '@typescript-eslint/no-invalid-this': 2,
        'no-loop-func': 0,
        '@typescript-eslint/no-loop-func': 2,
        'no-redeclare': 0,
        '@typescript-eslint/no-redeclare': 2,
        'no-shadow': 0,
        '@typescript-eslint/no-shadow': 2,
        'no-throw-literal': 0,
        '@typescript-eslint/no-throw-literal': 2,
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
            'error',
            {
                'allowShortCircuit': true,
                'allowTernary': true
            }
        ],
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': [ 'error', { 'argsIgnorePattern': '^_' } ],
        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': ['error', { 'functions': false }],
        'no-useless-constructor': 0,
        '@typescript-eslint/no-useless-constructor': 2,
        'object-curly-spacing': 0,
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        'padding-line-between-statements': 0,
        '@typescript-eslint/padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            { blankLine: 'always', prev: '*', next: 'return' }
        ],
        'quotes': 0,
        '@typescript-eslint/quotes': ['error', 'single'],
        'semi': 0,
        '@typescript-eslint/semi': ['error', 'always'],
        'space-before-blocks': 0,
        '@typescript-eslint/space-before-blocks': 2,
        'space-before-function-paren': 0,
        '@typescript-eslint/space-before-function-paren': ['error', {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always'
        }],
        'space-infix-ops': 0,
        '@typescript-eslint/space-infix-ops': 2,
        'no-undef': 0,
        'no-prototype-builtins': 0,

        // Typescript-ESlint Rules
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/member-delimiter-style': ['error', {
            multiline: {
                delimiter: 'semi',
                requireLast: true
            },
            singleline: {
                delimiter: 'semi',
                requireLast: true
            }
        }],
        '@typescript-eslint/method-signature-style': 2,
        '@typescript-eslint/no-confusing-non-null-assertion': 2,
        '@typescript-eslint/no-duplicate-enum-values': 2,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-unnecessary-type-constraint': 2,
        '@typescript-eslint/prefer-as-const': 1,
        '@typescript-eslint/prefer-enum-initializers': 1,
        '@typescript-eslint/prefer-optional-chain': 1,
        '@typescript-eslint/type-annotation-spacing': ['error', {
            before: true,
            after: true,
            overrides: {
                colon: {
                    before: false,
                    after: true
                }
            }
        }],
        'typescript-sort-keys/interface': 2,
        'typescript-sort-keys/string-enum': 2
    }
}
