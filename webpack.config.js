var webpack = require("webpack");
var path = require("path");

var DIST_DIST = path.resolve(__dirname, "dist");
var DIST_SRC = path.resolve(__dirname, "src");
var config = {
  entry : DIST_SRC + "/main.js",
  output : {
    //path: DIST_DIST ,
    filename : "./dist/app.js",
    //publicPath: "/dist/"
  },
  module: {
    loaders: [
      {
        test : /\.jsx?$/,
        loader : 'babel-loader',
        exclude : /(node_modules|bower_components)/,
        include : DIST_SRC,
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
