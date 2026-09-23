// OMS 系统三级联动交互脚本（基于真实系统基准数据）
const systemMenus = {
  "设置": [
    "首页",
    "基础数据",
    "权限管理",
    "系统设置",
    "下载中心",
    "日志管理",
    "行为分析",
    "配置中心"
  ],
  "OMS": [
    "OSHIPPING",
    "订单中心",
    "物流中心",
    "库存中心",
    "商品",
    "财务中心",
    "亚马逊站内信",
    "广告中心",
    "营销中心"
  ],
  "OIM": [
    "供应商管理系统(SRM)",
    "仓库管理系统(WMS)",
    "质量管理系统(QMS)",
    "制造执行系统(MES)",
    "CNC-MES",
    "SMT-MES",
    "红点-MES",
    "液锻厂-MES",
    "下线页面"
  ],
  "OPS": [
    "奋斗者系统",
    "战功系统",
    "问责系统",
    "点餐系统",
    "傲运会系统",
    "战略管理系统",
    "服务评优",
    "工单系统",
    "项目奖惩记录",
    "OPCC"
  ],
  "OMALL": [
    "olight.com",
    "olight.com后台",
    "olight APP (Apple)",
    "olight APP (Android)",
    "osight.com",
    "osight.com后台",
    "olight.cn",
    "olight.cn后台",
    "SEO管理系统"
  ],
  "ORM": [
    "门店APP",
    "门店后台",
    "OlightB2B商城",
    "OlightB2B商城后台",
    "OsightB2B商城",
    "OsightB2B商城后台"
  ],
  "OBD": [
    "报表中心",
    "VOC管理系统"
  ]
};

const systemInfos = {
  "设置": {
    title: "系统管理",
    desc: "云中台基础设置、权限配置等"
  },
  "OMS": {
    title: "OMS 运营管理",
    desc: "订单、库存、营销与履约中心"
  },
  "OIM": {
    title: "OIM 协同管理",
    desc: "生产制造与敏捷交付系统"
  },
  "OPS": {
    title: "OPS 组织运营",
    desc: "组织战功与服务评价中心"
  },
  "OMALL": {
    title: "OMALL 官方商城",
    desc: "多端自营商城与前端触点"
  },
  "ORM": {
    title: "ORM 渠道门店",
    desc: "门店应用与B2B分销平台"
  },
  "OBD": {
    title: "OBD 商业数据",
    desc: "数据报表与用户洞察系统"
  }
};

const subMenus = {
  // 设置
  "首页": ["工作台首页"],
  "基础数据": ["利润中心", "角标模板", "损益主数据", "人工固费&VAT税率", "尾程/关税税率", "立库清单", "季节性指数", "市场活动级别", "引流品价值指数", "oMall店铺配置", "新品报表", "物料折扣明细", "物料销量"],
  "权限管理": ["用户列表", "角色管理", "权限菜单", "组织架构", "岗位管理"],
  "系统设置": ["系统参数", "通知配置", "安全策略", "任务调度", "存储配置"],
  "下载中心": ["下载任务", "文件导出记录", "报表下载", "历史归档"],
  "日志管理": ["登录日志", "操作日志", "系统异常日志", "接口审计"],
  "行为分析": ["页面访问报告"],
  "配置中心": ["应用配置", "环境配置", "服务注册", "配置发布历史"],

  // OMS
  "OSHIPPING": ["发货计划", "承运商管理", "运费模板", "面单管理", "物流轨迹跟踪", "配送时效分析"],
  "订单中心": ["全部订单", "待发货订单", "已发货订单", "退款/售后单", "异常订单监控", "手工建单", "批量发货"],
  "物流中心": ["物流包裹", "仓储调拨", "出入库单", "揽收批次", "清关管理", "快递对账"],
  "库存中心": ["实时库存", "可用库存", "安全库存预警", "库存调整单", "盘点任务", "物料占用明细"],
  "商品": ["商品管理", "商品基础设置"],
  "财务中心": ["销售结算", "应收对账", "渠道流水", "开票管理", "退款结算", "利润报表"],
  "亚马逊站内信": ["消息收件箱", "待回复邮件", "快捷模版", "已发送邮件", "评价提醒", "违规预警"],
  "广告中心": ["广告活动列表", "关键词投放", "广告表现报表", "预算分配", "竞价策略", "搜索词分析"],
  "营销中心": ["AI知识库", "基础数据", "活动损益", "活动策略", "营销方案", "活动项目管理"],

  // 营销中心下各折叠大类
  "AI知识库": ["广告费用业务数据", "产品物料预测销量数据", "商城用户数据", "加权日销明细", "商品业务数据", "物料文档", "产品物料主数据", "产品物料业务数据", "试销分数", "文本规则配置", "图片规则配置", "页面规则配置"],
  "活动损益": ["损益模型", "店铺物料机型配置", "店铺损益配置", "损益列表", "损益产品", "历史综合折扣率(每月)", "历史综合折扣率(活动)", "销售预测准确率", "损益结果"],
  "活动策略": ["营销组件库", "方案策略列表"],
  "营销方案": ["活动时间一览表", "项目类型列表", "营销方案列表", "营销选品库存销量一...", "日常活动列表", "营销活动复核", "集团主题活动", "引流物料管理", "引流物料复核", "群发邮件记录", "团队目标"],
  "活动项目管理": ["活动项目列表", "活动项目监控表", "活动项目模板"]
};

