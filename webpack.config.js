const path = require('path')

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
    mode: NODE_ENV,
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'build'),
        publicPath: './build/',
    },
    devtool: NODE_ENV === 'production' ? false : 'inline-source-map',
}
