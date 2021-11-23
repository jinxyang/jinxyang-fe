module.exports = {
  port: 5469,
  proxy: [],
  splitChunks: {
    cacheGroups: {
      react: {
        name: 'react',
        priority: 10,
        test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
      },
    },
  },
}
