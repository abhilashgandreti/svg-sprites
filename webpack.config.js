const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["svg-sprite-loader", "svg-fill-loader", "svgo-loader"]
      }
    ]
  }
};
