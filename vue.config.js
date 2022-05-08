const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      stylus: {
        stylusOptions: {
          import: [
            path.resolve(__dirname, './src/styles/typography.styl'),
            path.resolve(__dirname, './src/styles/colors.styl'),
            path.resolve(__dirname, './src/styles/layout.styl'),
            path.resolve(__dirname, './src/styles/shadows.styl')
          ]
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.styl']
    }
  }
})
