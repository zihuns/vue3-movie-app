// path: NodeJS에서 파일 및 디렉토리 경로 작업을 위한 전역 모듈
const path = require("path");

module.exports = {
  // configureWebpack: require('./webpack.config.js'), // 웹팩 설정을 별도 파일로 분리

  css: {
    loaderOptions: {
        sass: {
            additionalData: `@import "~/scss/main";`
          }
      }
  },

  configureWebpack: {

    resolve: {
      // 경로에서 확장자 생략 설정
      extensions: [".js", ".vue"],
      // 경로 별칭 설정
      alias: {
        "~": path.resolve(__dirname, "src"),
        assets: path.resolve(__dirname, "src/assets"),
      },
    },

    // 개발 서버 옵션
    devServer: {
      host: "localhost",
      port: 8079,
      hot: true,
    },
  },
};
