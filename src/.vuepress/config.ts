import { defineUserConfig, Plugin } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "ClassIsland 1.7 文档（旧版）",
      description: "ClassIsland 1.7 版本的文档",
    },
    "/en-us/": {
      lang: "en-US",
      title: "ClassIsland 1.7 Documentation (Legacy)",
      description: "documentation of ClassIsland 1.7",
    },
  },
  theme
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
