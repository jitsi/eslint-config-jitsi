module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        semi: 'off',

        // Ignore unused function params in type declarations
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',

        // Disallow variable declarations from shadowing variables declared in the outer scope
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error'
    }
}
