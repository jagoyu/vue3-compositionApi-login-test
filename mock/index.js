const Mock = require('mockjs')
import { getToken } from './controller'

// 设置拦截ajax请求相应时间
Mock.setup({
  timeout: '200-600'
})

Mock.mock('/login', 'post', getToken)
