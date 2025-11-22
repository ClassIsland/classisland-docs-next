# 配置 ClassIsland **插件**开发环境

## 开发环境

**首先确保您的系统满足以下要求：**

- Windows 10 1803 及以上的操作系统，x86_64 架构

要在本地进行开发，**您需要安装以下负载和工具**：

- [.NET 8.0 SDK](https://dotnet.microsoft.com/zh-cn/download/dotnet/8.0)
- [Visual Studio 2022](https://visualstudio.microsoft.com/)，包括【.NET 桌面开发】工作负载
- [Git](https://git-scm.com/)
- [Powershell Core](https://github.com/PowerShell/PowerShell)

## 克隆并构建 ClassIsland

开发插件的过程中需要使用 ClassIsland 源码以构建 ClassIsland 本体的可执行文件，以用于运行和调试插件。

::: note 为什么不使用 Releases 中发布的可执行文件
Release 版本的构建无法使用热重载（包括 XAML 热重载）功能，调试起来很麻烦。
:::

以下是克隆仓库的命令行：

::: tabs#clonemethod
@tab HTTP

```shell
git clone https://github.com/ClassIsland/ClassIsland.git
```

@tab SSH

```shell
git clone git@github.com:ClassIsland/ClassIsland.git
```

如果你不能访问github.com，你也可以尝试：

```shell
git clone ssh://git@ssh.github.com:443/ClassIsland/ClassIsland.git
```

@tab GitHub CLI

```shell
gh repo clone ClassIsland/ClassIsland
```

:::

克隆完成后，运行以下命令进入 ClassIsland 源代码目录。

``` shell
cd ClassIsland
```

仓库中包含了子模块。要正常编译 ClassIsland，还需要在克隆后和每次更新代码后运行以下命令初始化子模块：

``` shell
git submodule update --init --recursive
```

::: note 如果您操作超时：
可以更改 `.gitmodules` 文件为：
```
[submodule "vendors/EdgeTtsSharp"]
	path = vendors/EdgeTtsSharp
	url = ssh://git@ssh.github.com:443/ClassIsland/EdgeTtsSharp.git
```
再次尝试拉取。
请注意，该操作需要您拥有并正确配置SSH Key方可使用。
请在提交代码前撤回对相关文件的更改。
:::

克隆仓库后，默认处于 master 分支上，对应 ClassIsland 的稳定版本。建议在稳定版本的基础上开发插件，以获得较好的兼容性。如果您想签出到特定版本上，请使用对应版本的标签名（如 `1.5.0.2`）。

``` shell
# 如果要签出到某个版本上，请使用标签名：
git checkout 1.5.0.2
```

> [!caution]
> 请务必使用 Powershell Core（`pwsh.exe`）运行相关脚本，而不是使用系统内置的 Powershell（`powershell.exe`）。一般情况下 Windows 不会预装前者，所以您还需要手动安装 Powershell Core。

然后在 **Powershell Core** 运行以下脚本：

``` shell
./tools/plugin/build.ps1
```

> [!warning]
> 运行此脚本后，请重启 Visual Studio 等开发工具，以更新相关环境变量。

这个脚本会自动清理上次的构建，进行构建并设置相关的环境变量。这样就获得了 ClassIsland 的 Debug 构建。构建默认输出在 `（项目文件夹\ClassIsland\bin\Debug\net8.0-windows）`下。

## 更新

如果 ClassIsland 发布了新版本，或您更新了插件 SDK，在这种情况下需要更新 ClassIsland 仓库。要更新仓库，请先拉取，然后重新进行构建。

``` shell
git pull
git submodule update --init --recursive
./tools/plugin/build.ps1
```

## 开始开发插件

一切准备工作就绪后，继续阅读文章[开始编写插件](../plugins/create-project.md)，开始您的插件开发之旅吧！
