const path = require("path");

module.exports = {
  mode: 'production',
  entry: {
    eventTrace: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    library: "eventTrace",
    libraryTarget: "umd",
    filename: "[name].bundle.js",
    libraryExport: "default"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
