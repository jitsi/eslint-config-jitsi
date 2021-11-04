module.exports = {
    'extends': [
        'plugin:flowtype/recommended'
    ],
    'plugins': [
        'flowtype',

        // ESLint's rule no-duplicate-imports does not understand Flow's import
        // type. Fortunately, eslint-plugin-import understands Flow's import
        // type.
        'import'
    ],
    'rules': {
        'no-dupe-class-members': 0
    }
};
