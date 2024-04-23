const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html',
        },
        hot: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "cases",
            filename: "remoteEntry.js",
            exposes: {
                "./CasesApp": "./src/bootstrap",
            },
            shared: packageJson.devDependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
};

module.exports = merge(commonConfig, devConfig);