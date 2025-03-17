module.exports = {
    env: {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'jasmine': true
    },
    globals: {
        // The globals that (1) are accessed but not defined within many of our
        // files, (2) are certainly defined, and (3) we would like to use
        // without explicitly specifying them (using a comment) inside of our
        // files.
        '__filename': false
    },
    overrides: [
        {
            files: [ '*.js' ],
            extends: [
                '@jitsi/eslint-config/js'
            ],
        },
        {
            files: [ '*.ts', '*.tsx' ],
            extends: [
                '@jitsi/eslint-config/typescript'
            ],
        }
    ],
    ignorePatterns: [ '*.d.ts' ]
};
