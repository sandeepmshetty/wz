const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   mode: 'development',
   devServer:{
      port:8081
   },
   plugins:[
      new ModuleFederationPlugin({
         name: 'cases',
         filename: 'remoteEntry.js',
         exposes: {
            './CasesIndex': './src/index'
         }
      }),
      new HtmlWebpackPlugin({
         template: './public/index.html'
      })
   ]
};