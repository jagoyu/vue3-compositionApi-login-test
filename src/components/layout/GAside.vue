<template>
  <el-menu
    text-color="#303133"
    active-text-color="#409EFF"
    :default-active="currentMenu"
    :default-openeds="[currentMenu]"
    router
  >
    <template v-for="item in menuList" :key="item.key">
      <MenuItem :item="item"></MenuItem>
    </template>
  </el-menu>
</template>

<script setup>
import MenuItem from './MenuItem'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const menuList = computed(() => store.state.menuList)
const currentMenu = computed(() => store.state.currentMenu)
</script>
