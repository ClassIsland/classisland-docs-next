---
icon: fa-solid fa-download
category:
  - 使用指南
tag:
  - 应用
  - 安装
---

# 安装与开始

本文将介绍如何安装与开始使用 ClassIsland。

## 检查系统需求

首先，确保您的设备满足以下推荐需求：

- Windows 10 及以上版本的系统，x86_64 架构
> [!caution]
> 建议Windows 10版本不低于1803，在1709及以前的希沃系统上会遇到EdgeTTS引发程序卡死，详细请见[#163](https://github.com/ClassIsland/ClassIsland/issues/163)和[#926](https://github.com/ClassIsland/ClassIsland/issues/926)
- 已安装 [.NET 8.0 桌面运行时](https://dotnet.microsoft.com/zh-cn/download/dotnet/thank-you/runtime-desktop-8.0.1-windows-x64-installer)
- 4GB 及以上的运行内存

::: details 在 Windows 7 中安装 ClassIsland

> [!caution]
> **不建议在 Windows 7 中使用 ClassIsland。**如果您执意要在 Windows 7 中使用 ClassIsland，请**务必按照以下步骤**完成准备工作，否则可能会出现**严重的内存泄漏问题**。（ ClassIsland#91 ）

> [!caution]
> 如果您之前使用了设置环境变量或运行修复工具的方式使 ClassIsland 可以在 Windows 7 上运行，请按照[此文章](./appendix/revert-win7-patching.md)的指引回滚修复操作，因为此方法可能会引起部分 .NET Core 应用不兼容。

此外，**微软对 Windows 7 的支持已经在 2020/1/14 终止** [^1]。如果您在 Windows 7 中遇到系统相关问题， **开发者可能不会受理。** 并且在 Windows 10 以下的系统中，部分功能可能不可用。如果您接受这些缺陷，请继续阅读下文。

1. **安装依赖项**

    您需要按照[此处](https://learn.microsoft.com/zh-cn/dotnet/core/install/windows?tabs=net60#additional-deps)的指引根据您的操作系统版本安装额外的依赖项。

    对于 Windows 7，以下是您需要额外安装的依赖项：

    - Microsoft Visual C++ 2015-2019 Redistributable [64 位](https://aka.ms/vs/16/release/vc_redist.x64.exe) / [32 位](https://aka.ms/vs/16/release/vc_redist.x86.exe)
    - KB3063858 [64 位](https://www.microsoft.com/download/details.aspx?id=47442) / [32 位](https://www.microsoft.com/download/details.aspx?id=47409)

2. 安装 [.NET 6 桌面运行时](https://dotnet.microsoft.com/zh-cn/download/dotnet/thank-you/runtime-desktop-6.0.33-windows-x64-installer)。
3. 前往 [ClassIsland 官网](https://classisland.tech/download)下载 Windows 7 兼容版的 ClassIsland。

关于此兼容版的详细信息，请参阅下文。

:::

## 下载应用本体

对于普通用户，可以在以下渠道下载到本软件，请根据自身网络环境选择合适的渠道。

- [**ClassIsland 官网（推荐）**](https://classisland.tech/download)
- [GitHub Releases](http://github.com/ClassIsland/ClassIsland/releases/latest)

<a id="third-party-downloads"></a>
::: info 其它下载渠道

如果您的网络环境不支持您从以上渠道下载，您可以通过下列的非官方镜像下载，然后通过内置的应用更新升级到最新版本。

| 下载链接 | 密码 | 来源 |
|:--:|:--:|:--:|
| <https://wwz.lanzouv.com/b00tao8lwb> | 0556 | [MC_Sky](https://bilibili.com/read/cv35699004) |
| <https://pan.quark.cn/s/40d1dca97c3d> | | |

感谢以上提供镜像的同学。
:::

::: info 高级

如果您想体验最新的功能，可以前往[GitHub Actions](https://github.com/ClassIsland/ClassIsland/actions/workflows/build_release.yml)下载包含最新功能的构建。如果您想自行构建 ClassIsland，请参考[开发文档](../dev/get-started/devlopment.md)。
:::

### 完整版 vs 精简版

如果您使用 GitHub 下载，您可以选择下载 ClassIsland 的完整版或精简版。文件名为`ClassIsland.zip`的构建是完整版；文件名为`ClassIsland_AssetsTrimmed.zip`的构建是 ClassIsland 的精简版，移除了不必要的资源文件（字体、文档等）以缩小应用体积，同时功能保持不变。

::: note
AppCenter 下载渠道仅提供完整版。
:::

### 关于 .NET 6 兼容版

为了使 ClassIsland 正常在 Windows 10 以下的低版本系统运行，我们制作了 .NET 6 兼容版本。此兼容版本会不定期与上游主仓库同步。您可以在[此处](https://github.com/ClassIsland/ClassIsland-net6/)查看兼容版仓库。

以下功能在此兼容版不可用：

- 插件功能

## 解压软件

下载完成后，将软件压缩包解压到一个**独立的文件夹（运行路径不能有中文 [^2]）**，运行软件即可开始使用。

解压时请不要解压到网盘同步文件夹、【下载】文件夹中，否则可能会出现**文件无法读写、文件丢失**等问题。

::: tip
本软件会在该文件夹中储存所有配置。在配置完成后，您可以直接将该文件夹带到学校使用。
:::

## 遇到问题？

如果安装时遇到问题，请参阅[常见问题](./faq/faq.md#安装时)文章。如果问题无法解决，您可以[在社区求助](../community/README.md)。

## 开始使用

首次启动时，会有一个简短的欢迎向导来引导您完成本软件的基本设置，并展示软件的一些基本操作。

您也可以观看[入门教程视频](https://www.bilibili.com/video/BV1fA4m1A7uZ/)来快速上手本软件。如果您要进一步了解本软件，您可以继续阅读本文档。

[^1]: Windows 7 生命周期策略：<https://learn.microsoft.com/zh-cn/lifecycle/products/windows-7>。Windows 7 ESU 结束支持于 2023/1/10。
[^2]: 可能会导致应用在更新时卡住无法更新。
