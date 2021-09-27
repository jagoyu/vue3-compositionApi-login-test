import { user } from './user'

export function getToken(req) {
  const request = JSON.parse(req.body)

  const findUser = user.find((item) => item.name === request.userName)
  if (!findUser || findUser.password !== request.password) {
    return {
      code: 100,
      message: '用户名或密码错误'
    }
  } else {
    return {
      code: 0,
      message: '',
      data: {
        uid: 1,
        roleId: 0,
        token: 'token'
      }
    }
  }
}
