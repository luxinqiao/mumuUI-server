const dictDao = require('../dao/dict')

/* 查询字典列表 */
function list(req, res) {
	dictDao.list(req, res)
}

/* 查询字典描述 */
function desc(req, res) {
	dictDao.desc(req, res)
}

module.exports = {
	list,
	desc
}
