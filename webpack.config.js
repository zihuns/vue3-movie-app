const path = require("path");
const Dotenv = require('dotenv-webpack')

module.exports = {
  css: {
    loaderOptions: {
        sass: {
            additionalData: `@import "~/scss/main";`
          }
      }
  },

  resolve: {
    // 경로에서 확장자 생략 설정
    extensions: [".js", ".vue"],
    // 경로 별칭 설정
    alias: {
      "~": path.resolve(__dirname, "src"),
      assets: path.resolve(__dirname, "src/assets"),
    },
  },

  plugins: [
    new Dotenv()
  ],
   

  // 개발 서버 옵션
  devServer: {
    host: "localhost",
    port: 8079,
    hot: true,
  },
}