const marketingSections = [
  { key: "AI知识库", icon: "icons/side_ai.png" },
  { key: "基础数据", icon: "icons/side_base.png" },
  { key: "活动损益", icon: "icons/side_profit.png" },
  { key: "活动策略", icon: "icons/side_strategy.png" },
  { key: "营销方案", icon: "icons/side_plan.png" },
  { key: "活动项目管理", icon: "icons/side_project.png" }
];

const iconMap = {
  // 设置二级菜单真实切片图标
  "首页": "icons/l2_home.png",
  "基础数据": "icons/l2_base.png",
  "权限管理": "icons/l2_auth.png",
  "系统设置": "icons/l2_setting.png",
  "下载中心": "icons/l2_download.png",
  "日志管理": "icons/l2_log.png",
  "行为分析": "icons/l2_behavior.png",
  "配置中心": "icons/l2_config.png",

  // OMS
  "OSHIPPING": "icons/side_plan.png",
  "订单中心": "icons/side_profit.png",
  "物流中心": "icons/side_plan.png",
  "库存中心": "icons/side_base.png",
  "商品": "icons/side_project.png",
  "财务中心": "icons/side_profit.png",
  "亚马逊站内信": "icons/side_ai.png",
  "广告中心": "icons/side_strategy.png",
  "营销中心": "icons/side_plan.png",

  // 侧边栏
  "AI知识库": "icons/side_ai.png",
  "活动损益": "icons/side_profit.png",
  "活动策略": "icons/side_strategy.png",
  "营销方案": "icons/side_plan.png",
  "活动项目管理": "icons/side_project.png"
};

const panel = document.getElementById("menuPanel");
const mask = document.getElementById("menuMask");
const sideTitleText = document.getElementById("sideTitleText");
const sideMenuList = document.getElementById("sideMenuList");
const tabTitle = document.getElementById("tabTitle");
const omsRootMenu = typeof omsMenuTree !== "undefined" ? omsMenuTree : null;

function setSideTitle(title, subtitle) {
  if (!sideTitleText) return;
  sideTitleText.textContent = title;
}

function bindSubMenuClicks() {
  document.querySelectorAll(".side-menu li.sub").forEach(li => {
    li.onclick = function(e) {
      e.stopPropagation();
      document.querySelectorAll(".side-menu li.sub").forEach(x => x.classList.remove("active"));
      li.classList.add("active");
      const titleSpan = li.querySelector(".menu-text");
      const title = titleSpan ? titleSpan.textContent.trim() : li.textContent.trim();
      if (tabTitle) tabTitle.textContent = title;
    };
  });
}

