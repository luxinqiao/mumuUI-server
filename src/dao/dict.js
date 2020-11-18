const model = require('../../model')

/* 查询字典列表 */
function list(req, res) {
	model.connect((db)=> {
		db.collection('dict').find(req.query).toArray((dbErr, dbRes) => {
			res.send({
				code: 200,
				data: dbRes
			})
		})
	})
}

/* 查询字典描述 */
function desc(req, res) {
	model.connect((db)=> {
		db.collection('dict').find(req.query).toArray((dbErr, dbRes) => {
			res.send({
				code: 200,
				data: dbRes[0].desc
			})
		})
	})
}

module.exports = {
	list,
	desc
}
