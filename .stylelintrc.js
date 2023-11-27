module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
    overrides: [
        {
            files: ['*.vue', '**/*.vue'],
            customSyntax: 'postcss-html',
        },
    ],
    rules: {
        'alpha-value-notation': null,
        'color-function-notation': null,
        'declaration-no-important': true,
        'no-descending-specificity': null,
        'no-empty-first-line': null,
        'property-no-vendor-prefix': null,
        'selector-class-pattern': null,
        'shorthand-property-no-redundant-values': null,
    },
};
