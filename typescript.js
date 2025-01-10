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
        'plugin:@typescript-eslint/recommended',
        'plugin:@stylistic/recommended-extends'
    ],
    rules: {
        // Default ESlint rules to TypeScript-ESlint
        '@stylistic/array-bracket-spacing': [ 'error', 'always' ],
        '@stylistic/arrow-parens': [ 'error', 'as-needed' ],
        'brace-style': 0,
        '@stylistic/brace-style': 2,
        'comma-dangle': 0,
        '@stylistic/comma-dangle': [ 'error', 'only-multiline' ],
        'dot-notation': 0,
        '@typescript-eslint/dot-notation': 2,
        'keyword-spacing': 0,
        '@stylistic/keyword-spacing': 2,
        'no-array-constructor': 0,
        '@typescript-eslint/no-array-constructor': 2,
        'no-dupe-class-members': 0,
        '@typescript-eslint/no-dupe-class-members': 2,
        'no-empty-function': 0,
        '@typescript-eslint/no-empty-function': 2,
        'no-extra-semi': 0,
        '@stylistic/no-extra-semi': 2,
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
        '@typescript-eslint/only-throw-error': 2,
        'no-unused-expressions': 0,
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
        '@stylistic/object-curly-spacing': ['error', 'always'],
        'padding-line-between-statements': 0,
        '@stylistic/padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            { blankLine: 'always', prev: '*', next: 'return' }
        ],
        'quotes': 0,
        '@stylistic/quotes': ['error', 'single'],
        'semi': 0,
        '@stylistic/semi': ['error', 'always'],
        'space-before-blocks': 0,
        '@stylistic/space-before-blocks': 2,
        'space-before-function-paren': 0,
        '@stylistic/space-before-function-paren': ['error', {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always'
        }],
        'space-infix-ops': 0,
        '@stylistic/space-infix-ops': 2,
        'no-undef': 0,
        'no-prototype-builtins': 0,

        // Typescript-ESlint Rules
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/ban-types': 0,
        '@stylistic/member-delimiter-style': ['error', {
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
        '@stylistic/type-annotation-spacing': ['error', {
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
        'typescript-sort-keys/string-enum': 2,
        '@stylistic/indent': [
            'error',
            4,
            {
                'CallExpression': {
                    arguments: 'off'
                },
                'FunctionDeclaration': {
                    body: 1,
                    parameters: 2
                },
                'FunctionExpression': {
                    parameters: 2
                },
                'MemberExpression': 'off',
                'SwitchCase': 0
            }
        ],
        '@stylistic/jsx-equals-spacing': [ 'error', 'always' ],
        '@stylistic/jsx-closing-bracket-location': [
            'error',
            'after-props'
        ],
        '@stylistic/jsx-quotes': [ 'error', 'prefer-single' ],
        '@stylistic/jsx-indent-props': 2
    }
}
