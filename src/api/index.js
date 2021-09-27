import { post, get } from './service'

export const testGet = get()
export const loginApi = {
  login: post('/login')
}
