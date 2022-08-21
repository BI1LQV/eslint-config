module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  extends: [
    "./standard",
    "plugin:import/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:yml/standard",
    "plugin:markdown/recommended",
  ],
  ignorePatterns: [
    "*.min.*",
    "*.d.ts",
    "CHANGELOG.md",
    "dist",
    "LICENSE*",
    "output",
    "coverage",
    "public",
    "temp",
    "packages-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "__snapshots__",
    "!.github",
    "!.vitepress",
    "!.vscode",
  ],
  plugins: [
    "html",
    "unicorn",
    "bi1lqv",
  ],
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".mjs"] },
    },
  },
  overrides: [
    {
      files: ["*.json", "*.json5"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/array-bracket-spacing": ["warn", "never"],
        "jsonc/comma-dangle": ["warn", "never"],
        "jsonc/comma-style": ["warn", "last"],
        "jsonc/indent": ["warn", 2],
        "jsonc/key-spacing": ["warn", { beforeColon: false, afterColon: true }],
        "jsonc/no-octal-escape": "warn",
        "jsonc/object-curly-newline": ["warn", { multiline: true, consistent: true }],
        "jsonc/object-curly-spacing": ["warn", "always"],
        "jsonc/object-property-newline": ["warn", { allowMultiplePropertiesPerLine: true }],
      },
    },
    {
      files: ["*.yaml", "*.yml"],
      parser: "yaml-eslint-parser",
      rules: {
        "spaced-comment": "off",
      },
    },
    {
      files: ["package.json"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/sort-keys": [
          "warn",
          {
            pathPattern: "^$",
            order: [
              "publisher",
              "name",
              "displayName",
              "type",
              "version",
              "private",
              "packageManager",
              "description",
              "author",
              "license",
              "funding",
              "homepage",
              "repository",
              "bugs",
              "keywords",
              "categories",
              "sideEffects",
              "exports",
              "main",
              "module",
              "unpkg",
              "jsdelivr",
              "types",
              "typesVersions",
              "bin",
              "icon",
              "files",
              "engines",
              "activationEvents",
              "contributes",
              "scripts",
              "peerDependencies",
              "peerDependenciesMeta",
              "dependencies",
              "optionalDependencies",
              "devDependencies",
              "pnpm",
              "overrides",
              "resolutions",
              "husky",
              "simple-git-hooks",
              "lint-staged",
              "eslintConfig",
            ],
          },
          {
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
            order: { type: "asc" },
          },
          {
            pathPattern: "^exports.*$",
            order: [
              "types",
              "require",
              "import",
            ],
          },
        ],
      },
    },
    {
      files: ["*.d.ts"],
      rules: {
        "import/no-duplicates": "off",
      },
    },
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["scripts/**/*.*", "cli.*"],
      rules: {
        "no-console": "off",
      },
    },
    {
      files: ["*.test.ts", "*.test.js", "*.spec.ts", "*.spec.js"],
      rules: {
        "no-unused-expressions": "off",
      },
    },
    {
      // Code blocks in markdown file
      files: ["**/*.md/*.*"],
      rules: {
        "@typescript-eslint/no-redeclare": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/comma-dangle": "off",
        "import/no-unresolved": "off",
        "no-alert": "off",
        "no-console": "off",
        "no-restricted-imports": "off",
        "no-undef": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
      },
    },
  ],
  rules: {
    // import
    "import/order": "warn",
    "import/first": "warn",
    "import/no-mutable-exports": "warn",
    "import/no-unresolved": "off",
    "import/no-absolute-path": "off",

    // Common
    "semi": ["warn", "never"],
    "quotes": ["warn", "double"],
    "no-unused-vars": "warn",
    "no-param-reassign": "off",
    "array-bracket-spacing": ["warn", "never"],
    "brace-style": ["warn", "stroustrup", { allowSingleLine: true }],
    "block-spacing": ["warn", "always"],
    "camelcase": "off",
    "comma-spacing": ["warn", { before: false, after: true }],
    "comma-style": ["warn", "last"],
    "comma-dangle": ["warn", "always-multiline"],
    "no-constant-condition": "warn",
    "no-debugger": "warn",
    "no-console": "off",
    "no-cond-assign": ["warn", "always"],
    "func-call-spacing": ["off", "never"],
    "key-spacing": ["warn", { beforeColon: false, afterColon: true }],
    "indent": ["warn", 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
    "no-restricted-syntax": [
      "warn",
      "DebuggerStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "object-curly-spacing": ["warn", "always"],
    "no-return-await": "off",
    "space-before-function-paren": [
      "warn",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "no-multiple-empty-lines": ["warn", { max: 1, maxBOF: 0, maxEOF: 1 }],

    // es6
    "no-var": "warn",
    "prefer-arrow-callback": [
      "warn",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    "object-shorthand": [
      "warn",
      "always",
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    "prefer-exponentiation-operator": "warn",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "template-curly-spacing": "warn",
    "arrow-parens": ["warn", "as-needed", { requireForBlockBody: true }],
    "generator-star-spacing": "off",
    "spaced-comment": ["warn", "always", {
      line: {
        markers: ["/"],
        exceptions: ["/", "#"],
      },
      block: {
        markers: ["!"],
        exceptions: ["*"],
        balanced: true,
      },
    }],

    // best-practice
    "array-callback-return": "warn",
    "block-scoped-var": "warn",
    "consistent-return": "off",
    "complexity": ["off", 11],
    "eqeqeq": ["warn", "smart"],
    "no-alert": "warn",
    "no-case-declarations": "warn",
    "no-multi-spaces": "warn",
    "no-multi-str": "warn",
    "no-with": "warn",
    "no-void": "warn",
    "no-useless-escape": "off",
    "vars-on-top": "warn",
    "require-await": "off",
    "no-return-assign": "off",
    "operator-linebreak": ["warn", "before"],

    // unicorns
    // Pass error message when throwing errors
    "unicorn/error-message": "warn",
    // Uppercase regex escapes
    "unicorn/escape-case": "warn",
    // Array.isArray instead of instanceof
    "unicorn/no-instanceof-array": "warn",
    // Prevent deprecated `new Buffer()`
    "unicorn/no-new-buffer": "warn",
    // Keep regex literals safe!
    "unicorn/no-unsafe-regex": "off",
    // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
    "unicorn/number-literal-case": "warn",
    // includes over indexOf when checking for existence
    "unicorn/prefer-includes": "warn",
    // String methods startsWith/endsWith instead of more complicated stuff
    "unicorn/prefer-string-starts-ends-with": "warn",
    // textContent instead of innerText
    "unicorn/prefer-text-content": "warn",
    // Enforce throwing type error when throwing error while checking typeof
    "unicorn/prefer-type-error": "warn",
    // Use new when throwing error
    "unicorn/throw-new-error": "warn",

    "no-use-before-define": ["warn", { functions: false, classes: false, variables: true }],
    "eslint-comments/disable-enable-pair": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/namespace": "off",
    "n/no-callback-literal": "off",

    "sort-imports": [
      "warn",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],

    // yml
    "yml/quotes": ["warn", { prefer: "single", avoidEscape: false }],
    "yml/no-empty-document": "off",

    // bi1lqv
    "bi1lqv/if-newline": "warn",
    "bi1lqv/import-dedupe": "warn",
    // 'bi1lqv/prefer-inline-type-import': 'error',
  },
}
