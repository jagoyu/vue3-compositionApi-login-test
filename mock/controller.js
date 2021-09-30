import { user, menu } from './data'
import { getCurrentMenu } from '../src/utils'

// 登录接口
export function login(req) {
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
      token: findUser.token
    }
  }
}

// 菜单接口
export function getMenu(request) {
  const req = JSON.parse(request.body)
  if (!req.token) {
    return {
      code: 401,
      message: '登录失效，请重新登录！'
    }
  }
  const findUser = user.find((item) => item.token === req.token)
  const findMenu = menu.find((item) => item.roleId === findUser.roleId)
  const { menuList } = findMenu
  const currentMenu = getCurrentMenu(menuList)
  return {
    code: 0,
    message: '',
    data: {
      menuList,
      currentMenu
    }
  }
}

// 获取用户信息
export function getUserInfo(request) {
  const req = JSON.parse(request.body)
  if (!req.token) {
    return {
      code: 401,
      message: '登录失效，请重新登录！'
    }
  }
  const findUser = user.find((item) => item.token === req.token)
  return {
    code: 0,
    message: '',
    data: {
      roleId: findUser.roleId,
      userName: findUser.name,
      userId: findUser.uid
    }
  }
}
