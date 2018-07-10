module.exports = { 
  extends: 'airbnb',
  "env": {
    "browser": true,
    "node": true,
  },
  "plugins": [
    "import", 
    "jsx-a11y", 
    "react",
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": 0,
  }
};