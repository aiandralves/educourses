module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint/eslint-plugin"],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: [".eslintrc.js"],
    rules: {
        quotes: ["error", "double"],
        indent: ["error", 4],
        "prettier/prettier": "off",
        "interface-name-prefix": "off",
        "explicit-function-return-type": "off",
        "explicit-module-boundary-types": "off",
        "no-explicit-any": "off",
        "eslint-disable-next-line": "off",
    },
};
