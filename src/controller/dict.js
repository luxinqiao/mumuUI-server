const router = require('express').Router()
const dictService = require('../service/dict')

/* 查询字典列表 */
router.get('/list', (req, res)=> {
	dictService.list(req, res)
})

/* 查询字典描述 */
router.get('/desc', (req, res)=> {
	dictService.desc(req, res)
})

module.exports = router
