const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
   mode: 'development',
   devServer:{
      port:8082
   },
   plugins:[
      new ModuleFederationPlugin({
         name: 'documents',
         filename: 'remoteEntry.js',
         exposes: {
            './DocumentsList': './src/index'
         }
      }),
      new HtmlWebpackPlugin({
         template: './public/index.html'
      })
   ]
};