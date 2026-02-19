import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en-us/": [
    "",
    {
      text: "Home",
      link: "index.md",
    },
  ],
  "/en-us/app/": [
    {
      text: "Application Help",
      children: [
        "index.md",
        "setup.md",
        "basic.md",
        {
          text: "Profile Settings",
          prefix: "profile/",
          children: [
            "README.md",
            "classplan.md",
            "time-layout.md",
            "subject.md",
          ],
        },
        {
          text: "Migrate Schedule",
          prefix: "migrate/",
          children: [
            "README.md",
          ],
        },
        "notifications.md",
        "uri-navigation.md",
        "backup.md",
        "advanced.md",
        {
          text: "Troubleshooting",
          prefix: "faq/",
          children: [
            "faq.md",
            "reporting-issue.md",
          ],
        },
      ],
    },
  ],
  "/en-us/management/": [
    {
      text: "Central Control",
      children: [
        "README.md",
        "client-identify.md",
        "connect-to-mgmt-server.md",
        "configure.md",
        "policy.md",
        "tutorial-create-management-config.md",
      ],
    },
  ],
  "/en-us/dev/": [
    {
      text: "Developer Documentation",
      children: [
        "README.md",
        {
          text: "Getting Started",
          prefix: "get-started/",
          children: [
            "development.md",
            "development-plugins.md",
          ],
        },
        {
          text: "Plugins",
          prefix: "plugins/",
          children: [
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
          text: "Notifications",
          prefix: "notifications/",
          children: [
            "index.md",
            "advanced-request.md",
          ],
        },
        "settings-page.md",
      ],
    },
  ],
  "/en-us/community/": [
    {
      text: "Community",
      children: [
        "README.md",
        "contributing.md",
      ],
    },
  ],
});