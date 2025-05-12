import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "首页",
      link: "index.md",
    },
  ],
  "/app/": [
    {
      icon: "fa-solid fa-lightbulb",
      text: "应用帮助",
      children: [
        "index.md",
        "setup.md",
        "basic.md",
        {
          text: "档案设置",
          collapsible: true,
          expanded: true,
          prefix: "profile/",
          children: [
            "README.md",
            "classplan.md",
            "time-layout.md",
            "subject.md",
            "attached-settings.md",
          ],
          icon: "fa-solid fa-file-lines"
        },
        {
          text: "迁移课表",
          collapsible: true,
          prefix: "migrate/",
          children: [
            "README.md",
            "ecs.md",
          ],
          icon: "fa-solid fa-file-import"
        },
        "notifications.md",
        "automation.md",
        "uri-navigation.md",
        "backup.md",
        "advanced.md",
        {
          text: "错误排除",
          collapsible: true,
          prefix: "faq/",
          children: [
            "faq.md",
            "reporting-issue.md",
          ],
          icon: "fa-solid fa-bug"
        },
        {
          text: "附录",
          collapsible: true,
          prefix: "appendix/",
          children: [
            "revert-win7-patching.md",
          ],
          icon: "fa-solid fa-book"
        },
      ],
    },
  ],
  "/management/": [
    {
      text: "集控",
      children: [
        "README.md",
        "client-identify.md",
        "connect-to-mgmt-server.md",
        "configure.md",
        "policy.md",
        {
          text: "教程：手动编写集控配置文件",
          collapsible: true,
          expanded: true,
          prefix: "tutorial-create-management-config/",
          children: [
            "README.md",
            "tutorial-partition-management-config.md",
          ],
          icon: "fa-solid fa-book"
        },
        "cims.py.md",
      ],
    },
  ],
  "/dev/": [
    {
      text: "开发文档",
      children: [
        "README.md",
        {
          text: "开始",
          collapsible: true,
          prefix: "get-started/",
          children: [
            "devlopment.md",
            "devlopment-plugins.md",
          ],
        },
        {
          text: "插件",
          collapsible: true,
          prefix: "plugins/",
          children: [
            "README.md",
            "create-project.md",
            "basics.md",
            "plugin-base.md",
            "publishing.md",
          ],
        },
        "basics.md",
        "events.md",
        "uri-navigation.md",
        "components.md",
        {
          text: "提醒",
          collapsible: true,
          prefix: "notifications/",
          children: [
            "index.md",
            "advanced-request.md",
          ],
        },
        "lessons-service.md",
        "settings-page.md",
        {
          text: "跨进程通信",
          collapsible: true,
          prefix: "ipc/",
          children: [
            "README.md",
            "ipc.md",
            "reference.md"
          ]
        },
        {
          text: "API 参考",
          link: "https://api.docs.classisland.tech/"
        }
      ],
    },
  ],
  "/community/": [
    {
      text: "社区",
      children: [
        "README.md",
        "contributing.md",
        "web-articles.md",
        "rules.md"
      ],
    },
  ],
});
