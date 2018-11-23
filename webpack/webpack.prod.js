const path = require('path')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const prodConfig = {
    mode: 'production',
    plugins: [
        new CopyWebpackPlugin([{
            from: path.resolve('src/assets/fonts'),
            to: path.resolve('dist/fonts')
        }]),
        new UglifyJSPlugin()
    ]
}

module.exports = merge(common, prodConfig)
