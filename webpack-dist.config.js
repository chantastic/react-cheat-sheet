var webpack = require("webpack")
var options = require("./sharedWebpackConfig")

var externals = { "react": "React" }

module.exports = [
  {
    externals: externals,
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
    externals: externals,
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
