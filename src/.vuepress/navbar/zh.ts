import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/app/",
  "/management/",
  "/dev/",
  "/community/",
  {
    "text": "新版文档",
    "link": "https://docs.classisland.tech/",
    "icon": "fa-solid fa-book"
  }
]);
