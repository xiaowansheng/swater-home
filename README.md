# 🌸 Yume's Dimension | 梦之次元

一个充满魔法的个人主页，融合了二次元美学与现代 Web 技术。通过精美的动画效果和交互体验，展现独特的个人风格。

A magical personal homepage that blends anime aesthetics with modern web technology. Featuring beautiful animations and interactive experiences to showcase your unique personality.

## ✨ 特性 Features

### 🎨 视觉效果 Visual Effects
- **动态背景** - 樱花飘落、粒子效果等多种背景动画
- **自定义光标** - 跟随鼠标的魔法光标效果
- **视差滚动** - 沉浸式的滚动体验
- **浮动装饰** - 随机生成的装饰元素
- **主题切换** - 明暗主题 + 自动模式

### 🎵 多媒体 Multimedia
- **音乐播放器** - 支持背景音乐播放
- **懒加载图片** - 优化加载性能
- **响应式设计** - 完美适配各种设备

### 🌐 国际化 Internationalization
- **多语言支持** - 中文/英文切换
- **自动语言检测** - 根据浏览器语言自动切换
- **配置化内容** - 通过 JSON 配置所有文本内容

### ⚡ 性能优化 Performance
- **代码分割** - 组件懒加载
- **性能监控** - 内置性能监控钩子
- **错误边界** - 优雅的错误处理
- **SEO 优化** - 完整的 SEO 配置

### 🔧 开发体验 Developer Experience
- **TypeScript** - 完整的类型支持
- **组件化架构** - 高度模块化的组件设计
- **配置驱动** - 通过配置文件自定义所有内容
- **热重载** - 开发时实时预览

## 🚀 快速开始 Quick Start

### 环境要求 Prerequisites
- Node.js 18+ 
- pnpm (推荐) / npm / yarn

### 安装 Installation

```bash
# 克隆项目
git clone <repository-url>
cd com.wbxnl

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

## 📁 项目结构 Project Structure

```
src/
├── components/          # 组件目录
│   ├── CustomCursor.tsx      # 自定义光标
│   ├── DynamicBackground.tsx # 动态背景
│   ├── ErrorBoundary.tsx     # 错误边界
│   ├── FloatingDecorations.tsx # 浮动装饰
│   ├── LanguageSwitcher.tsx  # 语言切换器
│   ├── LazyImage.tsx         # 懒加载图片
│   ├── LoadingScreen.tsx     # 加载屏幕
│   ├── MusicPlayer.tsx       # 音乐播放器
│   ├── ParallaxWrapper.tsx   # 视差包装器
│   ├── ProfileCard.tsx       # 个人资料卡片
│   ├── SEOHead.tsx          # SEO 头部
│   ├── SocialLinks.tsx      # 社交链接
│   ├── ThemeToggle.tsx      # 主题切换
│   └── Widgets.tsx          # 小组件集合
├── context/            # 上下文
│   └── ConfigContext.tsx    # 配置上下文
├── hooks/              # 自定义钩子
│   ├── usePerformance.ts    # 性能监控钩子
│   └── useTheme.ts          # 主题钩子
├── types/              # 类型定义
│   └── config.ts            # 配置类型
├── App.tsx             # 主应用组件
├── main.tsx            # 应用入口
└── index.css           # 全局样式

public/
├── config.json         # 主配置文件
├── site.webmanifest    # PWA 配置
└── vite.svg           # 图标资源
```

## ⚙️ 配置说明 Configuration

### 主配置文件 Main Config (`public/config.json`)

```json
{
  "activeLang": "auto",           // 激活语言 (auto/zh/en)
  "background": "sakura",         // 背景类型
  "avatar": "头像URL",            // 头像地址
  "theme": {
    "primary": "#ff6b9d",         // 主色调
    "secondary": "#fb923c",       // 辅助色
    "mode": "auto"                // 主题模式 (light/dark/auto)
  },
  "features": {                   // 功能开关
    "customCursor": true,         // 自定义光标
    "parallax": true,             // 视差效果
    "floatingDecorations": true,  // 浮动装饰
    "musicPlayer": true,          // 音乐播放器
    "clock": true,                // 时钟组件
    "weather": true,              // 天气组件
    "visitorCounter": true        // 访客计数器
  },
  "content": {                    // 多语言内容
    "zh": { /* 中文内容 */ },
    "en": { /* 英文内容 */ }
  }
}
```

### 个人信息配置 Personal Info

在 `config.json` 的 `content` 部分配置：

```json
{
  "name": "你的名字",
  "nickname": "昵称", 
  "bio": "个人简介",
  "location": "所在地",
  "occupation": "职业",
  "skills": ["技能1", "技能2"],
  "quotes": ["个人名言"],
  "links": [
    {
      "name": "链接名称",
      "url": "链接地址", 
      "icon": "图标名称"
    }
  ]
}
```

### 社交链接配置 Social Links

```json
{
  "social": [
    {
      "platform": "GitHub",
      "url": "https://github.com/username",
      "icon": "Github"
    }
  ]
}
```

## 🎨 自定义样式 Customization

### 主题颜色 Theme Colors

在 `config.json` 中修改主题配置：

```json
{
  "theme": {
    "primary": "#your-primary-color",
    "secondary": "#your-secondary-color", 
    "backgroundAlpha": 0.4,
    "mode": "auto"
  }
}
```

### 背景效果 Background Effects

支持多种背景效果：
- `sakura` - 樱花飘落
- `particles` - 粒子效果
- `geometric` - 几何图形
- `stars` - 星空效果

### 自定义组件 Custom Components

所有组件都支持通过 props 进行自定义，你可以：
- 修改动画参数
- 调整样式主题
- 添加新的交互效果
- 扩展功能特性

## 🛠️ 技术栈 Tech Stack

- **框架**: React 19 + TypeScript
- **构建工具**: Vite 7
- **样式**: Tailwind CSS + PostCSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **粒子效果**: TSParticles
- **工具库**: clsx, tailwind-merge

## 📱 PWA 支持 PWA Support

项目内置 PWA 支持，包括：
- 离线访问
- 桌面安装
- 推送通知
- 缓存策略

## 🔧 开发指南 Development Guide

### 添加新组件 Adding New Components

1. 在 `src/components/` 创建组件文件
2. 使用 TypeScript 定义 props 接口
3. 集成 Framer Motion 动画
4. 添加响应式设计
5. 在主应用中引入使用

### 扩展配置 Extending Configuration

1. 在 `src/types/config.ts` 中添加类型定义
2. 更新 `public/config.json` 配置结构
3. 在相关组件中使用新配置
4. 添加默认值和验证

### 性能优化 Performance Optimization

- 使用 React.lazy() 进行代码分割
- 实现图片懒加载
- 优化动画性能
- 减少重渲染

## 📄 许可证 License

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献 Contributing

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📞 联系方式 Contact

如有问题或建议，请通过以下方式联系：

- 📧 Email: hello@example.com
- 🐦 Twitter: @yume_dev
- 💬 Discord: 加入我们的社区

---

**用爱与代码编织梦想 | Weaving dreams with love and code** ✨