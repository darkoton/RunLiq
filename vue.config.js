const { defineConfig } = require('@vue/cli-service');
const path = require(`path`);

const NODE_ENV = process.env.NODE_ENV === 'development'
  ? 'development'
  : 'production';

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Runliq/' // project name
    : '/',
  css: {
    extract: NODE_ENV === 'production',
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/style/config/${NODE_ENV}.scss";`
      },
    }
  },
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve(`./node_modules/vue`)
      }
    }
  }
})
