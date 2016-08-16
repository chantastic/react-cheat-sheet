var webpack = require("webpack");

var definePlugin = new webpack.DefinePlugin({
  "process.env": { "NODE_ENV": JSON.stringify("production") }
});

module.exports = {
  entry: "./example/src/example.js",
  output: {
    path: __dirname + "/example",
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
