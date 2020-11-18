const model = require('../../model')
const commonDao = require('./common')

/* 查询用户列表 */
function list(req, res) {
	const query = commonDao.filterQuery(req.query)
	model.connect((db)=> {
		db.collection('user').find(query.param).limit(query.limit).skip(query.skip).toArray((dbErr, dbRes) => {
			res.send({
				code: 200,
				data: dbRes
			})
		})
	})
}

/* 查询用户数量 */
function countList(req, res) {
	const query = commonDao.filterQuery(req.query)
	model.connect((db)=> {
		db.collection('user').find(query.param).count((dbErr, dbRes) => {
			res.send({
				code: 200,
				data: dbRes
			})
		})
	})
}

/* 新增用户 */
function add(req, res) {
	req.body.uuid = new Date().getTime().toString()
    model.connect(db => {
		db.collection('user').insertOne(req.body, (dbErr, dbRes) => {
		    res.send({
				code: 200,
				data: {},
				msg: '新增成功'
			})
		})
	})
}

/* 修改用户 */
function update(req, res) {
	let paramObj = {}
	for (let key in req.body){
		if (key != '_id') {
			paramObj[key] = req.body[key]
		}
	}
    model.connect(db => {
		db.collection('user').update({uuid: req.body.uuid},{$set: paramObj}, (dbErr, dbRes) => {
		    res.send({
				code: 200,
				data: {},
				msg: '修改成功'
			})
		})
	})
}

/* 删除用户 */
function dele(req, res) {
	model.connect(db => {
		db.collection('user').remove(req.body, (dbErr, dbRes) => { //uuid不存在，会导致全表被删
            res.send({
				code: 200,
				data: {},
				msg: '删除成功'
			})
        })
	})
}

module.exports = {
	list,
	countList,
	add,
	update,
	dele
}
