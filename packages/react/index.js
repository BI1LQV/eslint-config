module.exports = {
  extends: [
    "plugin:react/recommended",
    "@bi1lqv/eslint-config-ts",
  ],
  settings: {
    react: {
      version: "17.0",
    },
  },
  rules: {
    "jsx-quotes": [
      "warn",
      "prefer-double",
    ],
    "react/react-in-jsx-scope": "off",
  },
}
