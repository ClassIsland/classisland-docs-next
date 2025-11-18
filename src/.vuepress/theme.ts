import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://docs-v1.classisland.tech",

  author: {
    name: "ClassIsland 社区",
    url: "https://classisland.tech",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "https://res.classisland.tech/logo.svg",

  repo: "ClassIsland/classisland-docs-next",

  docsDir: "src",

  // 导航栏
  // navbar,

  // // 侧边栏
  // sidebar,

  // // 页脚
  
  displayFooter: true,
  copyright: false,

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      //  autocorrect-disable
      footer: "Copyright (c) 2025 ClassIsland | " +
          '本文档以 CC BY-NC-SA 4.0 许可协议授权。' + 
          '<br/>' +
          '<a href="https://beian.miit.gov.cn/" target="_blank">津ICP备2025035356号</a>',
      //  autocorrect-enable

      displayFooter: true,

      metaLocales: {
        editLink: "编辑此页面",
      },
    },

    "/en-us/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Default footer",

      displayFooter: true,

      metaLocales: {
        editLink: "编辑此页面",
      },
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },
  pure: true,
  markdown: {
    align: true,
    attrs: true,
    component: true,
    demo: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tasklist: true,
    vPre: true,
    imgSize: true,
    obsidianImgSize: true,

    // insert component easily

    // 在启用之前安装 echarts
    echarts: true,

    // 在启用之前安装 flowchart.ts
    flowchart: true,

    // gfm requires mathjax-full to provide tex support
    gfm: true,

    // 在启用之前安装 katex
    // katex: true,

    // 在启用之前安装 mathjax-full
    // mathjax: true,

    // 在启用之前安装 mermaid
    mermaid: true,
    alert: true,
    hint: true,
    tabs: true,
    codeTabs: true,
    highlighter: {
      type: "shiki",
      themes: {
        light: "one-light",
        dark: "one-dark-pro",
      },
      highlightLines: true,
      notationDiff: true,
      notationFocus: true,
      notationHighlight: true,
    },
    focus: false,
  },
  // 在这里配置主题提供的插件
  plugins: {
    // // 注意：仅用于测试！你必须自行生成并在生产环境中使用自己的评论服务
    // comment: {
    //   provider: "Giscus",
    //   repo: "ClassIsland/classisland-docs-giscuz",
    //   repoId: "R_kgDOMp3pZg",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOMp3pZs4CiBuf",
    //   mapping: "pathname",
    // },
    slimsearch: true,
    components: {
      components: ["Badge", "VPCard"],
    },
    notice: [
      {
        path: "/",
        title: "您正在查看 ClassIsland 旧版文档",
        confirm: true,
        content: "本文档的部分内容相对 ClassIsland 最新版本已经过时。如果您使用新版（>=2.0）的 ClassIsland，请查阅新版文档。",
        actions: [
          {
            text: "前往新版文档",
            link: "https://docs.classisland.tech/",
            type: "primary",
          },
          {
            text: "好"
          }
        ],
      },
    ],

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
