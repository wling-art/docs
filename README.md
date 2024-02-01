# 你好！欢迎使用ZLServer Wiki

这里是 ZLServer Wiki 的 Github 仓库。你可以为我们提交 PR 来帮助我们完善 Wiki 的内容, 也可以对 Wiki 的内容进行修正。


## 为什么使用我们的服务器Wiki

我们的服务器 Wiki 旨在为您提供以下方面的帮助, 以使您在游戏中更加轻松、顺利地享受。新手入门指南、游戏机制解释、资源和建筑指导社区活动和事件、常见问题解答。


## 如何使用服务器Wiki？

在 Wiki 中, 我们努力将所有的信息都整理得清晰易懂, 以便每位玩家都能受益。如果您有任何反馈、建议或需要帮助, 我们管理员团队随时愿意为您提供支持。

## 我该做什么？

感谢您选择加入我们的游戏社区, 我们希望这个Wiki能够为您的游戏之旅增添乐趣和便利！


# 本文档基于 [Vitepress](vitepress.dev) 构建

## 如何安装？

VitePress 可以单独使用，也可以安装到现有项目中。在这两种情况下，你都可以通过以下方式安装它：
```
npm add -D vitepress
```

在完成这一步后, 请输入以下命令来启动设置向导:
```
npx vitepress init
```

你将需要回答几个问题
```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◆  Theme:
│  ● Default Theme (Out of the box, good-looking docs)
│  ○ Default Theme + Customization
│  ○ Custom Theme
└
```

> 如果你打算执行使用 Vue 组件或 API 的自定义，你还应该显式安装为对等依赖项。`vue`

## 在本地构建和测试

你需要先使用以下命令生成文档:

```
npm run docs:build
```

接着使用以下命令在本地对文档进行预览:

```
npm run docs:preview
```

该命令将启动本地静态 Web 服务器，该服务器将提供位于 的输出目录。您可以使用它来确保在推送到生产环境之前一切正常。`preview.vitepress/disthttp://localhost:4173`

或者通过修改参数来配置本地服务器的端口, 例如:将本地服务器配置为端口 8080 可以将参数修改为:

```
{
  "scripts": {
    "docs:preview": "vitepress preview docs --port 8080"
  }
}
```

这样就可以在 `docs:previewhttp://localhost:8080` 启动本地服务器了。