//搭建服务器第一步，需下载并引入第三方模块express
const express=require('express');
const app=express();
//引入路由模块
const user=require('./router/2user.js');
//post方法需要用到的第三方模块
const bodyParser=require('body-parser');
// 引入数据库
const db=require('./3dbconnect.js');
// 上传图片的路由模块
const upload=require('./router/7upload.js');
// 引入path，静态文件用到
const path=require('path');
// 手机商品的路由模块
const phones=require('./router/9phones.js');

//bodyParser中的两种post参数解析
//解析 parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//解析 parse application/json
app.use(bodyParser.json())

//使用路由模块
app.use('/api/user',user);
//上传图片的路由
app.use('/api/upload',upload);
//手机商品的数据路由
app.use('/api/phones',phones);

// 静态文件开启
app.use(express.static(path.join(__dirname,'./public')));
//开启shop-admin静态文件
app.use('/shop-admin',express.static(path.join(__dirname,'./shop-admin')));

//测试服务器搭建是否成功
//app.get('/login',(req,res)=>{
//	res.send('234')
//})

//监听端口号8000
app.listen(8000,()=>{
	console.log('server start in port'+8000);
})
