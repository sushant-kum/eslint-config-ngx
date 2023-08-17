/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  plugins: ["@angular-eslint", "prettier"],
  extends: [
    "plugin:@angular-eslint/template/recommended",
    "plugin:@angular-eslint/template/accessibility",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@angular-eslint/template/banana-in-box": "error",
    "@angular-eslint/template/button-has-type": "warn",
    "@angular-eslint/template/click-events-have-key-events": "warn",
    "@angular-eslint/template/conditional-complexity": "warn",
    "@angular-eslint/template/cyclomatic-complexity": ["warn", { maxComplexity: 10 }],
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
