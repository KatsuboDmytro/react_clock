module.exports = {
  extends: [
    '@mate-academy/eslint-config-react-typescript',
    'plugin:cypress/recommended',
  ],
  rules: {
    'prettier/prettier': 0,
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
