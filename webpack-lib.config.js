var options = require("./sharedWebpackConfig.js")

module.exports = {
  externals: {
    "react": true,
  },
  entry: options.entry,
  output: {
    library: "ReactCheatSheet",
    libraryTarget: "commonjs2",
    path: __dirname + "/lib",
    filename: "index.js"
  },
  module: options.module
}
