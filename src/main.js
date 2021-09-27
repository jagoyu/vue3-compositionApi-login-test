import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/normalize.css'
// 单独为el-message引入样式
import 'element-plus/theme-chalk/el-message.css'
require('../mock')

createApp(App).use(store).use(router).mount('#app')
