var webpack = require("webpack")

var options = {
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

module.exports = [
  {
    externals: options.externals,
    entry: options.entry,
    output: {
      library: "ReactCheatSheet",
      libraryTarget: "umd",
      path: __dirname + "/dist",
      filename: "ReactCheatSheet.js"
    },
    module: options.module
  },

  {
    externals: options.externals,
    entry: options.entry,
    output: {
      library: "ReactCheatSheet",
      libraryTarget: "umd",
      path: __dirname + "/dist",
      filename: "ReactCheatSheet.min.js"
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({})
    ],
    module: options.module
  },
]
