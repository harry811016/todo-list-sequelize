// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 準備引入路由模組
const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/user')

router.use('/users', users)
router.use('/todos', todos)
router.use('/', home)
// 匯出路由器
module.exports = router