module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["/packages/**/tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  root: true,
};
