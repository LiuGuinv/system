//此api接口功能：进行手机信息渲染----------

//创建路由模块
const express=require('express');
const Router=express.Router();
// 引入Schema数据模型
const phoneModel=require('../model/10phoneModel.js');
//引入邮箱验证码模块
const mail=require('../5mail.js');
//引入构建返回数据模块
const util=require('../utils/8util.js');
//phonelist 数据信息



//使用路由

//api文档部分
/**
 * @api {post} /phones/phonelist/ find-phonelist
 * @apiName find-phonelist
 * @apiGroup Phone
 *
 * @apiSuccess {String} err Error code
 * @apiSuccess {String} msg  Error message
 */

Router.post('/phonelist',(req,res)=>{
	//实现分页  总数据  目标页  每页多少条
	//console.log(req.body)
	let pagesize=Number(req.body.pagesize);
	let target=Number(req.body.target);
	let allnum=0;
	let phone_type=req.body.phone_type;
	let keyword=req.body.keyword;
	//i是正则里不区分大小写
	let reg = new RegExp(keyword, 'i');
	//console.log(phone_type)
	
	if (phone_type && !keyword) {
		//分类查询
		phoneModel.find({phone_type:phone_type})
		.then((res)=>{
			allnum=res.length;
			return phoneModel.find({phone_type:phone_type}).limit(pagesize).skip((target-1)*pagesize)
		})
		.then((data)=>{
			//console.log(data);
			let arr={allnum:allnum,phonelist:data}
			res.send(util.sendData(0,"查询成功",arr))
		})
		.catch((err)=>{
			//console.log(err);
			res.send(util.sendData(-1,"查询错误",null))
		})
	}else if(keyword && !phone_type){//模糊查询
		phoneModel.find({phone_name : {$regex : reg}})
		.then((res)=>{
			allnum=res.length;
			return phoneModel.find({phone_name : {$regex : reg}}).limit(pagesize).skip((target-1)*pagesize)
		})
		.then((data)=>{
			//console.log(data);
			let arr={allnum:allnum,phonelist:data}
			res.send(util.sendData(0,"搜索成功",arr))
		})
		.catch((err)=>{
			//console.log(err);
			res.send(util.sendData(-1,"搜索错误",null))
		})
	}else{//全部查询
		phoneModel.find()
		.then((res)=>{
			allnum=res.length;
			return phoneModel.find().limit(pagesize).skip((target-1)*pagesize)
		})
		.then((data)=>{
			//console.log(data);
			let arr={allnum:allnum,phonelist:data}
			res.send(util.sendData(0,"请求成功",arr))
		})
		.catch((err)=>{
			//console.log(err);
			res.send(util.sendData(-1,"请求错误",null))
		})
	}

})


/**
 * @api {post} /phones/addphone/ insertData
 * @apiName insertData
 * @apiGroup Phone
 *
 * @apiParam {String} phone_name 手机名称
 * @apiParam {String} img 手机图片
 * @apiParam {String} phone_price 手机价格
 * @apiParam {String} phone_type 手机系列类型
 * @apiParam {String} phone_inventory 手机库存
 * 
 * @apiSuccess {String} err Error code
 * @apiSuccess {String} msg  Error message
 */

//添加手机信息接口----------
Router.post('/addphone',(req,res)=>{
	//做个假数据插入测试
//	let insertData={phone_name:'HUAWEI nova 3',img:'images/phone/nova3.jpg',
//					phone_price:'2999.00',phone_type:'HUAWEI nova系列',phone_inventory:'100'}
	let {phone_name,img,phone_price,phone_type,phone_inventory}=req.body;
	
	let insertData={'phone_name':phone_name,'img':img,'phone_price':phone_price,'phone_type':phone_type,'phone_inventory':phone_inventory}
	
	phoneModel.insertMany(insertData)
	.then((data)=>{
		//console.log(data);
		res.send(util.sendData(0,"添加成功",data))
	})
	.catch((err)=>{
		res.send(util.sendData(-1,"添加失败",null))
	})
})


