/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  plugins: ["jasmine"],
  env: {
    jasmine: true,
  },
  extends: ["plugin:jasmine/recommended"],
  rules: {
    "jasmine/expect-matcher": "warn",
    "jasmine/expect-single-argument": "warn",
    // Keeping this as warning because it doesn't work well with testScheduler.run()
    "jasmine/missing-expect": "warn",
    "jasmine/named-spy": "warn",
    "jasmine/new-line-before-expect": "error",
    "jasmine/new-line-between-declarations": "error",
    "jasmine/no-assign-spyon": "off",
    "jasmine/no-describe-variables": "off",
    "jasmine/no-disabled-tests": "warn",
    "jasmine/no-expect-in-setup-teardown": "error",
    "jasmine/no-focused-tests": "error",
    "jasmine/no-global-setup": "error",
    "jasmine/no-pending-tests": "warn",
    "jasmine/no-promise-without-done-fail": "warn",
    "jasmine/no-spec-dupes": ["warn", "branch"],
    "jasmine/no-suite-callback-args": "error",
    "jasmine/no-suite-dupes": ["warn", "block"],
    "jasmine/no-unsafe-spy": "warn",
    "jasmine/prefer-jasmine-matcher": "warn",
    "jasmine/prefer-promise-strategies": "warn",
    "jasmine/prefer-toHaveBeenCalledWith": "warn",
    "jasmine/prefer-toBeUndefined": "off",
  },
};
