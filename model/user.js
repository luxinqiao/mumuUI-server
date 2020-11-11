const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017')

const db = mongoose.connection
db.on('error', console.error.bind(console, '连接错误：'))
db.once('open', (callback) => {
	console.log('MongoDB连接成功！')
})

const userSchema = new mongoose.Schema({
    /* 姓名 */
  	name: String,
  	/* 性别 */
  	sex: Number,
  	/* 年龄 */
  	age: Number,
  	/* 体重（kg） */
	weight: Number,
	/* 生日 */
 	birthday: String,
 	/* 手机号 */
 	phone: Number,
 	/* 头像 */
 	avatar: String,
 	/* 邮箱 */
 	email: String,
 	/* 邮编 */
	post: Number,
	/* 家庭地址 */
	address: String,
	/* 兴趣爱好 0-跑步 1-游泳 2-瑜伽 3-音乐 4-电影 5-旅游 6-美食 7-购物 8-其他 */
	habit: String,
	/* 学历 0-无 1-小学 2-初中 3-高中 4-大专 5-本科 6-硕士 7-博士 */
	education: String,
	/* 毕业院校 */
	school: String,
	/* 专业 */
	major: String,
	/* 公司 */
  	company: String,
  	/* 工种 0-服务业 1-建筑业 2-制造业 3-农业 4-纺织业 5-加工业 6-个体 7-IT */
  	job: Number,
  	/* 年收入（万元） */
  	income: Number,
  	/* 备注 */
  	remark: String
}, {
	collection: 'users'
})

module.exports = mongoose.model('userModel', userSchema)
