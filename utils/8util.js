//这个模块是为了构建返回数据(发送邮箱验证码时用到)
function sendData(err,msg,data){
//	let data=null || data;
	return{
		err:err,
		msg:msg,
		data:data
	}
}

module.exports={sendData}
