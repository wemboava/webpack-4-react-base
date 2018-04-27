'use strict'

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
            // formatter: require('eslint-friendly-formatter')
        }
    },
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
    },
    {
        test: /\.html$/,
        use: [
            {
                loader: "html-loader",
                options: { minimize: true }
            }
        ]
    },
    {
        test: /\.scss$/,
        use: [
            "style-loader",
            'css-loader',
            "sass-loader"
        ]
    },
    {
        test: /\.(png|jpe?g|gif|svg)?$/,
        loader: 'url-loader',
        options: {
            limit: 10000
        }
    },
    {
        test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    outputPath: 'fonts/',    // where the fonts will go
                }
            }
        ]
    }    
]
