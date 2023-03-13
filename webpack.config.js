const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: './example.js',
    output: {
        filename: '[name].webpack.js',
        path: path.resolve(__dirname),
    },
    plugins: [new HtmlWebpackPlugin()],
}