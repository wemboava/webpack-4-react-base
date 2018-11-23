const path = require('path')
    , src = path.join(__dirname, '..', 'src')
    , alias = require('./config/alias')
    , loaders = require('./config/loaders')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        app: './src/index.jsx'
    },

    resolve: {
        extensions: ['.js', '.jsx', 'json'],
        alias
    },

    output: {
        publicPath: process.env.ASSET_PATH || ''
        // path: path.resolve(__dirname, '../dist'),
        // filename: '[name].bundle.js'
    },

    module: {
        rules: [
            ...loaders
        ]
    },

    plugins: [
        // require('autoprefixer'),

        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html'
        }),

        new ExtractTextPlugin({
            filename: './src/assets/scss/main.css',
            disable: false,
            allChunks: true
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].scss',
            chunkFilename: '[id].[contenthash].scss'
        })
    ]
}