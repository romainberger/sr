const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const DATA_FILE_PATH = path.join(__dirname, '_data/assets.json')
const NODE_ENV = process.env.NODE_ENV || "development"

module.exports = {
    mode: NODE_ENV,
    entry: {
        index: path.join(__dirname, 'src/index.js'),
        transfer: path.join(__dirname, 'src/transfer.js'),
    },
    output: {
        filename: NODE_ENV === 'production' ? '[name]-[chunkhash].js' : '[name]-[chunkhash].js',
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
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: NODE_ENV === "development",
        }),
        {
            apply: (compiler) => {
                compiler.hooks.afterEmit.tap('AfterEmitPlugin', compilation => {
                    const assets = Object.keys(compilation.assets).reduce((acc, asset) => {
                        const name = asset.split('-')[0]
                        acc[name] = `build/${asset}`

                        return acc
                    }, {})

                    fs.writeFile(DATA_FILE_PATH, JSON.stringify(assets, null, 2), err => {
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
}
