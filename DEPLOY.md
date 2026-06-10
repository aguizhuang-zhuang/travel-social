# 泰国社交活动平台 - 前端部署指南

## 项目概述
这是一个面向泰国市场的社交活动 H5 应用，包含活动发现、场地租赁、用户社交等功能。

## 技术栈
- 纯 HTML/CSS/JavaScript
- 响应式设计，支持移动端
- 深色科技风 UI
- 对接 Node.js 后端 API

## 文件结构
```
travel-social/
├── index.html          # 首页（地图/列表双模式）
├── event.html          # 活动列表页
├── event-detail.html   # 活动详情页
├── venue.html          # 场地列表页
├── venue-detail.html   # 场地详情页
├── room.html           # 青旅房间页
├── room-detail.html    # 房间详情页
├── profile.html        # 个人主页
├── matching.html       # 旅友匹配页
├── messages.html       # 消息页
├── chat.html           # 聊天页
├── styles.css          # 全局样式
└── DEPLOY.md           # 本文件
```

## 部署到 GitHub Pages

### 步骤 1: 创建 GitHub 仓库
1. 访问 https://github.com/new
2. 仓库名: `travel-social`
3. 描述: "泰国社交活动平台 - H5 前端"
4. 选择 Public
5. 点击 Create repository

### 步骤 2: 上传代码到 GitHub
```bash
# 进入项目目录
cd /Users/aguizhuang/Desktop/临时文件/marvis/travel-social

# 初始化 Git
git init
git add .
git commit -m "Initial commit: 泰国社交活动平台前端"

# 添加远程仓库
git remote add origin https://github.com/你的用户名/travel-social.git

# 推送代码
git push -u origin main
```

### 步骤 3: 启用 GitHub Pages
1. 进入仓库 Settings → Pages
2. Source 选择 "Deploy from a branch"
3. Branch 选择 "main" 或 "master"
4. Folder 选择 "/ (root)"
5. 点击 Save

### 步骤 4: 等待部署完成
GitHub Pages 会自动构建，通常需要 1-2 分钟。部署完成后会显示：
```
Your site is live at https://你的用户名.github.io/travel-social/
```

## 配置后端地址

### 默认配置
前端默认连接的后端地址为：
```javascript
const API_BASE = 'https://travel-social-backend-production.up.railway.app';
```

### 修改后端地址
如果需要连接其他后端，修改所有 HTML 文件中的 `API_BASE` 变量：

1. 打开每个 HTML 文件
2. 找到 `const API_BASE = '...'` 行
3. 修改为你的后端地址

或者使用批量替换：
```bash
# Linux/macOS
find . -name "*.html" -exec sed -i 's|https://travel-social-backend-production.up.railway.app|https://你的新后端地址|g' {} \;

# Windows (PowerShell)
Get-ChildItem -Filter "*.html" -Recurse | ForEach-Object {
  (Get-Content $_.FullName) -replace 'https://travel-social-backend-production.up.railway.app', 'https://你的新后端地址' | Set-Content $_.FullName
}
```

## 测试部署

### 1. 访问前端
打开浏览器访问：
```
https://你的用户名.github.io/travel-social/
```

### 2. 测试功能
1. **首页**：切换地图/列表模式
2. **活动列表**：点击活动卡片
3. **登录功能**：使用测试账号登录
4. **场地浏览**：查看场地详情

### 3. 测试账号
- 邮箱: `somchai@example.com`
- 密码: `123456`

## 故障排除

### 问题 1: 页面空白
**原因**：GitHub Pages 未正确部署
**解决**：
1. 检查仓库 Settings → Pages 配置
2. 确认代码已推送到 main 分支
3. 查看 Actions 标签是否有构建错误

### 问题 2: API 请求失败
**原因**：后端地址错误或 CORS 问题
**解决**：
1. 检查浏览器控制台错误信息
2. 确认后端服务正常运行
3. 检查后端 CORS 配置是否允许 GitHub Pages 域名

### 问题 3: 样式错乱
**原因**：CSS 文件路径错误
**解决**：
1. 检查所有资源是否使用相对路径
2. 确认 `styles.css` 文件存在
3. 清除浏览器缓存

### 问题 4: 移动端适配问题
**原因**：Viewport 设置错误
**解决**：
1. 确认所有 HTML 文件包含：
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```

## 自定义域名（可选）

### 步骤 1: 购买域名
在域名服务商（如 Namecheap、GoDaddy）购买域名。

### 步骤 2: 配置 DNS
添加 CNAME 记录：
```
类型: CNAME
名称: www
值: 你的用户名.github.io
TTL: 自动
```

### 步骤 3: 配置 GitHub Pages
在仓库 Settings → Pages → Custom domain 中输入你的域名。

### 步骤 4: 更新后端 CORS
通知后端开发者将你的域名添加到 CORS 允许列表。

## 性能优化建议

1. **图片优化**：压缩所有图片，使用 WebP 格式
2. **代码压缩**：使用工具压缩 HTML/CSS/JS
3. **CDN 加速**：使用 jsDelivr 加速静态资源
4. **缓存策略**：设置合适的 HTTP 缓存头
5. **懒加载**：图片和组件懒加载

## 安全建议

1. **HTTPS**：GitHub Pages 默认启用 HTTPS
2. **API 密钥**：前端不要硬编码敏感 API 密钥
3. **输入验证**：所有用户输入需在后端验证
4. **XSS 防护**：避免使用 innerHTML，使用 textContent

## 更新维护

### 日常更新
```bash
# 修改代码后
git add .
git commit -m "更新描述"
git push origin main
# GitHub Pages 会自动重新部署
```

### 回滚版本
```bash
# 查看提交历史
git log --oneline

# 回滚到指定版本
git reset --hard <commit-hash>
git push -f origin main
```

## 技术支持
- GitHub Pages 文档: https://docs.github.com/pages
- 项目问题反馈: 在 GitHub Issues 中提交
- 后端对接: 参考后端项目文档