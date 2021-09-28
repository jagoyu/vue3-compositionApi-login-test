<template>
  <el-container class="global-o-container">
    <el-aside class="gl-aside">
      <GAside />
    </el-aside>
    <el-container class="gl-wrap">
      <el-header class="gl-header">
        <GHeader />
      </el-header>
      <el-main class="gl-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import GAside from './GAside.vue'
import GHeader from './GHeader.vue'
</script>
<style lang="scss" scoped>
.global-o-container {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  .gl-aside {
    width: 200px;
    height: 100%;
    background-color: #e4e7ed;
  }
  .gl-wrap {
    .gl-header {
      height: 80px;
      background-color: #f2f6fc;
    }
  }
}
</style>