function bindSectionClicks() {
  document.querySelectorAll(".side-menu li.section").forEach(sec => {
    sec.onclick = function() {
      const key = sec.dataset.key;
      const isExpanded = sec.classList.contains("expanded");
      
      document.querySelectorAll(".side-menu li.section").forEach(s => {
        s.classList.remove("expanded");
        const arrow = s.querySelector(".arrow");
        if (arrow) arrow.src = "icons/side_arrow_down.png";
      });
      document.querySelectorAll(".side-menu li.sub").forEach(sub => sub.remove());

      if (!isExpanded) {
        sec.classList.add("expanded");
        const arrow = sec.querySelector(".arrow");
        if (arrow) arrow.src = "icons/side_arrow_up.png";
        const subs = subMenus[key] || [key];
        let insertAfter = sec;
        subs.forEach((subName) => {
          const subLi = document.createElement("li");
          const isTargetActive = (subName === "营销活动复核");
          subLi.className = "sub" + (isTargetActive ? " active" : "");
          subLi.innerHTML = '<span class="sub-dot"></span><span class="menu-text" title="' + subName + '">' + subName + '</span>';
          insertAfter.insertAdjacentElement("afterend", subLi);
          insertAfter = subLi;
        });
        bindSubMenuClicks();
        if (subs[0] && tabTitle) tabTitle.textContent = subs[0];
      }
    };
  });
}

function renderOmsSidebar(l2Name) {
  const l2Node = omsRootMenu && (omsRootMenu.children || []).find(node => node.name === l2Name);
  if (!l2Node) return false;
  setSideTitle(l2Name);
  const children = l2Node.children || [];
  sideMenuList.innerHTML = children.map((node, idx) => {
    const hasChildren = Array.isArray(node.children) && node.children.length > 0;
    const icon = node.icon ? 'icons/side_plan.png' : 'icons/side_plan.png';
    if (hasChildren) {
      return '<li class="section oms-level3" data-node-id="' + node.id + '">' +
        '<img class="menu-icon" src="' + icon + '" alt=""><span class="menu-text" title="' + node.name + '">' + node.name + '</span>' +
        '<img class="arrow" src="icons/side_arrow_down.png" alt=""></li>';
    }
    return '<li class="sub oms-level3-leaf" data-node-id="' + node.id + '">' +
      '<span class="sub-dot"></span><span class="menu-text" title="' + node.name + '">' + node.name + '</span></li>';
  }).join('');

  sideMenuList.querySelectorAll('.oms-level3').forEach(section => {
    section.onclick = function(e) {
      e.stopPropagation();
      const node = children.find(item => item.id === section.dataset.nodeId);
      sideMenuList.querySelectorAll('.oms-level3').forEach(item => {
        if (item !== section) {
          item.classList.remove('expanded');
          const arrow = item.querySelector('.arrow');
          if (arrow) arrow.src = 'icons/side_arrow_down.png';
        }
      });
      sideMenuList.querySelectorAll('.oms-level4').forEach(item => item.remove());
      if (!node) return;
      const expanded = section.classList.toggle('expanded');
      const arrow = section.querySelector('.arrow');
      if (arrow) arrow.src = expanded ? 'icons/side_arrow_up.png' : 'icons/side_arrow_down.png';
      if (!expanded) return;
      let insertAfter = section;
      (node.children || []).forEach(child => {
        const sub = document.createElement('li');
        sub.className = 'sub oms-level4';
        sub.dataset.route = child.route || '';
        sub.innerHTML = '<span class="sub-dot"></span><span class="menu-text" title="' + child.name + '">' + child.name + '</span>';
        insertAfter.insertAdjacentElement('afterend', sub);
        insertAfter = sub;
      });
      bindOmsLevel4Clicks();
    };
  });
  sideMenuList.querySelectorAll('.oms-level3-leaf').forEach(item => {
    item.onclick = function() {
      sideMenuList.querySelectorAll('.sub').forEach(x => x.classList.remove('active'));
      item.classList.add('active');
      if (tabTitle) tabTitle.textContent = item.querySelector('.menu-text').textContent.trim();
    };
  });
  if (children[0] && tabTitle) tabTitle.textContent = children[0].name;
  return true;
}

