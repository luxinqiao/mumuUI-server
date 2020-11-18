const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

//支持跨域
let cors = require('cors')
app.use(cors ({
	"origin": "*",
	"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
	"preflightContinue": false,
	"optionsSuccessStatus": 200
}))

//创建路由
const routes =  require('./route')
for (let i=0; i<routes.length; i++) {
	app.use(routes[i].path, routes[i].content)
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
 	next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
 	// set locals, only providing error in development
 	res.locals.message = err.message
 	res.locals.error = req.app.get('env') === 'development' ? err : {}

 	// render the error page
 	res.status(err.status || 500)
 	res.render('error')
})

module.exports = app
