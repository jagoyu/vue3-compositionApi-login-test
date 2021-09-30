/**
 * 模拟数据库
 * --user 用户数据
 * --menu 菜单数据
 */

// roleId 0-管理员 1-一般用户
export const user = [
  {
    uid: 0,
    roleId: 0,
    name: 'jagoyu',
    password: '111',
    token: 'fjdkfjdfdhfgvyyegx'
  },
  {
    uid: 1,
    roleId: 0,
    name: 'admin',
    password: '123',
    token: 'kdfjjfuhug1fbbbgb'
  },
  {
    uid: 2,
    roleId: 1,
    name: 'zzz',
    password: 'zzz',
    token: 'kdfjkdkfhh1lkpoojp1b'
  },
  {
    uid: 3,
    roleId: 1,
    name: 'jjj',
    password: 'jjj',
    token: 'djffhh1jpdfhgujfjkdfjkjdfjkgdg1'
  }
]

export const menu = [
  {
    roleId: 0,
    menuList: [
      {
        key: 'workbench',
        icon: 'gongzuotai',
        name: '工作台',
        path: '/workbench'
      },
      {
        key: 'product',
        icon: 'shangpin',
        name: '商品',
        children: [
          {
            key: 'productDetail',
            icon: 'shangpinxiangqing',
            name: '商品详情',
            path: '/product/detail'
          },
          {
            key: 'productList',
            icon: 'shangpinliebiao',
            name: '商品列表',
            path: '/product/list'
          }
        ]
      },
      {
        key: 'set',
        icon: 'xitongshezhi',
        name: '系统设置',
        path: '/product/set'
      }
    ]
  },
  {
    roleId: 1,
    menuList: [
      {
        key: 'product',
        icon: 'shangpin',
        name: '商品',
        children: [
          {
            key: 'productDetail',
            icon: 'shangpinxiangqing',
            name: '商品详情',
            path: '/product/detail'
          },
          {
            key: 'productList',
            icon: 'shangpinliebiao',
            name: '商品列表',
            path: '/product/list'
          }
        ]
      },
      {
        key: 'set',
        icon: 'xitongshezhi',
        name: '系统设置',
        path: 'set'
      }
    ]
  }
]
