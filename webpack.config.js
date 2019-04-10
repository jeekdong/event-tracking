const path = require("path");

module.exports = {
  mode: 'production',
  entry: {
    eventTrack: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    library: "eventTracking",
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
