//创建路由模块
const express=require('express');
const Router=express.Router();
// 引入Schema数据模型
const userModel=require('../model/4userModel.js');
//引入邮箱验证码模块
const mail=require('../5mail.js');
//引入构建返回数据模块
const util=require('../utils/8util.js');

let obj={}
//使用路由

//api文档部分
/**
 * @api {post} /user/login/ login
 * @apiName Login
 * @apiGroup User
 *
 * @apiParam {String} usname username
 * @apiParam {String} uspass userpassword
 * @apiParam {String} code emailcode
 * 
 * @apiSuccess {String} err Error code
 * @apiSuccess {String} msg  Error message
 */

//登录
Router.post('/login',(req,res)=>{
	let {usname,uspass,code}=req.body;
//	res.send({usname,uspass})
	//判断验证码是否符合 	登录时usname就是email 	code是发送的验证码
	if (obj[usname]!==code) { return res.send(util.sendData(-1,'验证码错误',null))}
	//使用数据模型查询数据
	userModel.find({usname,uspass})
	.then((data)=>{
		//console.log(data);
		if(data.length>=1){//1表示数据库存在这个用户
			res.send(util.sendData(0,'登录成功',data))
		}
	})
	.catch((err)=>{
		console.log(err)
		res.send(util.sendData(-1,'登录失败',null))
	})
})


/**
 * @api {post} /user/getcode/ getcode
 * @apiName getcode
 * @apiGroup User
 *
 * @apiParam {String} email useremail
 *
 * @apiSuccess {String} err Error code
 * @apiSuccess {String} msg  Error message
 */

//获取邮箱验证码
Router.post('/getcode',(req,res)=>{
	let {email}=req.body;
	//console.log(mail)
	//判断收件人邮箱参数
	if (!email || email=='') {
		return res.send(util.sendData(-1,'邮箱错误',null))
	}
	//验证码随机产生，为字符串形式
	let Num=parseInt(Math.random(0,1)*10000).toString();
	mail.sendmail(email,Num)
	.then((resolve)=>{
		//保存验证码信息
		obj[email]=Num;
		//console.log(obj)
		res.send(util.sendData(0,'验证码已发送',null))
		
		//验证码倒计时
		let countdown=60;
		timer = setInterval(function(){ 
			countdown--;
			if (countdown<=0) {
				obj[email]='';
			} 
		},1000);
		
	})
	.catch((err)=>{
		console.log(err)
		res.send(util.sendData(-1,'验证码发送失败',null))
	})
})



//获取用户id
Router.post('/getUserById',(req,res)=>{
	let id=req.body.id;
	
	if (!id) {
		res.send(util.sendData(-1,'参数错误',null))
	}
	
	userModel.find({_id:id})
	.then((data)=>{
		//console.log(data);
		res.send(util.sendData(0,"用户id查询成功",data))
	})
	.catch((err)=>{
		res.send(util.sendData(-1,"用户id查询失败",null))
	})
})



//抛出模块
module.exports=Router;