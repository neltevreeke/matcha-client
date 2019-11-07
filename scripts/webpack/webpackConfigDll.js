const path = require('path')
const webpack = require('webpack')
const paths = require('../utils/paths')
const { deps } = require('../utils/dlls')

const webpackConfig = {
  mode: 'development',
  entry: {
    deps: Object.keys(deps)
  },
  devtool: 'source-map',
  output: {
    filename: '[name].dll.js',
    path: paths.dllOutputPath,
    library: '[name]_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(paths.dllOutputPath, '[name].json'),
      name: '[name]_[hash]'
    })
  ],
  performance: {
    hints: false
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}

module.exports = webpackConfig
