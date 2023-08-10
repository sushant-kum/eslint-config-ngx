/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  plugins: ["@angular-eslint"],
  extends: ["plugin:@angular-eslint/recommended", "plugin:@angular-eslint/template/process-inline-templates"],
  rules: {
    "@angular-eslint/no-empty-lifecycle-method": "warn",
    "@angular-eslint/contextual-lifecycle": "warn",
    "@angular-eslint/no-input-rename": "warn",
    "@angular-eslint/no-host-metadata-property": "warn",
    "@angular-eslint/no-inputs-metadata-property": "warn",
    "@angular-eslint/no-output-native": "off",
  },
};
