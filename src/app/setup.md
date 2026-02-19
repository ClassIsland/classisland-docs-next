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

首先，确保您的设备满足以下任意一条系统要求：

- Windows 10 及以上版本的系统，x86_64 或 ARM 架构，且安装了[.NET 8.0 桌面运行时](https://dotnet.microsoft.com/zh-cn/download/dotnet/thank-you/runtime-desktop-8.0.7-windows-x64-installer)
- macOS Big Sur 11 或更高版本
- Debian 10（或其衍生版本）或更高版本


除此以外，您的设备还需满足以下推荐性要求：

- 4GB 及以上的运行内存

ClassIsland 的部分功能只在部分平台上可用，详细可见文章[平台功能](./appendix/platforms.md)。

## 下载应用本体

::: note 高级

如果您想体验最新的功能，可以前往[GitHub Actions](https://github.com/ClassIsland/ClassIsland/actions/workflows/build_release.yml)下载包含最新功能的构建。如果您想自行构建 ClassIsland，请参考[开发文档](../dev/get-started/devlopment.md)。
:::

您可以通过多种渠道下载到 ClassIsland。

### 官网下载（推荐）

对于普通用户，可以在以下渠道下载到本应用，请根据自身网络环境选择合适的渠道。

- [**ClassIsland 官网（推荐）**](https://classisland.tech/download)
- [GitHub Releases 最新正式版](http://github.com/ClassIsland/ClassIsland/releases/latest)
- [GitHub Releases 最新测试版（不建议在正式生产环境下使用）](http://github.com/ClassIsland/ClassIsland/releases)

<a id="third-party-downloads"></a>
::: note 其它下载渠道

如果您的网络环境不支持您从以上渠道下载，您可以通过下列的非官方镜像下载，然后通过内置的应用更新升级到最新版本。

| 下载链接 | 密码 | 来源 | 更新日期 | 能否更新至v2 |
|:--:|:--:|:--:|:--:|:--:|
| <https://wwz.lanzouv.com/b00tao8lwb> | 0556 | [MC_Sky](https://bilibili.com/read/cv35699004) | 2024-06-22 | 否 [^3] |
| <https://pan.quark.cn/s/40d1dca97c3d> | | | 2024-08-07 | 否 [^3] |

感谢以上提供镜像的同学。
:::

### 应用市场下载

您也可以在以下应用市场搜索“ClassIsland”下载本应用：

- UOS 应用商店

### 包管理器下载

您也可以在支持的操作系统上安装以下社区维护的包来安装本应用：

- [classisland-bin](https://aur.archlinux.org/packages/classisland-bin)^AUR^
- [classisland](https://aur.archlinux.org/packages/classisland)^AUR^

## 安装应用

:::: tabs

@tab Windows / Linux 便携版

下载完成后，将软件压缩包解压到一个**独立的文件夹（运行路径不能有中文 [^2]）**，运行软件即可开始使用。

解压时请不要解压到网盘同步文件夹、【下载】文件夹中，否则可能会出现**文件无法读写、文件丢失**等问题。

::: tip
本软件会在该文件夹中储存所有配置。在配置完成后，您可以直接将该文件夹带到学校使用。
:::

@tab macOS 安装版（.pkg）

ClassIsland for Mac 采用 .pkg 安装包的形式分发，您在打开安装包后根据指引即可完成安装。

@tab Linux 安装版（.deb）

ClassIsland for Linux 采用 .deb 安装包的形式分发，您在打开安装包后根据指引即可完成安装。在部分系统（如统信 UOS 上）您可能需要启用开发者模式才能从 .deb 包安装 ClassIsland。

您也可以使用以下命令安装 ClassIsland:

``` bash
sudo apt install ./你实际下载的文件名.deb
```

@tab Windows 7（不支持）

ClassIsland 2 不支持在 Windows 7 上运行。

::::

## 遇到问题？

如果安装时遇到问题，请参阅[常见问题](./faq/faq.md#安装时)文章。如果问题无法解决，您可以[在社区求助](../community/README.md)。

## 开始使用

首次启动时，会有一个简短的欢迎向导来引导您完成本软件的基本设置，并展示软件的一些基本操作。如果您要进一步了解本软件，您可以继续阅读本文档。

[^1]: Windows 7 生命周期策略：<https://learn.microsoft.com/zh-cn/lifecycle/products/windows-7>。Windows 7 ESU 结束支持于 2023/1/10。
[^2]: 可能会导致应用在更新时卡住无法更新。
[^3]: 我们未来可能会加入v1升级至v2的通道，但目前无法直接升级。
