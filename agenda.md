* Введение
  ** https://github.com/gippius/y-webinar-webpack
  ** Почему .gitignore
* Node
  ** проверить node -v
  ** показать node в консоли
  ** npm init
  ** package.json
* NPM
  ** npm -v
* Устанавливаем webpack 
  ** npm i webpack-cli webpack-dev-server --save-dev 
  ** (--save-dev = -D)
  ** смотрим на package
* Создаем конфиг webpack.conf.js
  ** entry, output, mode, devServer
  ** сборки dev и build в scripts
* Добавляем babel
  ** npm i @babel/core  @babel/preset-env core-js --save-dev
  ** babel.config.js
  ** модуль и правило для бабеля в webpack config
  ** убрать ссылку на скрипт из html
* Настраиваем обработку HTML
  ** npm i html-webpack-plugin --save-dev 
  ** webpack.config.js
* CSS-файлов много. Ставим mini css extract plugin
  ** npm i css-loader mini-css-extract-plugin --save-dev
  ** 
* Минифицируем CSS - postcss, cssnano, autoprefixer
  ** CSS можно сжать
  ** npm i postcss-loader autoprefixer cssnano --save-dev
* Clean Webpack Plugin
  ** создаем postcss.config.js
  ** npm i clean-webpack-plugin   --save-dev
* Настраиваем обработку картинок
  ** встроенный лоадер
  ** webpack.config.js
* Что получилось