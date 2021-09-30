<template>
  <div class="g-header">
    <el-icon :size="30" color="blue">
      <bicycle />
    </el-icon>
    <div class="right">
      <span>欢迎您，{{ userName }}</span>
      <el-button type="text" @click="logout">退出登录</el-button>
    </div>
  </div>
</template>
<script setup>
import { Bicycle } from '@element-plus/icons'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { CLEAR_TOKEN, SET_USER_ASYNC } from '../../utils/constant'
const router = useRouter()
const store = useStore()
const token = computed(() => store.state.token)
store.dispatch(SET_USER_ASYNC, token.value)
const userName = computed(() => store.state.userInfo.userName)

function logout() {
  store.commit(CLEAR_TOKEN)
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.g-header {
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .right {
    span {
      margin-right: 10px;
    }
  }
}
</style>
