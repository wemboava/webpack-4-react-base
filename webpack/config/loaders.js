'use strict'

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    {
        test: /\.html$/,
        use: [{
            loader: 'html-loader'
        }]
    },
    {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },
    {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre'
    },
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
    },
    {
        test: /\.(png|jpe?g|gif|svg)?$/,
        use: [
            {
                loader: 'url-loader',
                options: { limit: 10000 }
            },
            'image-webpack-loader'
        ]
    },
    {
        test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }
        ]
    }
]
