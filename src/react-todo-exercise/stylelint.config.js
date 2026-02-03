/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-recommended'],
    rules: {
        'annotation-no-unknown': true,
        'at-rule-descriptor-no-unknown': true,
        'at-rule-no-unknown': [true, {
            ignoreAtRules: [
                'define-mixin', 'mixin', 'mixin-content',
            ],
        }],
    },
}
