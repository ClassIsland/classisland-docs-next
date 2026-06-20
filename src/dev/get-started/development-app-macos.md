# 在 macOS 配置 ClassIsland **本体**开发环境

## 开发环境

**首先确保您的系统满足以下要求：**

- 最低系统要求 macOS 12 Monterey，推荐 macOS 14 Sonoma 及更高的系统版本

对于 Mac，要在本地进行开发，**您需要安装以下负载和工具**：

- 访问 Microsoft，获取[.NET 8.0 SDK](https://dotnet.microsoft.com/zh-cn/download/dotnet/8.0) 及 [.NET 9.0 SDK](https://dotnet.microsoft.com/zh-cn/download/dotnet/9.0)
- 访问 [App Store](https://apps.apple.com/cn/app/xcode/id497799835) 或 [Apple Developer](https://developer.apple.com/cn/xcode/resources/)，获取  Xcode 及 Command Line Tools
- [JetBrains Rider（建议）](https://www.jetbrains.com/zh-cn/rider/) 或 [Visual Studio Code](https://code.visualstudio.com) 
- .NET macOS 工作负荷
- [Git](https://git-scm.com/)

## 拉取代码

您可以在 Fork 了本仓库后，通过 Git 将代码克隆到本地，然后开始开发。

要克隆仓库，您可以直接在 JetBrains Rider 或 Visual Studio Code 中克隆，也可以通过命令行克隆。

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

## 开发

### 前置条件

##### 安装 .NET macOS 工作负荷

要安装 .NET macOS 工作负荷，转到“终端”并运行如下的 Bash 代码：

```shell
dotnet workload install macos
```

### 开发、构建并运行项目

##### JetBrains Rider

在 JetBrains Rider 中，开发、构建与运行 ClassIsland 的操作与在 Windows 平台上无异。

##### Visual Studio Code

在 Visual Studio Code 中，要构建并运行项目，运行：

```shell
dotnet restore
dotnet build ClassIsland.Desktop/ClassIsland.Desktop.csproj -c Debug
dotnet run --project ClassIsland.Desktop/ClassIsland.Desktop.csproj
```

### 关于 App 公证与门禁机制

由于 macOS 的 GateKeeper 保护机制，系统默认将不会允许打开未经过公证（Notarization）的 App。要绕过 GateKeeper 进行调试，转到“终端”并运行如下的 Bash 代码：

```shell
sudo spctl --master-disable
```

并转到**系统设置 → 隐私与安全性**，选择“任何来源”。

要详细了解 macOS 中的门禁和运行时保护，请参阅[这篇文章](https://support.apple.com/zh-cn/guide/security/sec5599b66df/)。

### 关于 Mac 上的 .NET Framework

在 macOS 中，不支持 .NET Framework，`net472` 编译目标不可用，开发过程中应仅使用 .NET 8 或 .NET 9。

