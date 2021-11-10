module.exports = {
    'extends': [
        '@jitsi/eslint-config/jsx'
    ],
    'rules': {
        // React plugin rules group
        'react/display-name': 0,
        'react/forbid-prop-types': 0,
        'react/no-danger': 2,
        'react/no-deprecated': 2,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-direct-mutation-state': 2,
        'react/no-find-dom-node': 2,
        'react/no-is-mounted': 2,
        'react/no-multi-comp': 2,
        'react/no-render-return-value': 2,
        'react/no-set-state': 0,
        'react/no-string-refs': 2,
        'react/no-unknown-property': 2,
        'react/prefer-es6-class': 2,
        'react/prefer-stateless-function': 0,
        'react/prop-types': 2,
        'react/react-in-jsx-scope': 2,
        'react/require-extension': 0,
        'react/require-optimization': 0,
        'react/require-render-return': 2,
        'react/self-closing-comp': 2,
        'react/sort-comp': 0,
        'react/sort-prop-types': 2,

        // React specific JSX rules
        'react/jsx-uses-react': 2
    }
};