/**
 * @api {post} /phones/deletephone/ deletetData
 * @apiName deletetData
 * @apiGroup Phone
 *
 * @apiParam {String} id 手机id
 * 
 * @apiSuccess {String} err Error code
 * @apiSuccess {String} msg  Error message
 */

//删除商品信息接口--------
Router.post('/deletephone',(req,res)=>{
	//利用商品id
	let id=req.body.id;
	//console.log(id)
	if (!id) {
		res.send(util.sendData(-1,'参数错误',null))
	}
	
	//deleteone()方法是删除单条数据，具体查看mongoos官网文档
	//_id是数据库里面的商品id名
	phoneModel.deleteOne({_id:id})
	.then((data)=>{
		//console.log(data);
		res.send(util.sendData(0,"删除成功",data))
	})
	.catch((err)=>{
		res.send(util.sendData(-1,"删除失败",null))
	})
})


//分类查询商品接口----------------
//Router.post('/SearchByType',(req,res)=>{
//	//利用手机类型
//	let type=req.body.phone_type;
//	//console.log(type);
//	if (!type) {
//		res.send(util.sendData(-1,'参数错误',null))
//	}
//	
//	phoneModel.find({phone_type:type})
//	.then((data)=>{
//		//console.log(data);
//		res.send(util.sendData(0,"查询成功",data))
//	})
//	.catch((err)=>{
//		res.send(util.sendData(-1,"查询失败",null))
//	})
//})


//模糊查询接口----------（根据手机名称模糊查询）
//Router.get('/SearchByKeyword',(req,res)=>{
//	//手机名称
//	let pname=req.body.phone_name;
//	//从URL中传来的 keyword参数
//	let keyword = req.query.keyword; 
//	//console.log(req.query)
//	//console.log(keyword)
//	//i是正则里不区分大小写
//	let reg = new RegExp(keyword, 'i');
//	
//	phoneModel.find({phone_name : {$regex : reg}})
//	.then((data)=>{
//		//console.log(data);
//		res.send(util.sendData(0,"搜索成功",data))
//	})
//	.catch((err)=>{
//		res.send(util.sendData(-1,"搜索失败",null))
//	})
//	
//})


/**
 * @api {post} /phones/getPhoneById/ getPhoneById
 * @apiName getPhoneById
 * @apiGroup Phone
 *
 * @apiParam {String} id 商品id
 * 
 * @apiSuccess {String} err Error code
 * @apiSuccess {String} msg  Error message
 */

//修改商品信息页面，通过id获取商品信息
Router.post('/getPhoneById',(req,res)=>{
	let id=req.body.id;
	
	if (!id) {
		res.send(util.sendData(-1,'参数错误',null))
	}
	
	phoneModel.find({_id:id})
	.then((data)=>{
		//console.log(data);
		res.send(util.sendData(0,"查询成功",data))
	})
	.catch((err)=>{
		res.send(util.sendData(-1,"查询失败",null))
	})
})


/**
 * @api {post} /phones/editorphone/ editorphone
 * @apiName editorphone
 * @apiGroup Phone
 *
 * @apiParam {String} _id 商品id
 * @apiParam {String} phone_name 手机名称
 * @apiParam {String} img 手机图片
 * @apiParam {String} phone_price 手机价格
 * @apiParam {String} phone_type 手机系列类型
 * @apiParam {String} phone_inventory 手机库存
 * 
 * 
 * @apiSuccess {String} err Error code
 * @apiSuccess {String} msg  Error message
 */


//修改商品信息接口
Router.post('/editorphone',(req,res)=>{
	let {_id,phone_name,img,phone_price,phone_type,phone_inventory}=req.body;
	
	let updateinf={'phone_name':phone_name,'img':img,'phone_price':phone_price,'phone_type':phone_type,'phone_inventory':phone_inventory}
	
	phoneModel.updateOne({'_id':_id},{$set:updateinf})
	.then((data)=>{
		console.log(data);
		res.send(util.sendData(0,"修改成功",data))
	})
	.catch((err)=>{
		res.send(util.sendData(-1,"修改失败",null))
	})
})





//抛出模块
module.exports=Router;