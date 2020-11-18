const userDao = require('../dao/user')

/* 查询用户列表 */
function list(req, res) {
	userDao.list(req, res)
}

/* 查询用户数量 */
function countList(req, res) {
	userDao.countList(req, res)
}

/* 新增用户 */
function add(req, res) {
	userDao.add(req, res)
}

/* 修改用户 */
function update(req, res) {
	userDao.update(req, res)
}

/* 删除用户 */
function dele(req, res) {
	userDao.dele(req, res)
}

module.exports = {
	list,
	countList,
	add,
	update,
	dele
}
