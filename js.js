module.exports = {
    extends: [
        'eslint:recommended'
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        sourceType: 'module'
    },
    plugins: [
        'import'
    ],
    rules: {
        // Possible Errors group
        'no-cond-assign': 2,
        'no-console': 0,
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': 2,
        'no-empty-character-class': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': [
            'error',
            'all',
            {
                'ignoreJSX': 'multi-line',
                'nestedBinaryExpressions': false
            }
        ],
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': 2,
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-negated-in-lhs': 2,
        'no-nested-ternary': 2,
        'no-obj-calls': 2,
        'no-prototype-builtins': 0,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'use-isnan': 2,
        'valid-typeof': 2,
        'no-unused-private-class-members': ['error'],
        'no-useless-backreference': ['error'],

        // Best Practices group
        'accessor-pairs': 0,
        'array-callback-return': 2,
        'block-scoped-var': 0,
        'complexity': 0,
        'consistent-return': 0,
        'curly': 2,
        'default-case': 0,
        'dot-location': [ 'error', 'property' ],
        'dot-notation': 2,
        'eqeqeq': 2,
        'guard-for-in': 2,
        'no-alert': 2,
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-div-regex': 0,
        'no-else-return': 2,
        'no-empty-function': 2,
        'no-empty-pattern': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-extra-label': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-implicit-coercion': 2,
        'no-implicit-globals': 2,
        'no-implied-eval': 2,
        'no-invalid-this': 2,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-magic-numbers': 0,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-octal': 2,
        'no-octal-escape': 2,
        'no-param-reassign': 2,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-return-assign': 2,
        'no-script-url': 2,
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 2,
        'no-unused-expressions': [
            'error',
            {
                'allowShortCircuit': true,
                'allowTernary': true
            }
        ],
        'no-unused-labels': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-useless-escape': 2,
        'no-useless-return': ['error'],
        'no-void': 2,
        'no-warning-comments': 0,
        'no-with': 2,
        'radix': 2,
        'vars-on-top': 2,
        'wrap-iife': [ 'error', 'inside' ],
        'yoda': 2,

        // Strict Mode group
        'strict': 2,

        // Variables group
        'init-declarations': 0,
        'no-catch-shadow': 2,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-restricted-globals': 0,
        'no-shadow': 2,
        'no-shadow-restricted-names': 2,
        'no-undef': 2,
        'no-undef-init': 2,
        'no-undefined': 0,
        'no-unused-vars': [ 'error', { 'argsIgnorePattern': '^_' } ],
        'no-use-before-define': [ 'error', { 'functions': false } ],

        // Stylistic issues group
        'array-bracket-spacing': [
            'error',
            'always',
            { 'objectsInArrays': true }
        ],
        'block-spacing': [ 'error', 'always' ],
        'brace-style': 2,
        'camelcase': 2,
        'comma-dangle': 2,
        'comma-spacing': 2,
        'comma-style': 2,
        'computed-property-spacing': 2,
        'consistent-this': [ 'error', 'self' ],
        'eol-last': 2,
        'func-names': 0,
        'func-style': 0,
        'id-blacklist': 0,
        'id-length': 0,
        'id-match': 0,
        'indent': [
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
        'key-spacing': 2,
        'keyword-spacing': 2,
        'linebreak-style': [ 'error', 'unix' ],
        'lines-around-comment': [
            'error',
            {
                'allowBlockStart': true,
                'allowObjectStart': true,
                'beforeBlockComment': true,
                'beforeLineComment': true
            }
        ],
        'max-depth': 2,
        'max-len': [ 'error', 120 ],
        'max-lines': 0,
        'max-nested-callbacks': 2,
        'max-params': [ 'error', 4 ],
        'max-statements': 0,
        'max-statements-per-line': 2,
        'multiline-ternary': 0,
        'new-cap': 2,
        'new-parens': 2,
        'padding-line-between-statements': [
            "error",
            { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
            { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]},
            { blankLine: "always", prev: "*", next: "return" },

        ],
        'newline-per-chained-call': 2,
        'no-array-constructor': 2,
        'no-bitwise': 2,
        'no-continue': 0,
        'no-inline-comments': 0,
        'no-lonely-if': 2,
        'no-mixed-operators': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': 2,
        'no-negated-condition': 2,
        'no-nested-ternary': 0,
        'no-new-object': 2,
        'no-plusplus': 0,
        'no-restricted-syntax': 0,
        'no-spaced-func': 2,
        'no-tabs': 2,
        'no-ternary': 0,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 0,
        'no-unneeded-ternary': 2,
        'no-whitespace-before-property': 2,
        'object-curly-newline': 0,
        'object-curly-spacing': [ 'error', 'always' ],
        'object-property-newline': 2,
        'one-var': 0,
        'one-var-declaration-per-line': 0,
        'operator-assignment': 0,
        'operator-linebreak': [ 'error', 'before' ],
        'padded-blocks': 0,
        'quote-props': 0,
        'quotes': [ 'error', 'single' ],
        'require-jsdoc': [
            'error',
            {
                'require': {
                    'ClassDeclaration': true,
                    'FunctionDeclaration': true,
                    'MethodDefinition': true
                }
            }
        ],
        'semi': [ 'error', 'always' ],
        'semi-spacing': 2,
        'sort-vars': 2,
        'space-before-blocks': 2,
        'space-before-function-paren': ['error', {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
        }],
        'space-in-parens': [ 'error', 'never' ],
        'space-infix-ops': 2,
        'space-unary-ops': 2,
        'spaced-comment': 2,
        'unicode-bom': 0,
        'wrap-regex': 0,
        'prefer-object-spread': ['error'],

        // ES6 group rules
        'arrow-body-style': [
            'error',
            'as-needed',
            { requireReturnForObjectLiteral: true }
        ],
        'arrow-parens': [ 'error', 'as-needed' ],
        'arrow-spacing': 2,
        'constructor-super': 2,
        'generator-star-spacing': 2,
        'no-class-assign': 2,
        'no-confusing-arrow': 2,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-new-symbol': 2,
        'no-restricted-imports': 0,
        'no-this-before-super': 2,
        'no-useless-computed-key': 2,
        'no-useless-constructor': 2,
        'no-useless-rename': 2,
        'no-var': 2,
        'object-shorthand': [
            'error',
            'always',
            { 'avoidQuotes': true }
        ],
        'prefer-arrow-callback': [ 'error', { 'allowNamedFunctions': true } ],
        'prefer-const': 2,
        'prefer-reflect': 0,
        'prefer-rest-params': 2,
        'prefer-spread': 2,
        'prefer-template': 2,
        'require-yield': 2,
        'rest-spread-spacing': 2,
        'sort-imports': [ 'error', {
            'ignoreDeclarationSort': true
        } ],
        'template-curly-spacing': 2,
        'yield-star-spacing': 2,
        'import/no-duplicates': 2,
        'import/order': [ 'error', {
            'alphabetize': {
                'order': 'asc'
            },
            'groups': [ [ 'builtin', 'external' ], 'parent', 'sibling', 'index' ],
            'newlines-between': 'always'
        } ],
        'require-await': ['error'],
        'no-duplicate-imports': ['error'],
    }
};
