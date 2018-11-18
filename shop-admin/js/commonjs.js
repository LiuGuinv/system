var rootpath='http://127.0.0.1:8000';


//通过localStorage获取id
var storage=window.localStorage;
id = storage.getItem('user_id');//从登录页面传过来的id
//console.log(id);

$.ajax({
	type:"post",
	url:rootpath+"/api/user/getUserById",
	async:true,
	data:{
		id:id
	},
	success:function(res){
		//console.log(res.data)
		//console.log(res.data[0].nickname);
		let us=res.data[0].nickname;
		$('.admin_icon').html(us);
		$('.rt_nav li').eq(2).children().css({'font-weight':'600','color':'black'})
	}
});

