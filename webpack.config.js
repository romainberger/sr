const path = require('path')
const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV || "development"

module.exports = {
    mode: NODE_ENV,
    entry: {
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
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: NODE_ENV === "development",
        }),
    ],
}
