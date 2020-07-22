module.exports = {
  /**
   * publicPath 静态资源的基础路径，打包是webpack 会在静态文件路径前面添加 publicPath 的值
   * 一个使用场景：
   */
  publicPath: "/best-practice",
  devServer: {
    port: 9527,
  },
};
