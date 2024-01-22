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

const bilibiliIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"
        viewBox="0 0 200 200" fill="none">
        <defs>
            <rect id="path_0" x="0" y="0" width="200" height="200" />
        </defs>
        <g opacity="1" transform="translate(0 0)  rotate(0 100 100)">
            <rect fill="#FFFFFF" opacity="1" transform="translate(0 0)  rotate(0 100 100)" x="0" y="0" width="200"
                height="200" rx="0" />
            <mask id="bg-mask-0" fill="white">
                <use xlink:href="#path_0"></use>
            </mask>
            <g mask="url(#bg-mask-0)">
                <path id="矩形 1" fill-rule="evenodd" style="fill:#57C4F2"
                    transform="translate(53 71)  rotate(0 54.5 31.5)" opacity="1"
                    d="M101,63C105.42,63 109,59.42 109,55L109,8C109,3.58 105.42,0 101,0L8,0C3.58,0 0,3.58 0,8L0,55C0,59.42 3.58,63 8,63L101,63Z " />
                <path id="矩形 2" fill-rule="evenodd" style="fill:#FFFFFF" transform="translate(62 80)  rotate(0 45.5 23)"
                    opacity="1"
                    d="M84,46C87.87,46 91,42.87 91,39L91,7C91,3.13 87.87,0 84,0L7,0C3.13,0 0,3.13 0,7L0,39C0,42.87 3.13,46 7,46L84,46Z " />
                <g id="eyes">
                    <path id="矩形 3" fill-rule="evenodd" style="fill:#57C4F2"
                        transform="translate(115.44 93.17)  rotate(21.773781106903954 12.250000000000014 3.5)" opacity="1"
                        d="M0,7L24.5,7L24.5,0L0,0L0,7Z " />
                    <path id="矩形 3" fill-rule="evenodd" style="fill:#57C4F2"
                        transform="translate(74 93)  rotate(-21.055584528404097 12.250000000000014 3.5)" opacity="1"
                        d="M0,7L24.5,7L24.5,0L0,0L0,7Z " />
                </g>
                <path id="矩形 3" fill-rule="evenodd" style="fill:#57C4F2"
                    transform="translate(69.95 61.32)  rotate(-139.72191892004938 16 2.722050983934175)" opacity="1"
                    d="M32 2.72C32 1.22 30.78 0 29.28 0L2.72 0C1.22 0 0 1.22 0 2.72C0 4.22 1.22 5.44 2.72 5.44L29.28 5.44C30.78 5.44 32 4.22 32 2.72Z" />
                <path id="矩形 3" fill-rule="evenodd" style="fill:#57C4F2"
                    transform="translate(105.47 61.48)  rotate(317.2006987866337 16 2.769476928341394)" opacity="1"
                    d="M32 2.77C32 2.04 31.71 1.33 31.19 0.81C30.67 0.29 29.96 0 29.23 0L2.77 0C2.04 0 1.33 0.29 0.81 0.81C0.29 1.33 0 2.04 0 2.77C0 3.5 0.29 4.21 0.81 4.73C1.33 5.25 2.04 5.54 2.77 5.54L29.23 5.54C29.96 5.54 30.67 5.25 31.19 4.73C31.71 4.21 32 3.5 32 2.77Z" />
                <path id="圆形 1" fill-rule="evenodd" style="fill:#57C4F2"
                    transform="translate(77 128)  rotate(0 6.5 6.5)" opacity="1"
                    d="M6.5,0C2.91,0 0,2.91 0,6.5C0,10.09 2.91,13 6.5,13C10.09,13 13,10.09 13,6.5C13,2.91 10.09,0 6.5,0Z " />
                <path id="圆形 1" fill-rule="evenodd" style="fill:#57C4F2"
                    transform="translate(128 128)  rotate(0 6.5 6.5)" opacity="1"
                    d="M6.5,0C2.91,0 0,2.91 0,6.5C0,10.09 2.91,13 6.5,13C10.09,13 13,10.09 13,6.5C13,2.91 10.09,0 6.5,0Z " />
                <path id="路径 1 (轮廓)" fill-rule="evenodd" style="fill:#57C4F2"
                    transform="translate(88.47135 109.90940930659056)  rotate(0 20.176525000000005 3.9783235807127397)"
                    opacity="1"
                    d="M21.57,0.42C21.52,0.37 21.47,0.33 21.41,0.28C21.36,0.24 21.3,0.21 21.23,0.17C21.17,0.14 21.11,0.11 21.04,0.09C20.98,0.06 20.91,0.05 20.84,0.03C20.77,0.02 20.7,0.01 20.63,0C20.56,0 20.49,0 20.42,0C20.35,0.01 20.28,0.02 20.21,0.03C18.89,0.32 17.68,0.77 16.59,1.37C16.16,1.6 15.72,1.87 15.28,2.18C15.02,2.35 14.67,2.61 14.22,2.95C13.71,3.34 13.33,3.61 13.09,3.76C12.73,3.99 12.39,4.16 12.06,4.27C11.29,4.54 10.49,4.7 9.67,4.73C8.83,4.77 7.98,4.69 7.14,4.48C5.31,4.03 3.63,3.05 2.13,1.53L0,3.65C0.96,4.61 1.99,5.41 3.09,6.05C4.16,6.66 5.27,7.11 6.43,7.4C7.55,7.67 8.68,7.78 9.81,7.73C10.92,7.68 12,7.47 13.05,7.11C13.59,6.92 14.14,6.65 14.7,6.29C15.01,6.1 15.46,5.78 16.03,5.34C16.45,5.03 16.77,4.8 16.99,4.64C17.34,4.39 17.69,4.18 18.02,4C18.64,3.66 19.3,3.39 20.02,3.18C20.29,3.46 20.58,3.73 20.89,4C22.18,5.15 23.59,6.06 25.12,6.73C27.27,7.68 29.51,8.08 31.81,7.92C34.65,7.73 37.5,6.71 40.35,4.85L38.71,2.33C36.3,3.91 33.93,4.78 31.61,4.93C29.8,5.05 28.03,4.74 26.33,3.98C25.09,3.44 23.94,2.7 22.88,1.76C22.55,1.47 22.25,1.17 21.98,0.88C21.86,0.75 21.77,0.64 21.72,0.58C21.67,0.52 21.62,0.47 21.57,0.42Z " />
            </g>
        </g>
    </svg>`

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
    name: '风林', // 869379440? 先上再说
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
    title: '捐赠 1 次, 共 5 元',
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