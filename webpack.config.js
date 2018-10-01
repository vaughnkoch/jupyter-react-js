// webpack v4
var path = require('path');

module.exports = {
  'mode': 'development',

  entry: {
    index: './src/index.js'
  },

  output: {
    path: path.join(__dirname, ''),
    filename: '[name].js',
    libraryTarget: 'amd'
  },

  devtool: 'source-map',


  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  }
}
