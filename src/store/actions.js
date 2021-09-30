import {
  LOG_IN,
  SET_TOKEN,
  SET_MEMU_ASYNC,
  SET_MENU_LIST,
  SET_CURRENT_MENU,
  SET_USER_ASYNC,
  SET_USER
} from '../utils/constant'
import router from '../router'
import { loginApi } from '../api'

export default {
  async [LOG_IN]({ commit, dispatch }, token) {
    commit(SET_TOKEN, token)
    await dispatch(SET_MEMU_ASYNC, token)
    await dispatch(SET_USER_ASYNC, token)
    router.push('/workbench')
  },
  async [SET_MEMU_ASYNC]({ commit }, token) {
    const { code, data, message } = await loginApi.getMenu({ token })
    if (code === 0) {
      const { menuList, currentMenu } = data
      commit(SET_MENU_LIST, menuList)
      commit(SET_CURRENT_MENU, currentMenu)
    } else {
      console.log(message)
    }
  },
  async [SET_USER_ASYNC]({ commit }, token) {
    const { code, data, message } = await loginApi.getUserInfo({ token })
    if (code === 0) {
      commit(SET_USER, data)
    } else {
      console.log(message)
    }
  }
}
