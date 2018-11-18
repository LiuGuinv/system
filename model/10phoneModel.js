//将schema对象变成model

const mongoose=require('mongoose');
// schema对象	有几个集合（表）就有几个schema对象
// 创建schema对象
let Schema = mongoose.Schema;
// 下面是创建一个手机信息的集合
// 实例化Schema对象
let phoneSchema=new Schema({
	phone_name:{type:String,required:true},
	img:{type:String,required:true},
	phone_price:{type:Number,required:true},
	phone_type:{type:String,required:true},
	phone_inventory:{type:Number,required:true},
// type 字段类型  required 是否必须
})

// 变成数据模型
// 参数1  集合名字（创建后集合名变成复数）  参数2是 schema对象 将schema对象变成model
let phonemodel=mongoose.model('phoneinf',phoneSchema);

//抛出模型
module.exports=phonemodel;

//{phone_name:'HUAWEI nova 3',
//img:'images/phone/nova3.jpg',phone_price:'2999.00',
//phone_type:'HUAWEI nova系列',phone_inventory:'100'}