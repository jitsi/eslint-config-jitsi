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
    }
}
