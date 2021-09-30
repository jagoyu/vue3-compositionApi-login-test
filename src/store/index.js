import { createStore } from 'vuex'
// 数据持久存储 - 默认 locastorage
import createPersistedState from 'vuex-persistedstate'
// 数据加密
import SecureLS from 'secure-ls'
const ls = new SecureLS({ isCompression: false })
import state from './state'
import mutations from './mutations.js'
import actions from './actions'

export default createStore({
  state,
  mutations,
  actions,
  plugins: [
    createPersistedState({
      key: 'jago-test',
      paths: ['token', 'userInfo', 'menuList', 'currentMenu'],
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key)
      }
    })
  ]
})
