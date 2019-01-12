const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: './index.js',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.js[x]?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
};
