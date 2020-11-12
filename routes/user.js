var router = require('express').Router()
var model = require('../model')

/* 查询用户列表 */
router.get('/list', (req, res, next)=> {
	const query = filterQuery(req.query)
	model.connect((db)=> {
		db.collection('user').find(query.param).limit(query.limit).skip(query.skip).toArray((dbErr, dbRes) => {
			res.send({
				code: 200,
				data: dbRes
			})
		})
	})
})

/* 查询用户数量 */
router.get('/countList', (req, res, next)=> {
	const query = filterQuery(req.query)
	model.connect((db)=> {
		db.collection('user').find(query.param).count((dbErr, dbRes) => {
			res.send({
				code: 200,
				data: dbRes
			})
		})
	})
})

/* 新增用户 */
router.post('/add', (req, res) => {
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
})

/* 修改用户 */
router.post('/update', (req, res) => {
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
})

/* 删除用户 */
router.post('/delete', (req, res) => {
    model.connect(db => {
		db.collection('user').remove(req.body, (dbErr, dbRes) => { //uuid不存在，会导致全表被删
            res.send({
				code: 200,
				data: {},
				msg: '删除成功'
			})
        })
	})
})

/* 过滤用户查询条件 */
const filterQuery = (query)=> {
	let param = {}, limit = 0, skip = 0
	for (let key in query) {
		const value = query[key]
		if (key == 'pageSize') {
			limit = parseInt(value)
			continue
		}
		if (key == 'pageNo') {
			skip = (parseInt(value) - 1) * limit
			continue
		}
		if (value != '') { //TODO 模糊查询未兼容，临时剔除空值的参数
			param[key] = value
		}
	}
	return {
		limit: limit,
		skip: skip,
		param: param
	}
}

module.exports = router
