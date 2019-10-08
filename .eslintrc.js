module.exports = {
  root: true,
  extends: ["airbnb", "prettier", "prettier/react"],
  parser: "babel-eslint",
  env: {
    jest: true,
  },
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "prettier/prettier": ["error"],
    "no-use-before-define": 0,
    "react/prop-types": 0,
  },
  globals: {
    fetch: false,
  },
  plugins: ["prettier"],
};
