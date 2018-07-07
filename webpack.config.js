const mode = process.env.MODE || 'production'

module.exports = {
  mode: mode,
  entry: "./src/index.js",
  output: {
    path: `${ __dirname }`,
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(gif|png|jpg|svg)/,
        loader: 'url-loader'
      }
    ]
  }
}
