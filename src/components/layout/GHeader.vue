<template>
  <div class="g-header">
    <el-icon :size="30" color="blue">
      <bicycle />
    </el-icon>
    <div class="right">
      <span>欢迎您，jago</span>
      <el-button type="text" @click="logout">退出登录</el-button>
    </div>
  </div>
</template>
<script setup>
import { Bicycle } from '@element-plus/icons'
import { useRouter } from 'vue-router'
const router = useRouter()
function logout() {
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
