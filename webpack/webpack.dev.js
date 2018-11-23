const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')

const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',

    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        stats: 'errors-only',
        hot: true,
        port: 3000,
        historyApiFallback: true
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(common, devConfig)