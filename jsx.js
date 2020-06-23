module.exports = {
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'plugins': [
        'react'
    ],
    'rules': {
        // Best Practices group
        'jsx-quotes': [ 'error', 'prefer-single' ],

        // React plugin JSX-specific rule group
        'react/jsx-boolean-value': [ 'error', 'always' ],
        'react/jsx-closing-bracket-location': [
            'error',
            'after-props'
        ],
        'react/jsx-curly-spacing': [
            'error',
            'always',
            {
                'spacing': {
                    'objectLiterals': 'never'
                }
            }
        ],
        'react/jsx-equals-spacing': [ 'error', 'always' ],
        'react/jsx-filename-extension': 0,
        'react/jsx-first-prop-new-line': [ 'error', 'multiline' ],
        'react/jsx-handler-names': [
            'error',
            {
                'eventHandlerPrefix': '_on',
                'eventHandlerPropPrefix': 'on'
            }
        ],
        'react/jsx-indent': 2,
        'react/jsx-indent-props': 2,
        'react/jsx-key': 2,
        'react/jsx-max-props-per-line': 2,
        'react/jsx-no-bind': 2,
        'react/jsx-no-comment-textnodes': 2,
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-literals': 0,
        'react/jsx-no-target-blank': 2,
        'react/jsx-no-undef': 2,
        'react/jsx-pascal-case': 2,
        'react/jsx-sort-props': 2,
        'react/jsx-tag-spacing': [
            'error',
            {
                'beforeSelfClosing': 'always'
            }
        ],
        'react/jsx-uses-vars': 2,
        'react/jsx-wrap-multilines': 2,
    }
};
