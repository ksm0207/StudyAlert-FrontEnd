const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,

  devServer: {
    proxy: {
      '/v1': {
        target: process.env.VUE_APP_API,
        changeOrigin: true,
        secure:false
      } 
    }
  },

});
