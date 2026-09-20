# OMALL 菜单结构说明

## 菜单层级关系

本系统采用**三级联动菜单**结构，部分菜单有第四级子菜单。

### 一级菜单（7个）

| 序号 | 菜单名称 | 图标 | 直属子菜单数 |
|------|----------|------|--------------|
| 1 | IT云 | iconshouye-2 | 10 |
| 2 | 商品 | icon-shangpin | 4 |
| 3 | 营销 | icon-yingxiao | 7 |
| 4 | 订单 | icon-dingdan1 | 2 |
| 5 | 用户 | icon-yonghu1 | 3 |
| 6 | 内容 | icon-neirong | 7 |
| 7 | 数据统计 | icon-control | 1 |

---

## 二级菜单详情

### 1. IT云

| 二级菜单 | 图标 | 三级菜单数 |
|----------|------|------------|
| 首页 | icon-home | - |
| 行为分析 | icon-yingxiao | 1 |
| 基础设置 | icon-shop | 7 |
| 消息管理 | icon-wrench-fill | 8 |
| 风控管理 | icon-radarchart | 4 |
| 下载中心 | icon-OMS-hedanguize | 1 |
| 系统设置 | icon-OMS-wuliuxitong | 9 |
| App配置 | - | 2 |
| 日志 | icona-ziyuan4 | 3 |
| 短链 | - | 1 |

### 2. 商品

| 二级菜单 | 图标 | 三级菜单数 |
|----------|------|------------|
| 商品管理 | icon-gold | 6 |
| 商品基础设置 | icona-ziyuan11 | 10 |
| 商品营销 | iconjihuajianli | 10 |
| 定制化 | icon-CodeSandbox | 3 |

### 3. 营销

| 二级菜单 | 图标 | 三级菜单数 |
|----------|------|------------|
| 打折促销 | icon-YUAN | 5 |
| 教官管理 | icon-appstore | 4 |
| 互动营销 | icon-flag | 18 |
| 营销设置 | iconshouye-2 | 5 |
| 红人推广 | icon-team | 14 |
| 分销管理 | icon-barchart | 5 |
| 预型问卷 | icon-diff-fill | 2 |

### 4. 订单

| 二级菜单 | 图标 | 三级菜单数 |
|----------|------|------------|
| 订单管理 | icon-gateway | 3 |
| 召回管理 | icon-OPS-fendouzheshenbao | 2 |

### 5. 用户

| 二级菜单 | 图标 | 三级菜单数 |
|----------|------|------------|
| 用户管理 | icon-OMS-churukumingxi | 3 |
| 用户运营 | icon-user | 10 |
| 专区设置 | icon-shouye-jichushuju | 2 |

### 6. 内容

| 二级菜单 | 图标 | 三级菜单数 |
|----------|------|------------|
| 页面设置 | icon-laptop | 10 |
| Blog | icon-OMS-dingdanzhongxin | 4 |
| 社区 | icon-shouye-xitongshezhi | 3 |
| 经销商门店 | icon-OMS-kucunzhongxin | 1 |
| SEO设置 | icon-earth | 8 |
| 文章内容 | iconweibiaoti2fuzhi07 | 9 |
| CRM内容 | icontongzhi | 1 |

### 7. 数据统计

| 二级菜单 | 图标 | 三级菜单数 |
|----------|------|------------|
| 数据统计 | icon-control | 2 |

---

## 三级菜单示例（商品 > 商品管理）

| 三级菜单 | 图标 | 路由 |
|----------|------|------|
| 基础商品库 | icon-qinghua-xinxizhongxin | sys/commodity/basicLibrary |
| 商品列表 | icon-check-circle | sys/commodity/list |
| 官网商品列表 | icon-OMS-bumenyusuanguanli | sys/commodity/officialList |
| 物料库存列表 | icon-dingdan | sys/commodity/materialInventoryList |
| 商品同步日志 | icon-read | sys/commodity/asyncLog |
| 客户 SKU | icon-OMS-yuanshiliushuiguanli | sys/commodity/customerSku |

---

## 四级菜单示例（IT云 > 基础设置 > 全局设置）

| 四级菜单 | 图标 | 路由 |
|----------|------|------|
| 系统参数 | icon-OPS-zhangonghuizong | sys/parameter |
| 订阅设置 | icon-shouye-jichushuju | sys/emailSubscribe |
| 角标配置 | icon-down-square | sys/cornerMarkConfig |
| 社媒平台 | icon-disconnect | sys/socialMedia |
| 第三方平台 | icon-share | sys/sharePlatform |
| 信用卡多渠道配置 | iconjintuikuan | sys/diversion |

---

## 使用说明

1. **菜单联动**：点击一级菜单展开对应的二级菜单，点击二级菜单展开三级菜单
2. **路由跳转**：每个叶子节点菜单都有对应的路由地址，点击后跳转到对应页面
3. **图标系统**：所有菜单项都配置了 icon 字段，用于前端渲染菜单图标
4. **折叠功能**：三级菜单可能包含四级子菜单，支持折叠/展开交互

## 数据文件

完整的菜单树结构数据请查看 [menu-tree.json](./menu-tree.json) 文件。
