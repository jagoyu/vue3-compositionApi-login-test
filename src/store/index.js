import { createStore } from 'vuex'
export default createStore({
  state: {
    roleId: '',
    menuList: '',
    currentMenu: ''
  },
  mutations: {
    setUser(state, roleId) {
      state.roleId = roleId
    },
    setMenu(state, menuList) {
      state.menuList = menuList
    },
    setCurrentMenu(state, current) {
      state.currentMenu = current
    }
  }
})
