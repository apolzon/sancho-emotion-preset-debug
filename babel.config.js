module.exports = function(api) {
  var currentEnv = api.env();

  return {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@emotion/babel-preset-css-prop"
    ]
  };
};
