# Figma Website - Vite React 版本

这是一个基于 Vite + React 的响应式网站项目，完美复刻 Figma 设计稿。

## 功能特点

- ✨ **响应式设计**: 完美适配 PC、平板、手机端
- 🎨 **像素级还原**: 严格按照 Figma 设计稿实现
- ⚡ **Vite 驱动**: 极速开发体验
- 🧩 **组件化**: 模块化的 React 组件架构

## 已实现的模块

### 1. 用户评价模块 (TestimonialsSection)
- **PC端**: 4列小卡片网格布局
- **移动端**: 2列大卡片并排显示
- **平板端**: 3列自适应布局
- **功能**: 星级评分、用户头像、评价文本

### 2. 产品介绍模块 (ProductIntro)
- **标题**: "7-in-1 Hair Drying & Styling Tool Kit"
- **描述**: 产品功能介绍文案
- **响应式字体**: 不同屏幕尺寸自适应

## 快速开始

### 安装依赖
\`\`\`bash
npm install
\`\`\`

### 启动开发服务器
\`\`\`bash
npm run dev
\`\`\`

### 构建生产版本
\`\`\`bash
npm run build
\`\`\`

### 预览构建结果
\`\`\`bash
npm run preview
\`\`\`

## 项目结构

```
vite-react-project/
├── src/
│   ├── components/
│   │   ├── TestimonialsSection.jsx  # 用户评价组件
│   │   └── ProductIntro.jsx         # 产品介绍组件
│   ├── App.jsx                      # 主应用组件
│   ├── App.css                      # 主样式文件
│   ├── index.css                    # 全局基础样式
│   └── main.jsx                     # 应用入口
├── index.html                       # HTML 模板
├── package.json                     # 项目配置
└── vite.config.js                   # Vite 配置
```

## 响应式断点

- **移动端**: ≤768px - 2列大卡片并排
- **平板端**: 769px-1024px - 3列小卡片
- **PC端**: ≥1025px - 4列小卡片

## 技术栈

- **React 18**: 最新的 React 版本
- **Vite**: 现代化构建工具
- **CSS Grid**: 现代布局方案
- **CSS Flexbox**: 灵活布局
- **Responsive Design**: 移动优先设计

## 下一步计划

- [ ] 添加更多页面模块
- [ ] 集成动画效果
- [ ] 添加深色模式支持
- [ ] 性能优化
- [ ] 无障碍访问优化
