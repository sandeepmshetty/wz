const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: 'index.html',
        },
        hot: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "documents",
            filename: "remoteEntry.js",
            exposes: {
                "./DocumentsApp": "./src/bootstrap",
            },
            shared: packageJson.devDependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
};

module.exports = merge(commonConfig, devConfig);