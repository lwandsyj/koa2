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
 5.中间件
    1).koa中间件事一个异步（async）函数
      async function logger(ctx,next){}
          中间件的通过next函数联系,执行next()后会将控制权交给下一个中间件,如果没有有中间件没有执行next后将会沿路折返,
      将控制权交换给前一个中间件
  

    2).ctx作为上下文使用,包括基本的ctx.request和ctx.response另外koa通过delegates这个库对request, response一些常用属性或者方法,做了很多代理         操作,可以直接通过ctx访问得到,比如request.url可以写成ctx.url。

         除此之外,koa还约定了一个中间件的存储空间ctx.state通过这个state可以储存一些的数据,比如用户数据,另外类似koa-views这些渲染view层的中间件          也会默认把ctx.state里面的属性作为view的上下文传入。如果使用webpack打包的话可以使用中间将加载资源的方法作为ctx.state的属性传入到view层          使之获取资源路径。

         另外一个参数next,上面也讲过,他的作用是将处理的控制权交给下一个中间件,next()后面的代码会在后面中间件执行结束后执行。

         还有,因为中间件是按顺序执行,所以中间件的顺序也非常重要,另外路由执行顺序也是一样,因为都是通过中间件实现,所以路由的话应该把,容易匹配到的放           在后面
         
         
         
         
         
         
         
         
    
