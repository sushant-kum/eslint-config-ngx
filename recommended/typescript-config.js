/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  plugins: ["@typescript-eslint", "deprecation", "prettier", "import", "unused-imports"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/no-use-before-define": "warn",
    // Set up custom naming scheme
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: ["default"],
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: ["enumMember"],
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      {
        selector: ["function"],
        format: ["PascalCase", "camelCase"],
      },
      {
        selector: ["classProperty"],
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        modifiers: ["const", "readonly"],
      },
      {
        selector: ["property"],
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: ["typeLike"],
        format: ["PascalCase", "UPPER_CASE"],
      },
      {
        selector: ["variable"],
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: ["variable"],
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        modifiers: ["const"],
        leadingUnderscore: "allow",
      },
      {
        selector: ["objectLiteralProperty"],
        format: null,
      },
    ],
    "@typescript-eslint/ban-tslint-comment": "error",
    "no-console": [
      "error",
      {
        // allowedTypes
        allow: ["warn"],
      },
    ],
    "no-empty": "warn",
    // Don't enable this one. Empty constructors with DI raise false positives
    "no-useless-constructor": "off",
    // [END] Fix following rules across files and enable below rules
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    "no-trailing-spaces": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "no-eval": "error",
    "no-debugger": "error",
    "no-caller": "error",
    "no-bitwise": "error",
    "spaced-comment": ["error", "always"],
    complexity: ["error", 20],
    "deprecation/deprecation": "warn",
    eqeqeq: ["error", "always"],
    "eol-last": ["warn", "always"],
    "object-curly-spacing": ["error", "always"],
    "@typescript-eslint/explicit-member-accessibility": [
      "off",
      {
        accessibility: "explicit",
      },
    ],
    "@typescript-eslint/no-inferrable-types": "off",
    // Use prettier to handle braces
    "brace-style": "off",
    "id-denylist": "off",
    "id-match": "off",
    "max-len": [
      "error",
      {
        ignorePattern: "^import [^,]+ from |^export | implements",
        code: 140,
      },
    ],
    "no-underscore-dangle": "off",
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index", "object", "type"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": "warn",
    curly: "warn",
    "@typescript-eslint/member-ordering": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "prefer-const": "warn",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
};
