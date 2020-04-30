const paths = require('./paths')

module.exports = {
    extends: ['wiremore', 'wiremore/react', 'wiremore/typescript'],
    globals: {
        __BROWSER__: true,
        __SERVER__: true,
    },
    settings: {
        'import/resolver': {
            node: {
                paths: paths.resolveModules,
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        'react': {
            version: 'detect',
        },
    },
    rules: {
        'import/no-unassigned-import': 0,
        'import/no-named-as-default-member': 0,
        'prettier/prettier': 'error',
        'semi': ['error', 'never'],
        'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                // TODO: add to eslint-config-wiremore
                'import/named': 0,
                'react/prop-types': 0,
            },
        },
    ],
}
