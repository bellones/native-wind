module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ["prettier"],
  rules: {
    rules: {'prettier/prettier': ['error', {endOfLine: 'auto'}]},
  }
};
