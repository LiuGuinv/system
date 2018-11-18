// 实现发送邮箱功能

'use strict';
// 安装并引入第三方模块nodemailer
const nodemailer = require('nodemailer');

// 创建对象并配置信息
//nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'qq',//邮箱服务商
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "997207868@qq.com", // 默认邮箱
            pass: 'buquaxspbwvfbehg' // smtp 授权码（在自己的邮箱里获取）
        }
    });

    
    function sendmail(mail,msg){
    	return new Promise((resolve,reject)=>{
    		  // 发送的邮件的相关信息
		    let mailOptions = {
		        from: '997207868@qq.com', // 发件人
		        to: mail, // 收件人
		        subject: 'Huawei手机专卖店管理系统邮箱验证码', // 邮件标题
		        text: "亲爱的管理员，您的登录验证码为:"+msg, // 发送的内容
		        //html: '<b>Hello world?</b>' // 邮件内容样式
		    };
    		 transporter.sendMail(mailOptions, (error, info) => {
			    if (error) {
			        reject(error)
			    }
			    resolve('ok')
			})
    	})
    }
//});

//sendmail('997207868@qq.com','456')
module.exports={sendmail};
