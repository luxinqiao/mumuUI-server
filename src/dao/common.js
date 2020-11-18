/* 过滤用户查询条件 */
function filterQuery (query) {
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

module.exports = {
	filterQuery
}
