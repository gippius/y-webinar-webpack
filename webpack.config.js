const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = { 
  entry: { 
    main: './src/scripts/index.js' 
  }, 
  output: { 
    path: path.resolve(__dirname, 'dist'), 
    filename: 'main.js', 
    publicPath: '' 
  }, 
  mode: 'development',
  devServer: { 
    contentBase: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true
  },
  plugins: [
      new CleanWebpackPlugin()
  ]
} 