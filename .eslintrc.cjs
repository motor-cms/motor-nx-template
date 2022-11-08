/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier'

    ],
    overrides: [
        {
            files: [
                'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
            ],
            'extends': [
                // 'plugin:cypress/recommended'
            ]
        }
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures : {
            jsx : false
        }
    },
    rules: {
        'no-unused-vars': 'off',
        'no-redeclare': 'off',
        'vue/no-reserved-component-names': 'off',
        'vue/multi-word-component-names': 'off',
        'no-case-declarations': 'off',
        'no-undef': 'off',
    }
}
