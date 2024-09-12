module.exports = {
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  configureWebpack: {  
    optimization: {  
      splitChunks: {  
        chunks: 'all',  
        minSize: 30000,  
        maxSize: 0,  
        minChunks: 1,  
        maxAsyncRequests: 30,  
        maxInitialRequests: 30,  
        automaticNameDelimiter: '~',  
        cacheGroups: {  
          vendor: {  
            test: /[\\/]node_modules[\\/]/,  
            name: 'vendors',  
            chunks: 'all'  
          },  
        },  
      },  
    }  
  }  
};
