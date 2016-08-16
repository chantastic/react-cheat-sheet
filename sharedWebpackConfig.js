module.exports = {
  externals: { "react": "React" },

  entry: "./src/index.js",

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel"
      }
    ]
  }
}
