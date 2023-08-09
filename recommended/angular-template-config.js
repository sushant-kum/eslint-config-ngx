/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  plugins: ["@angular-eslint", "prettier"],
  extends: [
    "plugin:@angular-eslint/template/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@angular-eslint/template/accessibility-alt-text": "warn",
    "@angular-eslint/template/accessibility-elements-content": "warn",
    "@angular-eslint/template/accessibility-label-has-associated-control":
      "warn",
    "@angular-eslint/template/accessibility-table-scope": "error",
    "@angular-eslint/template/accessibility-valid-aria": "error",
    "@angular-eslint/template/banana-in-box": "error",
    "@angular-eslint/template/button-has-type": "warn",
    "@angular-eslint/template/click-events-have-key-events": "warn",
    "@angular-eslint/template/conditional-complexity": "warn",
    "@angular-eslint/template/cyclomatic-complexity": [
      "warn",
      { maxComplexity: 10 },
    ],
    "@angular-eslint/template/eqeqeq": "error",
    "@angular-eslint/template/mouse-events-have-key-events": "warn",
    "@angular-eslint/template/no-any": "error",
    "@angular-eslint/template/no-call-expression": "warn",
    "@angular-eslint/template/no-distracting-elements": "error",
    "@angular-eslint/template/no-duplicate-attributes": "error",
    "@angular-eslint/template/no-negated-async": "warn",
    "@angular-eslint/template/no-positive-tabindex": "warn",
    "@angular-eslint/template/use-track-by-function": "warn",
    "@angular-eslint/template/attributes-order": "warn",
  },
};
