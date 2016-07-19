var webpack = require("webpack");

var definePlugin = new webpack.DefinePlugin({
  "process.env": { "NODE_ENV": JSON.stringify("production") }
});

module.exports = {
  entry: "./js/index.js",
  output: {
    filename: "browser-bundle.js",
  },
  plugins: [definePlugin],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
    ],
  },
};
