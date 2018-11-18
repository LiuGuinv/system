//创建路由模块
const express=require('express');
const Router=express.Router();
// 引入第三方模块
const multer=require('multer');
let upload = multer({ dest: 'uploads/' })//设置图片保存的临时路径uploads/
// 文件操作用到的第三方模块
const fs=require('fs');
const path=require('path');


/**
 * @api {post} /upload/img/ upload
 * @apiName Uploadimg
 * @apiGroup upload
 *
 * @apiParam {String} test monofile-formdata
 *
 * @apiSuccess {String} err Error code
 * @apiSuccess {String} msg  Error message
 * @apiSuccess {String} path  The server path for the image
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       err:0,
 *		msg:'上传成功',
 *		path:'img/1540902734665.jpeg'
 *     }
 */

//使用路由
Router.post('/img',upload.single('test'),(req,res)=>{//single()表示单文件上传
	console.log(req.file)
	// 读取文件
	fs.readFile(req.file.path,(err,data)=>{
		if (err) {
			return res.send('上传错误')
		}
		// 写入文件
		let filename=new Date().getTime()+parseInt(Math.random(0,1)*1000)+"."+req.file.mimetype.split('/')[1];
		console.log(filename);//1540881392868.jpeg
		fs.writeFile(path.join(__dirname,'../shop-admin/images/phone',filename),data,(err)=>{
			if (err) {
				return res.send('上传错误')
			}
			//上传成功
			let array={
				err:0,
				msg:'上传成功',
				path:'/images/phone/'+filename
			}
			res.send(array);
			//上传成功后拿到的信息{err: 0, msg: "上传成功", path: "img/1540882020146.jpeg"}
		});
	})
})

//抛出模块
module.exports=Router;


