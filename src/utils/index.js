// 获取当前菜单
export function getCurrentMenu(path) {
  for (let i = 0; i < path.length; i++) {
    if (!path[i].children) {
      return path[i].key
    } else {
      return getCurrentMenu(path[i].children)
    }
  }
}
