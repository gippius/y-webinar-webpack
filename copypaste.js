// webpack.conf.js:

// const path = require('path');
// module.exports = {
//     entry: { main: './src/index.js' },
//     output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'main.js',
//         publicPath: ''
//   },
//     mode: 'development',
//   devServer: {
//     contentBase: path.resolve(__dirname, './dist'),
//     compress: true,
//     port: 8080,
//     open: true
//   },
//     module: {
//     rules: [ // rules — это массив правил
//       // добавим в него объект правил для бабеля
//       {
//         // регулярное выражение, которое ищет все js файлы
//         test: /\.js$/,
//         // при обработке этих файлов нужно использовать babel-loader
//         use: 'babel-loader',
//         // исключает папку node_modules, файлы в ней обрабатывать не нужно
//         exclude: '/node_modules/'
//       }
//       ]
//   }
// }; 


// "build": "webpack --mode production",
// "dev": "webpack serve


// babel.config.js -> Babel presets:
// const presets = [
//     ['@babel/env', { // какой пресет использовать
//       targets: { // какие версии браузеров поддерживать
//         edge: '17',
//         ie: '11',
//         firefox: '50',
//         chrome: '64',
//         safari: '11.1'
//       },
  
//       // использовать полифиллы для браузеров из свойства target
//       // по умолчанию babel использует поллифиллы библиотеки core-js
//       useBuiltIns: "entry"
//     }]
//   ];
  
//   module.exports = { presets }; 

// weback.config.js -> HTML loader
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html' // путь к файлу index.html
//     }),
//   ] 


// Картинки -> webpack.config.js
// {
//     test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
//     type: 'asset/resource'
// },
{/* <img src="<%=require('./images/logo.png')%>" alt="Логотип">  */}

// CSS в конфиг
// import './styles/index.css' в скрипт

// webpack.config.json -> CSS load and extract
// новое правило: {
//       // применять это правило только к CSS-файлам
//       test: /\.css$/,
//       // при обработке этих файлов нужно использовать
//       // MiniCssExtractPlugin.loader и css-loader
//       use: [MiniCssExtractPlugin.loader, {
//         loader: 'css-loader'
//       }]
//     }
//   ] 
// plugins: [
//     new HtmlWebpackPlugin({
//       template: 'src/index.html'
//     }),
//     new MiniCssExtractPlugin() // подключение плагина для объединения файлов
//   ] 

// Clean Webpack Plugin -> webpack.config.js
//     new CleanWebpackPlugin(),

// CSS минификация -> postcss.config.js
// 
// const autoprefixer = require('autoprefixer');
// const cssnano = require('cssnano');
// module.exports = {
//   // подключите плагины к PostCSS
//   plugins: [
//     // подключите autoprefixer
//     autoprefixer,
//     // cssnano при подключении нужно передать объект опций
//     // { preset: default } говорит о том, что нужно использовать
//     // стандартные настройки минификации
//     cssnano({ preset: 'default' })
//   ]

// + в rules webpack.config.json
// {
//     test: /\.css$/,
//     use: [MiniCssExtractPlugin.loader, {
//         loader: 'css-loader',
//         options: {
//           importLoaders: 1
//         }
//       },
//       'postcss-loader'
//     ]
//   }
// }; 