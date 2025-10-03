# 配置 ClassIsland **本体**开发环境

## 开发环境

**首先确保您的系统满足以下要求：**

- Windows 10 1803 及以上的操作系统，x86_64 架构

要在本地进行开发，**您需要安装以下负载和工具**：

- [.NET 8.0 SDK](https://dotnet.microsoft.com/zh-cn/download/dotnet/8.0)
- [Visual Studio 2022](https://visualstudio.microsoft.com/)，包括【.NET 桌面开发】工作负载
- [适用于 Windows 11 的 Windows SDK](https://developer.microsoft.com/zh-cn/windows/downloads/windows-sdk/)，版本10.0.26100
- [Git](https://git-scm.com/)
- [Powershell Core](https://github.com/PowerShell/PowerShell)

## 拉取代码

您可以在 Fork 了本仓库后，通过 Git 将代码克隆到本地，然后开始开发。

要克隆仓库，您可以直接在 Visual Studio 中克隆，也可以通过命令行克隆。

::: tabs#clonemethod
@tab HTTP

```shell
git clone https://github.com/ClassIsland/ClassIsland.git
```

@tab SSH

```shell
git clone git@github.com:ClassIsland/ClassIsland.git
```

@tab GitHub CLI

```shell
gh repo clone ClassIsland/ClassIsland
```
:::

::: warning
仓库名仅供参考，具体的仓库名请以您的 Fork 为准。
:::

仓库中包含了子模块。要正常编译 ClassIsland，还需要在克隆后和每次更新代码后在仓库根目录运行以下命令初始化子模块：

``` shell
git submodule update --init --recursive
```

## 编译与运行

在首次编译运行时，需要先手动构建一次。

> [!caution]
> 请务必使用 Powershell Core（`pwsh.exe`）运行相关脚本，而不是使用系统内置的 Powershell（`powershell.exe`）。一般情况下 Windows 不会预装前者，所以您还需要手动安装 Powershell Core。

在 **Powershell Core** 运行以下脚本：

``` shell
./tools/plugin/build.ps1
```

以上操作只用进行一次。在执行完上述操作后，可以按照下述步骤在 Visual Studio 里正常编译和运行 ClassIsland 了。

1. 在 Visual Studio 中打开解决方案 `ClassIsland.sln`
2. 将项目 `ClassIsland` 设置为启动项目
3. 点击【启动】即可编译项目，并开始调试。
