// path: NodeJS에서 파일 및 디렉토리 경로 작업을 위한 전역 모듈
const path = require("path");

module.exports = {
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
      port: 8080,
      hot: true,
    },
  },
};
