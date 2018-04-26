const loaders = require('./config/loaders')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , MiniCssExtractPlugin = require('mini-css-extract-plugin')
    , path = require('path')
    , src = path.join(__dirname, '..', 'src')

module.exports = {
    module: {
        rules: [
            ...loaders
        ]
    },

    resolve: {
        alias: {
            '_root': path.join('..', __dirname),
            '_assets': path.join(src, 'assets'),
            '_img': path.join(src, 'assets', 'images'),
            '_fonts': path.join(src, 'assets', 'fonts'),
            '_scss': path.join(src, 'assets', 'scss'),
            '_npm': path.join(__dirname, '..', 'node_modules')
        }
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