module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/i/': {
        target: 'http://localhost:5001/fonz-music-web/us-central1/app'
      }
    }
  }
};