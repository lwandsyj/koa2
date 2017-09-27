# koa2
koa2 学习

1.创建package.json 文件
  npm init 
  npm init -y 
  此命令创建package.json 文件
2.创建入口文件
  1）创建入口文件app.js
  2）修改package.json 文件中main 配置选项为app.js
3.安装框架需要的包
    1）.koa 框架
      npm install koa --save

    2）.koa 路由
      npm install koa-router --save

    3）.静态资源
      npm install koa-static-cache --save

    4）.favicon图标
      npm install koa-favicon --save

    5）.body 解析
      npm install koa-bodyparser --save

    6）.koa-views 模板引擎
        npm install koa-views --save

    7）.模板
      handlebars:npm install koa-handlebars --save
      npm install w
    8）.cors: 跨域
      npm install kcors --save

    9）.convert 转换promise
        npm install koa-convert --save

    10）.log4js 日志
       npm install log4js --save

    11）.mongoose 连接mogondb
       npm install koa-mongoose --save
       npm install mongoose --save
    12）.session
      npm install koa-sessions --save

    13）.压缩 compress
       npm install koa-compress --save

    14）.安全helmet
      npm installl koa-helmet --save
    15）.错误处理
        npm install koa-handle-error --save
        或
        npm install koa-onerror

      16）.redis 
        npm install ioredis --save

      17）.
 
4.koa 支持es6语法
   1).使用babel
      由于babel-core 只支持es6基础语法，而新的API类似set等，则需要babel-polyfill 

   2).安装包
      npm install babel-core --save
      npm install babel-polyfill --save
 
   3).配置babelrc  touch .babelrc  创建babel配置文件
       npm install babel-preset-es2015 --save
       npm install babel-preset-stage-2 --save
       {
          "presets":["es2015","stage-2"]
       }

    4).app.js
       require('babel-core/register')
       require('babel-polyfill')
       require('./server')
