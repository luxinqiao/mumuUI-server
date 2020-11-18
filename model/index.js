const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

/*
	数据库连接方法
	@param {function} callback 回调函数
	@return 
*/
function connect(callback) {
	MongoClient.connect(url, function(err, client) {
		if (err) {
			console.log('数据库连接错误')
		} else {
			const db = client.db()
			callback && callback(db)
			client.close()
		}
	})
}

module.exports = {
	connect
}