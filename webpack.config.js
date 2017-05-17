module.exports = {
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
