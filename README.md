# Omall 原型模板

>Omall 后台管理系统原型页面模板，供产品经理快速绘制原型使用。

## 页面清单

| 页面 | 模板路径 | 独立预览 |
| ---- | -------- | -------- |
| 商品列表 | `systems/omall/product-list.html` | `product-list.html` |
| 商品详情 | `systems/omall/product-detail.html` | `product-detail.html` |

## 快速开始

1. 克隆仓库：`git clone https://github.com/Yang07654/Omall_templet.git`
2. 直接在浏览器打开 `product-list.html` 或 `product-detail.html` 预览效果
3. 基于 `systems/omall/` 中的模板文件进行扩展开发

## 目录结构

```
Omall_templet/
├── systems/
│   └── omall/
│       ├── AGENTS.md              # 页面清单与路由说明
│       ├── product-list.html      # 商品列表模板
│       └── product-detail.html    # 商品详情模板
├── shared/
│   └── styles.css                 # 共享样式
├── product-list.html              # 独立预览版（含内联样式）
├── product-detail.html            # 独立预览版（含内联样式）
└── README.md
```

## 使用方式

### 方式一：直接预览

打开根目录的 `product-list.html` 或 `product-detail.html`，可直接在浏览器中查看效果。

### 方式二：基于模板开发

1. 参考 `systems/omall/AGENTS.md` 了解页面路由规则
2. 基于 `systems/omall/` 中的模板文件，替换业务内容
3. 共享样式引用 `../../shared/styles.css`

## 页面路由

- `/product-list` → `product-list.html`
- `/product-detail` → `product-detail.html`

## 注意事项

- 模板中的业务数据均为示例文本，可直接替换
- 保持原有布局结构不变，仅替换内容
- 图标使用 SVG 矢量图标，可根据需要替换
