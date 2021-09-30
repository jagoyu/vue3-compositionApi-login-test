import { post, get } from './service'

export const loginApi = {
  login: post('/login'),
  getMenu: post('/getMenu'),
  getUserInfo: post('/getUserInfo')
}
