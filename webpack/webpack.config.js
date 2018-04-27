'use strict'

const loaders = require('./config/loaders')
    , alias = require('./config/alias')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    module: {
        rules: [
            ...loaders
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
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