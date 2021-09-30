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
import { SET_MEMU_ASYNC } from '../../utils/constant'
const store = useStore()
const token = computed(() => store.state.token)

store.dispatch(SET_MEMU_ASYNC, token.value)
const menuList = computed(() => store.state.menuList)
const currentMenu = computed(() => store.state.currentMenu)
</script>
