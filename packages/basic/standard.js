// Inline from https://github.com/standard/eslint-config-standard/blob/master/.eslintrc.json
// Until it upgrades

module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  env: {
    es2021: true,
    node: true,
  },
  plugins: [
    "import",
    "n",
    "promise",
  ],
  globals: {
    document: "readonly",
    navigator: "readonly",
    window: "readonly",
  },
  rules: {
    "no-var": "warn",
    "object-shorthand": ["warn", "properties"],

    "accessor-pairs": ["warn", { setWithoutGet: true, enforceForClassMembers: true }],
    "array-bracket-spacing": ["warn", "never"],
    "array-callback-return": ["warn", {
      allowImplicit: false,
      checkForEach: false,
    }],
    "arrow-spacing": ["warn", { before: true, after: true }],
    "block-spacing": ["warn", "always"],
    "brace-style": ["warn", "1tbs", { allowSingleLine: true }],
    "camelcase": ["warn", {
      allow: ["^UNSAFE_"],
      properties: "never",
      ignoreGlobals: true,
    }],
    "comma-dangle": ["warn", {
      arrays: "never",
      objects: "never",
      imports: "never",
      exports: "never",
      functions: "never",
    }],
    "comma-spacing": ["warn", { before: false, after: true }],
    "comma-style": ["warn", "last"],
    "computed-property-spacing": ["warn", "never", { enforceForClassMembers: true }],
    "constructor-super": "warn",
    "curly": ["warn", "multi-line"],
    "default-case-last": "warn",
    "dot-location": ["warn", "property"],
    "dot-notation": ["warn", { allowKeywords: true }],
    "eol-last": "warn",
    "eqeqeq": ["warn", "always", { null: "ignore" }],
    "func-call-spacing": ["warn", "never"],
    "generator-star-spacing": ["warn", { before: true, after: true }],
    "indent": ["warn", 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 },
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
      ignoredNodes: ["TemplateLiteral *", "JSXElement", "JSXElement > *", "JSXAttribute", "JSXIdentifier", "JSXNamespacedName", "JSXMemberExpression", "JSXSpreadAttribute", "JSXExpressionContainer", "JSXOpeningElement", "JSXClosingElement", "JSXFragment", "JSXOpeningFragment", "JSXClosingFragment", "JSXText", "JSXEmptyExpression", "JSXSpreadChild"],
      offsetTernaryExpressions: true,
    }],
    "key-spacing": ["warn", { beforeColon: false, afterColon: true }],
    "keyword-spacing": ["warn", { before: true, after: true }],
    "lines-between-class-members": ["warn", "always", { exceptAfterSingleLine: true }],
    "multiline-ternary": ["warn", "always-multiline"],
    "new-cap": ["warn", { newIsCap: true, capIsNew: false, properties: true }],
    "new-parens": "warn",
    "no-array-constructor": "warn",
    "no-async-promise-executor": "warn",
    "no-caller": "warn",
    "no-case-declarations": "warn",
    "no-class-assign": "warn",
    "no-compare-neg-zero": "warn",
    "no-cond-assign": "warn",
    "no-const-assign": "warn",
    "no-constant-condition": ["warn", { checkLoops: false }],
    "no-control-regex": "warn",
    "no-debugger": "warn",
    "no-delete-var": "warn",
    "no-dupe-args": "warn",
    "no-dupe-class-members": "warn",
    "no-dupe-keys": "warn",
    "no-duplicate-case": "warn",
    "no-useless-backreference": "warn",
    "no-empty": ["warn", { allowEmptyCatch: true }],
    "no-empty-character-class": "warn",
    "no-empty-pattern": "warn",
    "no-eval": "warn",
    "no-ex-assign": "warn",
    "no-extend-native": "warn",
    "no-extra-bind": "warn",
    "no-extra-boolean-cast": "warn",
    "no-extra-parens": ["warn", "functions"],
    "no-fallthrough": "warn",
    "no-floating-decimal": "warn",
    "no-func-assign": "warn",
    "no-global-assign": "warn",
    "no-implied-eval": "warn",
    "no-import-assign": "warn",
    "no-invalid-regexp": "warn",
    "no-irregular-whitespace": "warn",
    "no-iterator": "warn",
    "no-labels": ["warn", { allowLoop: false, allowSwitch: false }],
    "no-lone-blocks": "warn",
    "no-loss-of-precision": "warn",
    "no-misleading-character-class": "warn",
    "no-prototype-builtins": "warn",
    "no-useless-catch": "warn",
    "no-mixed-operators": ["warn", {
      groups: [
        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
        ["&&", "||"],
        ["in", "instanceof"],
      ],
      allowSamePrecedence: true,
    }],
    "no-mixed-spaces-and-tabs": "warn",
    "no-multi-spaces": "warn",
    "no-multi-str": "warn",
    "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 0 }],
    "no-new": "warn",
    "no-new-func": "warn",
    "no-new-object": "warn",
    "no-new-symbol": "warn",
    "no-new-wrappers": "warn",
    "no-obj-calls": "warn",
    "no-octal": "warn",
    "no-octal-escape": "warn",
    "no-proto": "warn",
    "no-redeclare": ["warn", { builtinGlobals: false }],
    "no-regex-spaces": "warn",
    "no-return-assign": ["warn", "except-parens"],
    "no-self-assign": ["warn", { props: true }],
    "no-self-compare": "warn",
    "no-sequences": "warn",
    "no-shadow-restricted-names": "warn",
    "no-sparse-arrays": "warn",
    "no-tabs": "warn",
    "no-template-curly-in-string": "warn",
    "no-this-before-super": "warn",
    "no-throw-literal": "warn",
    "no-trailing-spaces": "warn",
    "no-undef": "warn",
    "no-undef-init": "warn",
    "no-unexpected-multiline": "warn",
    "no-unmodified-loop-condition": "warn",
    "no-unneeded-ternary": ["warn", { defaultAssignment: false }],
    "no-unreachable": "warn",
    "no-unreachable-loop": "warn",
    "no-unsafe-finally": "warn",
    "no-unsafe-negation": "warn",
    "no-unused-expressions": ["warn", {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    }],
    "no-unused-vars": ["warn", {
      args: "none",
      caughtErrors: "none",
      ignoreRestSiblings: true,
      vars: "all",
    }],
    "no-use-before-define": ["warn", { functions: false, classes: false, variables: false }],
    "no-useless-call": "warn",
    "no-useless-computed-key": "warn",
    "no-useless-constructor": "warn",
    "no-useless-escape": "warn",
    "no-useless-rename": "warn",
    "no-useless-return": "warn",
    "no-void": "warn",
    "no-whitespace-before-property": "warn",
    "no-with": "warn",
    "object-curly-newline": ["warn", { multiline: true, consistent: true }],
    "object-curly-spacing": ["warn", "always"],
    "object-property-newline": ["warn", { allowMultiplePropertiesPerLine: true }],
    "one-var": ["warn", { initialized: "never" }],
    "operator-linebreak": ["warn", "after", { overrides: { "?": "before", ":": "before", "|>": "before" } }],
    "padded-blocks": ["warn", { blocks: "never", switches: "never", classes: "never" }],
    "prefer-const": ["warn", { destructuring: "all" }],
    "prefer-promise-reject-errors": "warn",
    "prefer-regex-literals": ["warn", { disallowRedundantWrapping: true }],
    "quote-props": ["warn", "as-needed"],
    "quotes": ["warn", "double", { avoidEscape: true, allowTemplateLiterals: false }],
    "rest-spread-spacing": ["warn", "never"],
    "semi": ["warn", "never"],
    "semi-spacing": ["warn", { before: false, after: true }],
    "space-before-blocks": ["warn", "always"],
    "space-before-function-paren": [
      "warn",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "space-in-parens": ["warn", "never"],
    "space-infix-ops": "warn",
    "space-unary-ops": ["warn", { words: true, nonwords: false }],
    "spaced-comment": ["warn", "always", {
      line: { markers: ["*package", "!", "/", ",", "="] },
      block: { balanced: true, markers: ["*package", "!", ",", ":", "::", "flow-include"], exceptions: ["*"] },
    }],
    "symbol-description": "warn",
    "template-curly-spacing": ["warn", "never"],
    "template-tag-spacing": ["warn", "never"],
    "unicode-bom": ["warn", "never"],
    "use-isnan": ["warn", {
      enforceForSwitchCase: true,
      enforceForIndexOf: true,
    }],
    "valid-typeof": ["warn", { requireStringLiterals: true }],
    "wrap-iife": ["warn", "any", { functionPrototypeMethods: true }],
    "yield-star-spacing": ["warn", "both"],
    "yoda": ["warn", "never"],

    "import/export": "warn",
    "import/first": "warn",
    "import/no-absolute-path": ["warn", { esmodule: true, commonjs: true, amd: false }],
    "import/no-duplicates": "warn",
    "import/no-named-default": "warn",
    "import/no-webpack-loader-syntax": "warn",

    "n/handle-callback-err": ["warn", "^(err|error)$"],
    "n/no-callback-literal": "warn",
    "n/no-deprecated-api": "warn",
    "n/no-exports-assign": "warn",
    "n/no-new-require": "warn",
    "n/no-path-concat": "warn",
    "n/process-exit-as-throw": "warn",

    "promise/param-names": "warn",
  },
}
