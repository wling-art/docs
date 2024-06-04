import { defineConfig } from 'vitepress'

import pkg from '../../package.json'

export default defineConfig({
  lang: "zh-CN",
  title: "白叶 Wiki",
  description: "感谢每一位玩家的到来💡",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["script", { async: "", src: "/m.js" }],
    ["script", { async: "true", src: "/cursor.js" }],
  ],
  ignoreDeadLinks: true,
  cleanUrls: true,
  sitemap: {
    hostname: "https://docs.clock-fun.top",
  },
  themeConfig: {
    logo: { src: "/logo.svg", width: 28, height: 28 },
    nav: [
      { text: "主页", link: "/" },
      { text: "百科", link: "/intro" },

      { text: "更新日志", link: "/update" },
      { text: "博客", link: "/blog/index" },
      {
        text: "关于",
        items: [
          { text: "关于我们", link: "/about/intro" },
          { text: "认识成员", link: "/about/team" },
          { text: "隐私政策", link: "/about/privacy-policy" },
          { text: "免责声明", link: "/about/disclaimers" },
          { text: "联系我们", link: "/about/contact" },
        ],
      },      
      {
        text: "生电",
        items: [
          { text: "介绍", link: "/生电/index" },
          { text: "规则", link: "/生电/rule" },
          { text: "安全", link: "/生电/security" },
          { text: "命令", link: "/生电/command" },
        ],
      },
    ],
    sidebar: [
      {
        text: "👋 文档介绍",
        link: "/intro",
      },
      {
        text: "❓ 常见问题",
        link: "/issues",
      },
      {
        text: "📘 服务器介绍",
        link: "/server-intro",
      },
      {
        text: "入门",
        items: [
          { text: "🔦 一个正确的游戏名", link: "/入门/username" },
          { text: "🎓 我该如何进入服务器", link: "/入门/how2join" },
          { text: "🧳 注册与登录", link: "/入门/register-and-login" },
        ],
      },
      {
        text: "规则",
        items: [
          { text: "📃 总则", link: "/规则/rules" },
          { text: "📃 服务器规则", link: "/规则/server-rule" },
          { text: "📃 QQ 群规则", link: "/规则/group-rule" },
        ],
      },
      {
        text: "教程",
        items: [
          { text: "🖨 常用指令", link: "/教程/useful-commands" },
          { text: "💡 小技巧", link: "/教程/tips" },
          { text: "⚖️ 商店", link: "/教程/esguishop" },
          { text: "🏙️ 建筑", link: "/教程/buildingselection" },
          {
            text: "🔒 领地",
            items: [
              {
                text: "🔒 简介",
                link: "/教程/res/intro",
              },
              {
                text: "🔨 创建领地",
                link: "/教程/res/create",
              },
              {
                text: "⚙ 设置领地权限",
                link: "/教程/res/set",
              },
              {
                text: "❌ 删除领地",
                link: "/教程/res/delete",
              },
            ],
          },
        ],
      },
      {
        text: "玩法",
        items: [
          { text: "😊 更好的 Minecraft", link: "/玩法/better-minecraft" },
          { text: "🎗 箱子锁", link: "/玩法/lock" },
          { text: "✏ 阶级", link: "/玩法/class" },
          { text: "🌀 粘液科技(Slimefun 4)", link: "/玩法/slimefun4" },
          { text: "⚔️ 单挑", link: "/玩法/pvp" },
          { text: "🧷 玩家档案", link: "/玩法/player-profile" },
          { text: "🤽‍♂️ 技能", link: "/玩法/skill" },
          { text: "💵 全球市场", link: "/玩法/ah" },
          { text: "🏟 银行", link: "/玩法/bank" },
          {
            text: "🐟 更多的鱼",
            items: [
              {
                text: "🎣 玩法简介",
                link: "/玩法/fish/intro",
              },
              {
                text: "🏁 钓鱼比赛",
                link: "/玩法/fish/competition",
              },
              {
                text: "🍷 稀有度等级",
                link: "/玩法/fish/grade",
              },
              {
                text: "🐟 鱼的种类",
                link: "/玩法/fish/type",
              },
            ],
          },
          /* // 这段内容已被删除
          {
            text: '🎄 季节',
            items: [
              {
                text: '🎄 玩法简介',
                link: '/玩法/season/intro'
              },
              {
                text: '💓 温度系统',
                link: '/玩法/season/temp'
              }
            ]
          },
*/
          //   { text: "🦊 Get 一只狐狸", link: "/玩法/fox" },
        ],
      },
      {
        text: "其他",
        items: [
          { text: "🌍 地图", link: "/其他/map" },
          /* { text: '🏭 展示自己', link: '/其他/show' }, */
          { text: "❤ 支持我们", link: "/其他/support" },
        ],
      },
    ],
    editLink: {
      pattern: "https://github.com/CrashVibe/docs/edit/master/docs/:path",
      text: "在 Github 上编辑此页",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/CrashVibe/docs" },
    ],
    search: {
      provider: "local",
      options: {
        _render(src, env, md) {
          const html = md.render(src, env);
          if (env.frontmatter?.search === false) {
            return "";
          }
          return html;
        },
      },
    },
    externalLinkIcon: true, // 展示站外链接箭头 ↗
    // 下方是文档中文适配内容
    footer: {
      message: `基于 WTFPL 许可发布 | 文档版本 ${pkg.version}`,
      copyright: `版权所有 © 2023-${new Date().getFullYear()} 钟乐服务器`,
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
  markdown: {
    image: {
      // 图片懒加载
      lazyLoading: true,
    },
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
});
