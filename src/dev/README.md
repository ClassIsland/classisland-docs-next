---
title: 开发文档
index: false
icon: laptop-code
category:
  - 开发指南
---

这里是 ClassIsland 开发文档，包含了进行 ClassIsland 开发的技术细节。

::: note ClassIsland 有些代码编写时间较早，开发者彼时对 C# 开发还不是很熟悉。如果看到了一些奇奇怪怪的代码，还请多多包容。
:::

ClassIsland 使用了如下技术栈。在参与 ClassIsland 开发或为 ClassIsland 开发插件等配套工具时，您最好对以下内容有基本的了解。

- 本项目基于 [.NET 8](https://learn.microsoft.com/zh-cn/dotnet/core/introduction) 开发，使用 [C#](https://learn.microsoft.com/zh-cn/dotnet/csharp/) 作为编程语言。
- 本项目使用了 [Avalonia](https://avaloniaui.net/) 作为 UI 框架，并使用了 [FluentAvalonia](https://github.com/amwx/FluentAvalonia) 主题。
- 本项目使用了控制反转（IoC）容器[Microsoft.Extensions.Hosting](https://learn.microsoft.com/zh-cn/dotnet/core/extensions/generic-host)作为依赖注入的实现。

**在开发时您可以参考以下的资源：**

- 本开发文档；
- [ClassIsland 源代码](https://github.com/ClassIsland/ClassIsland)：ClassIsland 源码在开发插件时还是很有参考价值的，可以增加对 API 的理解。
- [FluentAvalonia 的文档](https://amwx.github.io/FluentAvaloniaDocs/)和[源代码](hhttps://github.com/ClassIsland/ClassIsland)：这些资源在进行主题自定义时是很有用的；
- FluentAvalonia Demo 应用：这个应用可以快速查阅 FluentAvalonia 的控件，在开发时还是比较方便的。

如果您打算向 ClassIsland 做出代码贡献，**请务必先阅读 [贡献指南](https://github.com/ClassIsland/ClassIsland/blob/master/CONTRIBUTING.md)。**

## 我可以做什么

您可以通过以下方法来不同程度地扩展 ClassIsland 的功能。

- **[与 ClassIsland 跨进程联动](./ipc/README.md)：** 您可以通过跨进程通信技术，从其它进程访问 ClassIsland 的数据（如当前课表、当前上课科目等等），以及调用 ClassIsland 的功能。
- **[开发 ClassIsland 插件](./plugins/README.md)：** 您可以通过插件，轻松地扩展 ClassIsland 的功能，比如添加自定义组件、显示自定义提醒等等。同时也可以与跨进程联动配合，从其他进程调用插件功能。
- **修改 ClassIsland 本体：** 如果上面的方法不能满足您的需求，您也可以通过修改 ClassIsland 本体来实现更高程度的自定义。您也可以向 ClassIsland 代码仓库发起 PR，将您的更改合并到主分支上。

## 开始

- [配置 ClassIsland **本体**开发环境](./get-started/development.md)
- [配置 ClassIsland **插件**开发环境](./get-started/development-plugins.md)
- [了解有关 ClassIsland 开发的基础知识](basics/README.md)

## 调试菜单

::: danger 注意！
调试菜单中的功能仅供测试使用，如果您不知道您在做什么，请不要随意使用！
:::

在[【应用设置】→【关于】](classisland://app/settings/about)中连续点击应用图标 10 次，即可开启[调试](classisland://app/settings/debug)和[笔刷](classisland://app/settings/debug_brushes)界面。

## 目录

:::note
本部分的文档还在编写中，一些地方还没完工。
:::

本章节包含以下内容：

- **开始**
    - [配置 ClassIsland **本体**开发环境](./get-started/development.md)
    - [配置 ClassIsland **插件**开发环境](./get-started/development-plugins.md)
- [**基础知识**](basics/README.md)
    - [依赖注入](basics/dependency-injection.md)
    - [记录日志](basics/logging.md)
- [**插件**](./plugins/README.md)
    - [开始编写插件](./plugins/create-project.md)
    - [插件基础知识](./plugins/basics.md)
    - [插件入口类](./plugins/plugin-base.md)
    - [插件依赖](./plugins/dependency.md)
    - [发布插件](./plugins/publishing.md)
- [**UI**](./ui/README.md)
    - [图标表达式](./ui/iconexpr.md)
    - 内置控件
- [事件](events.md)
- [Uri 导航](uri-navigation.md)
- [组件](components.md)
- [提醒](./notifications/index.md)
- 扩展菜单
- [设置页面](settings-page.md)
- 档案
    - 档案附加设置
- [**跨进程通信**](./ipc/README.md)
    - [使用 IPC](./ipc/ipc.md)
    - [IPC 参考](./ipc/reference.md)
- [API 参考](https://api.docs.classisland.tech/)
