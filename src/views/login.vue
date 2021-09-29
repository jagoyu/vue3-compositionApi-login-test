<template>
  <div class="login-wrap">
    <el-form :model="form" label-width="80px" label-position="right">
      <el-form-item>
        <span class="title">用户管理系统</span>
      </el-form-item>
      <el-form-item label="用户名：">
        <el-input v-model="form.userName" type="text" />
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="form.password" type="text" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="onSubmit"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { loginApi } from '@/api'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getCurrentMenu } from '@/utils'
import { LOG_IN } from '@/utils/constant'

const form = reactive({
  userName: '',
  password: ''
})
const router = useRouter()
const store = useStore()

async function onSubmit() {
  const { userName, password } = form
  const { message, code, data } = await loginApi.login({
    userName,
    password
  })
  if (code === 0) {
    const currentMenu = getCurrentMenu(data.menuList)
    let cPath = `/${currentMenu}`
    store.dispatch(LOG_IN, { ...data, currentMenu })
    router.push(cPath)
  } else {
    ElMessage.error(message)
  }
}
</script>

<style lang="scss" scoped>
.login-wrap {
  width: 400px;
  border: 1px solid pink;
  padding: 30px 30px 10px 20px;
  margin: 200px auto;
  .title {
    color: rgb(116, 156, 231);
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
