// 根据菜单生成路由
// export function generateRoute(menuList, arr = []) {
//   for (let i = 0; i < menuList.length; i++) {
//     const item = menuList[i]
//     if (item.path) {
//       const truePath = `@/views${item.path}`
//       arr.push({
//         name: item.key,
//         path: item.key,
//         component: () => import(truePath)
//       })
//     } else {
//       arr = generateRoute(item.children, arr)
//     }
//   }
//   return arr
// }
