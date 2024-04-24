// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   mode: "development",
//   devServer: {
//     port: 8082,
//     compress: true,
//     hot: true,
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       name: "documents",
//       filename: "remoteEntry.js",
//       exposes: {
//         "./DocumentsList": "./src/bootstrap",
//       },
//       shared: ["faker"],
//     }),
//     new HtmlWebpackPlugin({
//       template: "./public/index.html",
//     }),
//   ],
// };


const path = require('path');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
      // Add other rules as necessary
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: './src/index.html'
  //   })
  // ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 8082,
    open: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "documents",
      filename: "remoteEntry.js",
      exposes: {
        "./DocumentsList": "./src/main.ts",
      },
      shared: ["faker"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ]
};