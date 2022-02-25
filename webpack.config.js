/*
 * @Author: Lee
 * @Description:
 * @Date: 2022-01-26 18:29:24
 * @LastEditTime: 2022-02-15 13:37:01
 * @FilePath: /shopping cart demo/webpack.config.js
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle[hash:8].js",
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:"babel-loader",
        include:path.resolve(__dirname,'src'),
        exclude:/node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      filename: "index.html",
      title: "this is TEST",
      minify: {
        removeAttributeQuotes: true,
      },
    }),
    new CleanWebpackPlugin({}),
  ],
  devServer: {
    // contentBase: "static",
    static: {
      directory: path.resolve(__dirname, "static"),
    },
    port: 8080,
    host: "localhost",
    compress: true,
    open: true,
    proxy: {
      "/api/*": {
        target: "http://localhost:8888",
      },
    },
  },
};
