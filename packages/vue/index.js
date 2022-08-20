module.exports = {
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        "no-unused-vars": "off",
        "no-undef": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
  extends: [
    "plugin:vue/vue3-recommended",
    "@bi1lqv/eslint-config-ts",
  ],
  rules: {
    "vue/max-attributes-per-line": "off",
    "vue/no-v-html": "off",
    "vue/require-prop-types": "off",
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",
    "vue/prefer-import-from-vue": "off",

    // reactivity transform
    "vue/no-setup-props-destructure": "off",

    "vue/component-tags-order": ["warn", {
      order: ["script", "template", "style"],
    }],
    "vue/block-tag-newline": ["warn", {
      singleline: "always",
      multiline: "always",
    }],
    "vue/component-name-in-template-casing": ["warn", "PascalCase"],
    "vue/component-options-name-casing": ["warn", "PascalCase"],
    "vue/custom-event-name-casing": ["warn", "camelCase"],
    "vue/define-macros-order": ["warn", {
      order: ["defineProps", "defineEmits"],
    }],
    "vue/html-comment-content-spacing": ["warn", "always", {
      exceptions: ["-"],
    }],
    "vue/no-restricted-v-bind": ["warn", "/^v-/"],
    "vue/no-useless-v-bind": "warn",
    "vue/no-v-text-v-html-on-component": "warn",
    "vue/padding-line-between-blocks": ["warn", "always"],
    "vue/prefer-separate-static-class": "warn",

    // extensions
    "vue/array-bracket-spacing": ["warn", "never"],
    "vue/arrow-spacing": ["warn", { before: true, after: true }],
    "vue/block-spacing": ["warn", "always"],
    "vue/brace-style": ["warn", "stroustrup", { allowSingleLine: true }],
    "vue/comma-dangle": ["warn", "always-multiline"],
    "vue/comma-spacing": ["warn", { before: false, after: true }],
    "vue/comma-style": ["warn", "last"],
    "vue/dot-location": ["warn", "property"],
    "vue/dot-notation": ["warn", { allowKeywords: true }],
    "vue/eqeqeq": ["warn", "smart"],
    // 'vue/func-call-spacing': ['off', 'never'],
    "vue/key-spacing": ["warn", { beforeColon: false, afterColon: true }],
    "vue/keyword-spacing": ["warn", { before: true, after: true }],
    "vue/no-constant-condition": "warn",
    "vue/no-empty-pattern": "warn",
    "vue/no-extra-parens": ["warn", "functions"],
    "vue/no-irregular-whitespace": "warn",
    "vue/no-loss-of-precision": "warn",
    "vue/no-restricted-syntax": [
      "warn",
      "DebuggerStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "vue/no-sparse-arrays": "warn",
    "vue/object-curly-newline": ["warn", { multiline: true, consistent: true }],
    "vue/object-curly-spacing": ["warn", "always"],
    "vue/object-property-newline": ["warn", { allowMultiplePropertiesPerLine: true }],
    "vue/object-shorthand": [
      "warn",
      "always",
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    "vue/operator-linebreak": ["warn", "before"],
    "vue/prefer-template": "warn",
    "vue/quote-props": ["warn", "consistent-as-needed"],
    "vue/space-in-parens": ["warn", "never"],
    "vue/space-infix-ops": "warn",
    "vue/space-unary-ops": ["warn", { words: true, nonwords: false }],
    "vue/template-curly-spacing": "warn",

    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off",
  },
}
