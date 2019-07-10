# react 在线账本

## 设计稿-从蓝图开始

### 拆分页面：根据原型图很直观的拆分

- 首页：列表模式
- 新建记账条目页
- 编辑记账条目页（有可能和新建共用）
- 首页：图表模式（有可能和首页共用）

## 代码文件机构，代码和文件命名规范

- 代码结构和文件命名的重要性
- 用 create-react-app 创建工程模板
- 展示型组件
  - 关心数据的展示方式
  - 不依赖 app 中的其他文件
  - 不关心数据是如何加载和变化的
  - 仅通过 props 接收数据和回调函数
  - 除非需要用到 state，生命周期函数或性能优化，同常写成函数式组件
- 容器型组件
  - 关心数据的运作方式
  - 为展示型组件提供数据和操作数据的方法
  - 为展示型组件提供回调函数
  - 通常是有状态的，并且作为数据源存在

- components 文件夹存放所有的展示型组件
- containers 文件夹存放所有的容器性组件
- 这两个文件夹下的 `__test__` 文件夹存放所有组件测试文件
- 文件使用 Pascal Case 命名法
- src 根目录下放统一使用的一些文件

使用 create-react-app 创建的项目自带 ESLint 规范，查看规范：<https://github.com/JasonBoy/javascript/tree/master/react>

## React 理念

- React 官方推荐的开发 React 应用的思考方式
- <https://react.docschina.org/docs/thinking-in-react.html>

### React 理念步骤初步理解

- 第一步：把 UI 划分出组件层级
- 第二步：创建应用的静态版本

## 为项目选择图标库

- 使用 svg 图标库而不是 font icon
  - svg 可以完全的控制用任何的 css，font icon 本身是字符，所以只能使用字符相关的属性
  - 使用 font icon 经常要下载大的字体文件
  - font icon 的语义性、可访问性差
- 很多 free icon set - icomoon、Ionicons
  - 这里我们选择 Ionicons - <https://ionicons.com/>
  - 结合 react 的库选用 react-ionicons

## 使用 PropTypes 检查类型属性

- 类型检查可以帮助我们更好的发现 bug
- React 内置了 PropTypes 来完成这个任务
- Props 默认的值：defaultProps

