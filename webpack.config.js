const path = require('path')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {

    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'app'),
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.json', '.jsx' ]
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
}
