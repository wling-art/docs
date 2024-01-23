import { defineConfig } from 'vitepress'

import pkg from '../../package.json'

export default defineConfig({
  lang: 'zh-CN',
  title: "钟乐 Wiki",
  description: "感谢每一位玩家的到来💡",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://zl.liuzhen932.top'
  },
  themeConfig: {
    logo: { src: '/logo.svg', width: 28, height: 28 },
    nav: [
      { text: '主页', link: '/' },
      { text: '百科', link: '/intro' },
      { text: '博客', link: '/blog/index' },
      { text: '关于',
          items: [
          { text: '关于我们', link: '/about/intro' },
          { text: '认识成员', link: '/about/team' },
          { text: '联系我们', link: '/about/contact' }
        ]
      },
    ],
    sidebar: [
      {
        text: '👋 文档介绍',
        link: '/intro'
      },
      {
        text: '❓ 常见问题',
        link: '/issues'
      },
      {
        text: '📘 服务器介绍',
        link: '/server-intro'
      },
      {
        text: '入门',
        items: [
          { text: '🔦 一个正确的游戏名', link: '/入门/username' },
          { text: '🎓 我该如何进入服务器', link: '/入门/how2join' },
          { text: '🧳 注册与登录', link: '/入门/register-and-login' }
        ]
      },
      {
        text: '规则',
        items: [
          { text: '📃 服务器规则', link: '/规则/server-rule' },
          { text: '📃 QQ 群规则', link: '/规则/group-rule' }
        ]
      },
      {
        text: '教程',
        items: [
          { text: '🖨 常用指令', link: '/教程/useful-commands' },
          { text: '💡 小技巧', link: '/教程/tips' }
        ]
      },
      {
        text: '玩法',
        items: [
          { text: '😊 更好的 Minecraft', link: '/玩法/better-minecraft' },
          { text: '🎗 箱子锁', link: '/玩法/lock' },
          { text: '✏ 阶级', link: '/玩法/class' },
          { text: '🌀 粘液科技(Slimefun 4)', link: '/玩法/slimefun4' },
          { text: '🦊 Get 一只狐狸', link: '/玩法/fox' },
          { text: '💵 全球市场', link: '/玩法/ah' },
          { text: '🐟 更多的鱼',
            items: [
              {
                text: '🎣 玩法简介',
                link: '/玩法/fish/intro'
              },
              {
                text: '🔨 创建领地',
                link: '/玩法/fish/create'
              },
              {
                text: '⚙ 设置领地权限',
                link: '/玩法/fish/set'
              }
            ]
          },
          { text: '🔒 领地',
            items: [
              {
                text: '🔒 简介',
                link: '/玩法/res/intro'
              },
              {
                text: '🔨 创建领地',
                link: '/玩法/res/create'
              },
              {
                text: '⚙ 设置领地权限',
                link: '/玩法/res/set'
              },
              {
                text: '❌ 删除领地',
                link: '/玩法/res/delete'
              }
            ]
         }
        ]
      },
      {
        text: '其他',
        items: [
          { text: '🌍 地图', link: '/其他/map' },
          { text: '🏭 展示自己', link: '/其他/show' },
          { text: '❤ 支持我们', link: '/其他/support' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wling-art' }
    ],
    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const html = md.render(src, env)
          if (env.frontmatter?.search === false) return ''
          return html
        }
      }
    },
    externalLinkIcon: true, // 展示站外链接箭头 ↗
    // 下方是文档中文适配内容
    footer: {
      message: `基于 WTFPL 许可发布 | 文档版本 ${pkg.version}`,
      copyright: `版权所有 © 2023-${new Date().getFullYear()} 钟乐服务器`
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },
  markdown: {
    image: {
      // 图片懒加载
      lazyLoading: true
    }
  }
})
