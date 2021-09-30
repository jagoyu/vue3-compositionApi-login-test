import {
  SET_TOKEN,
  CLEAR_TOKEN,
  SET_MENU_LIST,
  SET_CURRENT_MENU,
  SET_USER
} from '../utils/constant'

export default {
  [SET_TOKEN](state, token) {
    state.token = token
  },
  [CLEAR_TOKEN](state) {
    state.token = ''
  },
  [SET_USER](state, user) {
    state.userInfo.roleId = user.roleId
    state.userInfo.userId = user.userId
    state.userInfo.userName = user.userName
  },
  [SET_MENU_LIST](state, menu) {
    state.menuList = menu
  },
  [SET_CURRENT_MENU](state, current) {
    state.currentMenu = current
  }
}
