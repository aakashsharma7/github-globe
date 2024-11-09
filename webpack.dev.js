// const path = require("path");

// module.exports = {
//   mode: "development",
//   entry: ["./src/index.js"],
//   devtool: "inline-source-map",
//   devServer: {
//     contentBase: "./dist",
//     open: false,
//     hot: true,
//     writeToDisk: true,
//   },
//   plugins: [],
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpe?g|jpg)$/i,
//         loader: "file-loader",
//         options: {
//           name: "[path][name].[ext]",
//           outputPath: "./assets",
//         },
//       },
//     ],
//   },
//   output: {
//     filename: "main.js",
//     path: path.resolve(__dirname, "dist"),
//   },
// };



const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),  // Serve files from "dist"
    },
    open: false,  // Set to true if you want the browser to open automatically
    hot: true,    // Enable hot module replacement
    port: 8080,   // Specify the port (optional)
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|jpg)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          outputPath: "assets",
        },
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Optional: Cleans the output directory on each build
  },
};
