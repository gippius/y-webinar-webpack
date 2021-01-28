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
  ** убрать ссылку на скрипт из html
* Настраиваем обработку HTML
  ** npm i html-webpack-plugin --save-dev 
  ** webpack.config.js
* Настраиваем обработку картинок
  ** встроенный лоадер
  ** webpack.config.js
* CSS-файлов много. Ставим mini css extract plugin
  ** npm i css-loader mini-css-extract-plugin --save-dev
  ** 
* Минифицируем CSS - postcss, cssnano, autoprefixer
  ** CSS можно сжать
  ** npm i postcss-loader autoprefixer cssnano --save-dev
* Что получилось