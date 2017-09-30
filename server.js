/**
 * Created by 140315 on 2017/9/27.
 */
import koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import views from 'koa-views'
import path from 'path'
let app=new koa();
let router=new Router();
app.use(bodyParser({
    onerror: function (err, ctx) {
        ctx.throw(err);
    }
}));

app.use(views(path.join(__dirname,'./views'),{
    extension:'hbs',
    map: { hbs: 'handlebars' },
}));
app.use(async (ctx,next)=>{
    ctx.state={name:'123',age:'222'}
  await next();
});
router.get('/',async (ctx)=>{
    ctx.state = { title: '111', author: 'queckezz' }
    return ctx.render('index')
});
router.get('/hello',async (ctx)=>{
    console.log(ctx.state)
    return ctx.render('hello')
});
app.use(router.routes(),router.allowedMethods());
/*app.use(async (ctx)=>{
    ctx.state = { title: '111', author: 'queckezz' }
    //return ctx.render('index.hbs',{name:'战三',age:'zhangsan'})
});*/
app.listen(8000);
app.on('error',(err,ctx)=>{
   console.log(err);
});
module.exports=app;