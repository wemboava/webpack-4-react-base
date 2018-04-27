'use strict'

const loaders = require('./config/loaders')
    , alias = require('./config/alias')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , MiniCssExtractPlugin = require('mini-css-extract-plugin')
    , path = require('path')
    , src = path.join(__dirname, '..', 'src')
    , dist = path.join(__dirname, '..', 'dist')

module.exports = {
    devtool: 'source-map',

    module: {
        rules: [
            ...loaders
        ]
    },

    devServer: {
        contentBase: dist,
        historyApiFallback: true,
        open: true,
        port: 9000
    },

    resolve: {
        extensions: ['.js', '.jsx', 'json'],
        alias: alias
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].scss",
            chunkFilename: "[id].scss"
        })
    ]
}