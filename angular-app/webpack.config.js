const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  devServer: {
    port: 8081,
    compress: true,
    hot: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "angularApp",
      exposes: {
        "./MyFeature": "./src/app/my-feature/my-feature.module.ts"
      },
      library: { type: 'var', name: 'app1' },
      // library: { type: "module" },
      filename: "remoteEntry.js"
      // shared: [
      //   "@angular/core",
      //   "@angular/router",
      //   "@angular/common",
      // ]
    }),
  ],
};
