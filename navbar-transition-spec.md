# NavBar 滚动切换动效参数

## 1. 触发条件

| 参数 | 值 |
|---|---|
| **触发阈值** | `scrollTop > 150px` |

## 2. 动效参数

| 参数 | 值 | CSS 属性 |
|---|---|---|
| **过渡属性** | `opacity` | 透明度淡入淡出 |
| **过渡时长** | `200ms` | `transition-duration: 200ms` |
| **缓动函数** | `ease` | `transition-timing-function: ease` |

## 3. 两种状态

### 状态 A - 展开态（初始）

- 左侧：添加好友图标（圆形按钮 + 毛玻璃背景）
- 右侧：足迹、分享、菜单（药丸形毛玻璃容器）
- 图标颜色：白色（在深色背景图上）

### 状态 B - 折叠态（滚动后）

- 左侧：编辑（铅笔）图标
- 中间：用户名 + 下拉箭头（如 `@erika0526 ▼`）
- 右侧：足迹、添加好友、菜单
- 图标颜色：黑色

## 4. 切换逻辑伪代码

```javascript
const SCROLL_THRESHOLD = 150; // px

function onScroll(scrollTop) {
  const isCollapsed = scrollTop > SCROLL_THRESHOLD;
  
  // 展开态 NavBar
  expandedNavBar.style.opacity = isCollapsed ? 0 : 1;
  expandedNavBar.style.pointerEvents = isCollapsed ? 'none' : 'auto';
  
  // 折叠态 NavBar  
  collapsedNavBar.style.opacity = isCollapsed ? 1 : 0;
  collapsedNavBar.style.pointerEvents = isCollapsed ? 'auto' : 'none';
  
  // 顶部背景色
  headerBackground.style.backgroundColor = isCollapsed ? '#FFFFFF' : 'transparent';
}
```

## 5. 附加说明

- 两个 NavBar 组件同时存在于 DOM 中，通过 `opacity` 切换可见性
- 使用 `pointerEvents` 控制交互区域，避免点击穿透
- StatusBar 的 `lightMode` 也会同步切换（白色图标 ↔ 黑色图标）
