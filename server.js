/**
 * Created by 140315 on 2017/9/27.
 */
import koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
let app=new koa();
app.use(bodyParser({
    strict:false,
    extendTypes: {
        json: ['application/x-javascript'] // will parse application/x-javascript type body as a JSON string
    },
    onerror: function (err, ctx) {
        ctx.throw(err);
    }
}));
app.use(async (ctx)=>{
    console.log('get:%j',ctx.request.query)
    console.log('post:%j',ctx.request.body);
    ctx.body="hello koa2";
});
app.listen(8000);
app.on('error',(err,ctx)=>{
   console.log(err);
});
module.exports=app;