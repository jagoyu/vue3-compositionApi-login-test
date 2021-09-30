const Mock = require('mockjs')
import { login, getMenu, getUserInfo } from './controller'

// 设置拦截ajax请求相应时间
Mock.setup({
  timeout: '200-600'
})

// Mock.mock('/login', 'post', getToken)
Mock.mock('/login', 'post', login)
Mock.mock('/getMenu', 'post', getMenu)
Mock.mock('/getUserInfo', 'post', getUserInfo)
