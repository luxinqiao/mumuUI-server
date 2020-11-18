const router = require('express').Router()
const userService = require('../service/user')

/* 查询用户列表 */
router.get('/list', (req, res)=> {
	userService.list(req, res)
})

/* 查询用户数量 */
router.get('/countList', (req, res)=> {
	userService.countList(req, res)
})

/* 新增用户 */
router.post('/add', (req, res) => {
	userService.add(req, res)
})

/* 修改用户 */
router.post('/update', (req, res) => {
	userService.update(req, res)
})

/* 删除用户 */
router.post('/delete', (req, res) => {
	userService.dele(req, res)
})

module.exports = router
