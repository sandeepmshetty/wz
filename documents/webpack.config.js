const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
    compress: true,
    hot: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "documents",
      filename: "remoteEntry.js",
      exposes: {
        "./DocumentsList": "./src/bootstrap",
      },
      shared: ["faker"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
