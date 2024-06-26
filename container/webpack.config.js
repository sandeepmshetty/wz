const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
    compress: true,
    hot: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        cases: "cases@http://localhost:8081/remoteEntry.js",
        documents: "documents@http://localhost:8082/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
