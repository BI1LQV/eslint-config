# @bi1lqv/eslint-config

## Usage

### Install

```bash
pnpm add -D eslint @bi1lqv/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@bi1lqv"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## License

[MIT](./LICENSE) License &copy; 2019-PRESENT [Anthony Fu](https://github.com/antfu)

[MIT](./LICENSE) License &copy; 2022-PRESENT [BI1LQV](https://github.com/bi1lqv)
