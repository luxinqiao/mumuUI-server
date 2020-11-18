module.exports = [{
    path: '/api', content: require('../views/route/api')
}, {
    path: '/user', content: require('../src/controller/user')
}, {
    path: '/dict', content: require('../src/controller/dict')
}]
