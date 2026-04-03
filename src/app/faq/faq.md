# 常见问题

这些是用户通常可以自行解决的问题，您可以通过下方的目录或搜索功能快速检索您遇到的问题。

::: tip 测试版本使用须知

ClassIsland 会在 Github Releases 发布新版本的“测试版本”（“预览版本”）。这些版本尚不成熟，可能存在一些未知的问题，其中有些问题可能还会很严重，影响您的使用。

如果遇到本页面未提到的问题，您还可以在[Github Discussions](https://github.com/ClassIsland/ClassIsland/discussions)里看看有没有类似的提问。

如果该问题此前从未被提及，请您辨别该问题是【程序bug所致】、【操作不当或不会操作所致】、【程序功能缺乏优化补充所致】中的哪一种，并分别在[【Issues — Bug反馈】](https://github.com/ClassIsland/ClassIsland/issues/new?template=BugReport.yml)、[【Discussions — Q&A】](https://github.com/ClassIsland/ClassIsland/discussions/new?category=q-a)、[【Issues — 功能请求】](https://github.com/ClassIsland/ClassIsland/issues/new?template=FeatureRequest.yml)提出。

:::

[[TOC]]

## 安装

安装时遇到的问题。

### 提示“You must install or update .NET to run this application.”

![1723087458369](../image/faq/1723087458369.png)

出现这种弹窗一般是没安装 .NET 8 运行时。请点击【Download it now】或从[本链接](https://dotnet.microsoft.com/zh-cn/download/dotnet/thank-you/runtime-desktop-8.0.7-windows-x64-installer)下载 .NET 运行时，并运行下载的安装程序安装 .NET 运行时。完成后重新打开本软件即可。

### 关于在 Windows 7 系统的安装与使用

我们已停止对 Windows 7 的支持；如需在 Windows 7 上使用 ClassIsland，请参考[在 Windows 7 中安装 ClassIsland](../setup.md#检查系统需求)。

## 系统

与系统相关的问题。

### 设置开机自启后，开机时 ClassIsland 无法正常自启动

这可能是因为 ClassIsland 的自启动项被禁用了，或者被安全软件拦截。您可以在安全软件的相关功能页面检查是否拦截了 ClassIsland 的自启动项目，或者在任务管理器的【启动应用】页面检查相关启动项目是否被禁用。

如果您在【兼容性设置】中设置了以管理员身份运行 ClassIsland，可能也无法通过应用内置的自启动设置自启动。您可以通过安装[以管理员身份自启动](https://github.com/ClassIsland/StartUpAsAdmin)插件创建任务计划解决这个问题。

### ClassIsland 无法置顶到某些窗口上

在正常使用 ClassIsland 并将窗口层级设置为置顶时，有时可能会出现无法置顶到一些应用（如任务管理器、UWP 应用等）窗口上的情况（如图）。

![1732330758619](image/faq/1732330758619.png)

产生这种情况的原因是 ClassIsland 所在的窗口段低于这些应用，或者是这些窗口也拥有置顶状态。您可以通过安装[UIAccess 提权](https://github.com/HelloWRC/GrantUiAccess)插件来解决这个问题。

## 界面

### 在打开某些界面（如外观设置）时界面冻结

这个问题和 WPF 的渲染机制有关，通常在切换桌面（如锁屏、显示 UAC 弹窗、切换用户等）后发生。目前没有比较好的方法从根源上解决这个问题。您可以通过重启应用解决这个问题。

详细讨论见[#172](https://github.com/ClassIsland/ClassIsland/issues/172)。

> [!note]
> 有些时候让前台窗口进入全屏也能解决这个问题。

## 配置文件

### 正常使用时，电脑/大屏重启后配置文件丢失/回档

这种情况可能是电脑意外断电，导致配置文件没有完全保存导致的。目前 ClassIsland 已尝试通过定期备份等方式尽量减小意外断电对配置文件的影响。如果您的配置文件不幸丢失或损坏，可以在应用目录下的`Backups`文件夹内找到定期创建的备份，并进行恢复；或者通过应用内置的恢复模式恢复此前的自动备份。详细请参阅[应用数据备份](../backup.md#恢复备份)文章。
