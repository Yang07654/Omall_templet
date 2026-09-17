# OMALL 系统页面清单

## 可用页面模板

| 页面名称 | 模板文件 | 说明 |
| -------- | -------- | ---- |
| 商品列表 | product-list.html | 商品列表查询页，包含查询区域、操作按钮、表格区域 |
| 商品详情 | product-detail.html | 商品详情编辑页，包含详情内容区域、底部操作栏 |

## 页面路由

- `/product-list` → `product-list.html`
- `/product-detail` → `product-detail.html`

## 共享组件

所有页面共享以下组件（位于 `../../shared/`）：

- `header.html` - 顶部导航栏
- `sidebar.html` - 左侧菜单
- `styles.css` - 全局样式
- `icons.svg` - 图标资源

## 使用方式

1. 根据用户关键词匹配本页面清单
2. 基于匹配模板 + 共享组件生成原型
3. 输出单个可直接打开的 HTML 文件
