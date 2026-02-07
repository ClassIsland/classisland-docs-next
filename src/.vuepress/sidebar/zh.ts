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
        "component.md",
        "notifications.md",
        "weather.md",
        "automation.md",
        "plugin.md",
        "uri-navigation.md",
        "backup.md",
        "advanced.md",
        {
          text: "错误排除",
          collapsible: true,
          prefix: "faq/",
          children: [
            "README.md",
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
            "platforms.md",
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
            "development.md",
            "development-plugins.md",
          ],
        },
        {
          text: "有过开发经验？",
          collapsible: true,
          prefix: "dev-migrate/",
          children: [
            "README.md",
          ],
        },
        {
          text: "基础知识",
          collapsible: true,
          prefix: "basics/",
          children: [
            "README.md",
            "dependency-injection.md",
            "logging.md",
          ]
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
            "dependency.md",
            "publishing.md",
          ],
        },
        {
          text: "UI",
          collapsible: true,
          prefix: "ui/",
          children: [
            "README.md",
            "iconexpr.md",
          ]
        },
        "events.md",
        "uri-navigation.md",
        "components.md",
        {
          text: "提醒",
          collapsible: true,
          prefix: "notifications/",
          children: [
            "index.md",
            "notification-content.md",
            "notification-channels.md",
            "advanced.md",
          ],
        },
        "lessons-service.md",
        "settings-page.md",
        {
          text: "规则集",
          collapsible: true,
          prefix: "ruleset/",
          children: [
            "README.md",
          ]
        },
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
          text: "旧版文档",
          collapsible: true,
          prefix: "legacy/",
          children: [
            "README.md",
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
