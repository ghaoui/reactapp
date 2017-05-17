var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var config = {
  entry : "./main.js",
  output : {
    filename : "app.js"
  },
  module: {
    loaders: [
      {
        test : /\.jsx?$/,
        loader : 'babel-loader',
        exclude : /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test : /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}
module.exports = config;
