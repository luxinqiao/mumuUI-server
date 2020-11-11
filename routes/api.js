var router = require('express').Router()
var model = require('../model')

//渲染api页
router.get('/', function(req, res, next) {
	res.render('api/index', {})
})
router.get('/demo', function(req, res, next) {
	res.render('api/demo', {})
})

module.exports = router
