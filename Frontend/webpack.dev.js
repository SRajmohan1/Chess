const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const buildPath = path.resolve(__dirname, 'dist')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: './src/scripts/test.ts'
    },
    devServer: {
        port: 8080,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
}