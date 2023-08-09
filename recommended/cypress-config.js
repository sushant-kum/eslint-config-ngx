/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  plugins: ["cypress"],
  extends: ["plugin:cypress/recommended"],
  rules: {
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn",
    "cypress/no-force": "warn",
    "cypress/no-async-tests": "error",
    "cypress/no-pause": "error",
    "cypress/require-data-selectors": "warn",
    "cypress/unsafe-to-chain-command": "warn",
  },
  env: {
    "cypress/globals": true,
  },
};
