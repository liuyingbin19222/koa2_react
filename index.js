// import { myrouter } from './routes/router'
const { router } = require('./routes/router');
const koaBody = require('koa-body');
const Koa = require('koa')
const app = new Koa()
// 引入koa-router并对其实例化;
const koarouter = require('koa-router')()
app.use(koaBody());

koarouter.post('/Login_koa',router.UserModel.Login_koa);
// koarouter.get('/getUserInfo',router.UserModel.getUserInfo);

app.use(koarouter.routes(), koarouter.allowedMethods())
app.listen(8000);
app.on('error',(ctx)=>{
    console.log(ctx);
});


