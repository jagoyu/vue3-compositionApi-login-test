import { createStore } from 'vuex'
// 数据持久存储 - 默认 locastorage
import createPersistedState from 'vuex-persistedstate'
import { LOG_IN } from '@/utils/constant'
// 数据加密
import SecureLS from 'secure-ls'
const ls = new SecureLS({ isCompression: false })

export default createStore({
  state: {
    userInfo: {
      roleId: '',
      token: '',
      userName: ''
    },
    menuList: '',
    currentMenu: ''
  },
  mutations: {
    setUser(state, userInfo) {
      state.userInfo.roleId = userInfo.roleId
      state.userInfo.token = userInfo.token
      state.userInfo.userName = userInfo.userName
    },
    setMenu(state, menuList) {
      state.menuList = menuList
    },
    setCurrentMenu(state, current) {
      state.currentMenu = current
    },
    logout(state) {
      state.userInfo.roleId = ''
      state.userInfo.token = ''
      state.userInfo.userName = ''
      state.menuList = []
      state.currentMenu = ''
    }
  },
  actions: {
    [LOG_IN]({ commit }, paylod) {
      commit('setUser', {
        roleId: paylod.roleId,
        token: paylod.token,
        userName: paylod.userName
      })
      commit('setMenu', paylod.menuList)
      commit('setCurrentMenu', paylod.currentMenu)
    }
  },
  plugins: [
    createPersistedState({
      key: 'jago-tst',
      paths: ['userInfo', 'menuList', 'currentMenu'],
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key)
      }
    })
  ]
})
