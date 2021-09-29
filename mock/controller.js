import { user, menu } from './user'

export function getToken(req) {
  const request = JSON.parse(req.body)

  const findUser = user.find((item) => item.name === request.userName)
  if (!findUser || findUser.password !== request.password) {
    return {
      code: 100,
      message: '用户名或密码错误'
    }
  } else {
    const findMenu = menu.find((item) => item.roleId === findUser.roleId)
    return {
      code: 0,
      message: '',
      data: {
        uid: findUser.uid,
        roleId: findUser.roleId,
        userName: findUser.name,
        token: 'token',
        menuList: findMenu.menuList
      }
    }
  }
}
