const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const parentDir = path.join(__dirname, '../src');

// the path(s) that should be cleaned
let pathsToClean = [
    '*'
];
// the clean options to use
let cleanOptions = {
    root: path.resolve(__dirname, "../dist/"),
    verbose:  true,
    dry:      false
};

const CleanWebpackPluginConfig = new CleanWebpackPlugin(pathsToClean, cleanOptions);

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: parentDir+'/index.html',
    filename: 'index.html',
    inject: 'body'
});

const DotEnvPlugin = new Dotenv();

module.exports = {
    entry: {
        'bundle' : parentDir+'/js/index.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist/'),
        compress: true,
        port: 9000
    },
    devtool: 'source-map',
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {presets: ["@babel/env", "@babel/react"]},
            },
            {
                test: /\.(css|less)$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|scss)(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /img/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /fonts/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/'
                    }
                }]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: '[name].js',
        publicPath: "/"
    },
    plugins: [
        CleanWebpackPluginConfig,
        HTMLWebpackPluginConfig,
        DotEnvPlugin
    ]
};
