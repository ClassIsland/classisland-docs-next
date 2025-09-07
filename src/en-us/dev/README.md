---
title: Development Docs
index: false
icon: laptop-code
category:
  - Development Guide
---

This is the ClassIsland development documentation, containing technical details for ClassIsland development.

::: note Some code in ClassIsland was written relatively early, and the developer was not very familiar with C# development at that time. If you come across some peculiar-looking code, please be understanding.
:::

ClassIsland uses the following technology stack. When participating in ClassIsland development or developing plugins and supporting tools for ClassIsland, it is best to have a basic understanding of the following:

- This project is based on [.NET 8](https://learn.microsoft.com/zh-cn/dotnet/core/introduction), using [C#](https://learn.microsoft.com/zh-cn/dotnet/csharp/) as the programming language;
- This project uses WPF as the UI framework and the [MaterialDesignInXamlToolkit](https://github.com/MaterialDesignInXAML/MaterialDesignInXamlToolkit) theme;
- This project uses the Inversion of Control (IoC) container [Microsoft.Extensions.Hosting](https://learn.microsoft.com/zh-cn/dotnet/core/extensions/generic-host) for dependency injection implementation.

**During development, you can refer to the following resources:**

- This development documentation;
- [ClassIsland Source Code](https://github.com/ClassIsland/ClassIsland)：The ClassIsland source code is very valuable for reference when developing plugins, as it helps deepen the understanding of the API;
- [MaterialDesignInXamlToolkit Wiki](https://github.com/MaterialDesignInXAML/MaterialDesignInXamlToolkit/wiki) and [Source Code](https://github.com/MaterialDesignInXAML/MaterialDesignInXamlToolkit/): These resources are useful for theme customization;
- [MaterialDesignInXamlToolkit Demo App](https://github.com/MaterialDesignInXAML/MaterialDesignInXamlToolkit/releases/download/v4.8.0/DemoApp.zip): This application allows quick browsing of MaterialDesignInXamlToolkit controls and is quite convenient during development.

If you plan to contribute code to ClassIsland,  **please be sure to read the [Contributing Guide](https://github.com/ClassIsland/ClassIsland/blob/master/CONTRIBUTING.md) first.**

## What Can I Do

You can extend ClassIsland's functionality in the following ways:

- **Interact with ClassIsland across processes**: You can use inter-process communication technologies to access ClassIsland's data (such as the current schedule, current subject, etc.) from other processes and call ClassIsland's functions.
- **[Develop ClassIsland Plugins](./plugins/create-project.md)：** You can easily extend ClassIsland's functionality through plugins, such as adding custom components, displaying custom notifications, etc. This can also be combined with cross-process interaction to call plugin functions from other processes.
- **Modify ClassIsland itself:** If the above methods do not meet your needs, you can achieve a higher degree of customization by modifying ClassIsland itself. You can also submit a PR to the ClassIsland code repository to merge your changes into the main branch.
  
## Getting Started

- [Setting up ClassIsland **Core** development environment](./get-started/devlopment.md)
- [Setting up ClassIsland **Plugins** development environment](./get-started/devlopment-plugins.md)

## Debug Menu

::: danger Attention!
Features in the debug menu are for testing purposes only. If you are unsure what you are doing, please do not use them arbitrarily!
:::

Click the application icon 10 times consecutively in [App settings -> About](classisland://app/settings/about) to unlock the [Debug](classisland://app/settings/debug) and [Brushes](classisland://app/settings/debug_brushes) interfaces

## Table of Contents

:::note
This section of the documentation is still being written, and some parts are not yet complete.
:::

This chapter includes the following content:

- **Getting Started**
    - [Setting up ClassIsland **Core** development environment](./get-started/devlopment.md)
    - [Setting up ClassIsland **Plugins** development environment](./get-started/devlopment-plugins.md)
- **插件**
    - [Start writing plugins](./plugins/create-project.md)
    - [Plugin Basics](./plugins/basics.md)
    - [Plugin Entry class](./plugins/plugin-base.md)
    - [Publishing plugins](./plugins/publishing.md)
- [Basics](basics.md)
- [Events](events.md)
- [URI Navigation](uri-navigation.md)
- Built-in controls
- [Components](components.md)
- [Notifications](./notifications/index.md)
- Extended Menu
- [The Settings Page](settings-page.md)
- Profile Additional Settings
- Reference Docs