function bindOmsLevel4Clicks() {
  sideMenuList.querySelectorAll('.oms-level4').forEach(item => {
    item.onclick = function(e) {
      e.stopPropagation();
      sideMenuList.querySelectorAll('.oms-level4').forEach(x => x.classList.remove('active'));
      item.classList.add('active');
      if (tabTitle) tabTitle.textContent = item.querySelector('.menu-text').textContent.trim();
    };
  });
}

function renderMarketingCenter() {
  sideMenuList.innerHTML = marketingSections.map((sec) => {
    const isExpanded = (sec.key === "营销方案");
    return '<li class="section' + (isExpanded ? ' expanded' : '') + '" data-key="' + sec.key + '">' +
      '<img class="menu-icon" src="' + sec.icon + '" alt="">' +
      '<span class="menu-text">' + sec.key + '</span>' +
      '<img class="arrow" src="' + (isExpanded ? 'icons/side_arrow_up.png' : 'icons/side_arrow_down.png') + '" alt="">' +
    '</li>';
  }).join('');
  
  // 展开营销方案并激活“营销活动复核”
  const planSec = sideMenuList.querySelector('li.section[data-key="营销方案"]');
  if (planSec) {
    const subs = subMenus["营销方案"] || [];
    let insertAfter = planSec;
    subs.forEach((subName) => {
      const subLi = document.createElement("li");
      const isTargetActive = (subName === "营销活动复核");
      subLi.className = "sub" + (isTargetActive ? " active" : "");
      subLi.innerHTML = '<span class="sub-dot"></span><span class="menu-text" title="' + subName + '">' + subName + '</span>';
      insertAfter.insertAdjacentElement("afterend", subLi);
      insertAfter = subLi;
    });
    if (tabTitle) tabTitle.textContent = "营销活动复核";
  }

  bindSectionClicks();
  bindSubMenuClicks();
}

function renderSidebarForL2(l2Name) {
  if (l2Name === "营销中心") {
    renderMarketingCenter();
    return;
  }
  if (renderOmsSidebar(l2Name)) return;
  const items = subMenus[l2Name] || [l2Name];
  sideMenuList.innerHTML = items.map((item, idx) => (
    '<li class="sub ' + (idx === 0 ? 'active' : '') + '">' +
      '<span class="sub-dot"></span><span class="menu-text" title="' + item + '">' + item + '</span>' +
    '</li>'
  )).join('');
  bindSubMenuClicks();
  if (items[0] && tabTitle) tabTitle.textContent = items[0];
}

document.querySelectorAll(".systems .system").forEach(btn => {
  btn.onclick = function(e) {
    e.preventDefault();
    const isAlreadyOpen = btn.classList.contains("active") && panel.classList.contains("open");
    if (isAlreadyOpen) {
      panel.classList.remove("open");
      mask.classList.remove("open");
      return;
    }
    document.querySelectorAll(".systems .system").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    const menuKey = btn.dataset.menu;
    const list = systemMenus[menuKey] || [];
    const info = systemInfos[menuKey] || { title: menuKey, desc: "" };

    const leftInfoHtml = '<div class="panel-category-info">' +
      '<div class="cat-title">' + info.title + '</div>' +
      (info.desc ? '<div class="cat-desc">' + info.desc + '</div>' : '') +
    '</div>';

    const menuItemsHtml = list.map((l2, idx) => {
      const iconSrc = iconMap[l2] || "icons/side_plan.png";
      return '<a href="#" data-l2="' + l2 + '" class="panel-menu-item' + (idx === 0 ? ' active' : '') + '">' +
        '<img src="' + iconSrc + '" alt=""><span>' + l2 + '</span>' +
      '</a>';
    }).join('');

    panel.innerHTML = leftInfoHtml + '<div class="panel-menus">' + menuItemsHtml + '</div>';

    panel.querySelectorAll("a.panel-menu-item").forEach(a => {
      a.onclick = function(ev) {
        ev.preventDefault();
        const l2 = a.dataset.l2;
        renderSidebarForL2(l2);
        panel.classList.remove("open");
        mask.classList.remove("open");
      };
    });

    panel.classList.add("open");
    mask.classList.add("open");
  };
});

if (mask) {
  mask.onclick = function() {
    panel.classList.remove("open");
    mask.classList.remove("open");
  };
}

bindSectionClicks();
bindSubMenuClicks();
