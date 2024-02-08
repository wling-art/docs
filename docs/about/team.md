---
layout: page
title: 认识团队
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://github.com/wling-art.png',
    name: 'wlingzhenyu',
    title: '服主',
    links: [
      { icon: 'github', link: 'https://github.com/wling-art' }
    ],
    sponsor: 'https://afdian.net/a/ZLServer',
    actionText: '捐赠服主'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=3603866430&spec=100',
    name: 'HaiTang_Game',
    title: '管理员'
  }
]

const partners = [
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1519412035&spec=100',
    name: 'Gemence',
    title: '捐赠 5 次, 共 50 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=869379440&spec=100',
    name: '风林',
    title: '捐赠 1 次, 共 65 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=3603866430&spec=100',
    name: 'HaiTang_Game',
    title: '捐赠 4 次, 共 36 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=3626673715&spec=100',
    name: 'xuanxuan07313',
    title: '捐赠 3 次, 共 18.32 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1494482621&spec=100',
    name: '青衣',
    title: '捐赠 2 次, 共 50 元',
  },
  {
    avatar: 'https://www.github.com/xiaozhu2007.png',
    name: 'liuzhen932',
    title: '捐赠 2 次, 共 10 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2289836651&spec=100',
    name: '秋叶海棠.',
    title: '捐赠 1 次, 共 10 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2544028137&spec=100',
    name: '杨骐鸣',
    title: '捐赠 1 次, 共 5 元'
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      认识团队
    </template>
    <template #lead>
      在这个页面你将了解服务器的核心人员组成
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>管理团队</template>
    <template #lead>这是目前钟乐服务器的管理团队, 感谢他们让钟乐更美好!</template>
    <template #members>
      <VPTeamMembers size="medium" :members="coreMembers" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>赞助者</template>
    <template #lead>这些是捐赠过钟乐服务器的人, 感谢他们让服务器渡过难关!(排名不分先后)</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
