const router = require('express').Router()

router.get('/', function(req, res, next) {
	res.render('page/api/index', {})
})
router.get('/demo', function(req, res, next) {
	res.render('page/api/demo', {})
})

module.exports = router
