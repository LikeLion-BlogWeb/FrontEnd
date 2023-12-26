const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/auth", {
      target: "https://port-0-backend-jvpb2mloft5vlw.sel5.cloudtype.app", // 비즈니스 서버 URL 설정
      changeOrigin: true,
    })
  );
};