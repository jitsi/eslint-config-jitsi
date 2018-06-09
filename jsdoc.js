module.exports = {
    'plugins': [
        'jsdoc'
    ],
    'rules': {
        // Possible Errors group

        // Currently, we are using both valid-jsdoc and 'jsdoc' plugin. In the
        // future we might stick to one as soon as it has all the features.
        'valid-jsdoc': [
            'error',
            {
                'matchDescription': '.+',
                'prefer': {
                    'arg': 'param',
                    'argument': 'param',
                    'return': 'returns'
                },
                'preferType': {
                    'array': 'Array',
                    'Boolean': 'boolean',
                    'function': 'Function',
                    'Number': 'number',
                    'object': 'Object',
                    'String': 'string'
                },
                'requireParamDescription': true,
                'requireReturn': true,
                'requireReturnDescription': false,
                'requireReturnType': true
            }
        ],

        // ES6 group rules

        // JsDoc plugin rules group. The following rules are in addition to
        // valid-jsdoc rule.
        'jsdoc/check-param-names': 0,
        'jsdoc/check-tag-names': 2,
        'jsdoc/check-types': 0,
        'jsdoc/newline-after-description': 2,

        // XXX Because the following plugin is not very smart about words which
        // legitimately begin with uppercase characters mid-sentence, set it to
        // warn only.
        'jsdoc/require-description-complete-sentence': 1,
        'jsdoc/require-hyphen-before-param-description': 2,

        // The following 5 rules are covered by valid-jsdoc, so disable them.
        'jsdoc/require-param': 0,
        'jsdoc/require-param-description': 0,
        'jsdoc/require-param-type': 0,
        'jsdoc/require-returns-description': 0,
        'jsdoc/require-returns-type': 0
    }
};
