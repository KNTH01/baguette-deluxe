const TerserPlugin = require('terser-webpack-plugin');
const terserOptions = require('./minify-options');

module.exports = {
  productionSourceMap: false,

  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    performance: {
      hints: false
    },
    output: {
      filename: 'main.js',
      chunkFilename: 'main.js',
    },
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    }
  },

  css: {
    extract: false,
    loaderOptions: {
      sass: {
        data: `@import "@/styles/index.scss";`,
      },
    },
  },

  transpileDependencies: ['vuex-module-decorators'],

  chainWebpack: config => {
    config.optimization.minimizer([
      new TerserPlugin(terserOptions),
    ]);
    config.plugin('html')
      .tap(args => {
        args[0].inject = false;
        return args;
      });
  }
}