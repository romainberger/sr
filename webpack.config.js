const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')

const DATA_ASSETS_FILE_PATH = path.join(__dirname, '_data/assets.json')

const NODE_ENV = process.env.NODE_ENV || "development"

module.exports = {
    mode: NODE_ENV,
    entry: {
        index: path.join(__dirname, 'src/index.js'),
        login: path.join(__dirname, 'src/login.js'),
        transfer: path.join(__dirname, 'src/transfer.js'),
    },
    output: {
        filename: NODE_ENV === 'production' ? '[name]-[chunkhash].js' : '[name].js',
        path: path.join(__dirname, 'build'),
        publicPath: './build/',
    },
    devtool: NODE_ENV === 'production' ? false : 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // // you can specify a publicPath here
                            // // by default it uses publicPath in webpackOptions.output
                            // publicPath: '../',
                            // hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: NODE_ENV === "development",
        }),
        new MiniCssExtractPlugin({
            filename: NODE_ENV === 'production' ? 'main-[chunkhash].css' : 'main.css',
        }),
        {
            apply: (compiler) => {
                compiler.hooks.afterEmit.tap('AfterEmitPlugin', compilation => {
                    const assets = Object.keys(compilation.assets).reduce((acc, asset) => {
                        if (asset.endsWith('LICENSE')) {
                            return acc
                        }

                        const name = asset.split('-')[0].split('.')[0]
                        acc[name] = `build/${asset}`

                        return acc
                    }, {})

                    fs.writeFile(DATA_ASSETS_FILE_PATH, JSON.stringify(assets, null, 2), err => {
                        if (err) {
                            console.error('Error writing asset file', err)
                            return
                        }

                        console.log('Asset file written')
                    })
                })
            },
        },
    ],
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
}
