<template>
  <el-sub-menu
    v-if="props.item.children"
    :key="props.item.key"
    :index="props.item.key"
  >
    <template #title>
      <i :class="`iconfont icon-${props.item.icon}`"></i>
      <span>{{ props.item.name }}</span>
    </template>
    <template v-for="i in props.item.children" :key="i.key">
      <MenuItem :item="i"></MenuItem>
    </template>
  </el-sub-menu>
  <el-menu-item v-else :index="props.item.key" :key="props.item.key">
    <i :class="`iconfont icon-${props.item.icon}`"></i>
    <span>{{ props.item.name }}</span>
  </el-menu-item>
</template>
<script>
export default {
  name: 'MenuItem'
}
</script>
<script setup>
// .eslintrc globals需配置 defineProps:true,否则显示未定义错误提示
const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
</script>
