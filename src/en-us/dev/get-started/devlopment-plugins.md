# Setting up the ClassIsland Plugin Development Environment

::: warning
This documentation is pending completion.
:::

## Development Environment

**First, ensure your system meets the following requirements:**

- Windows 10 version 1803 or later, x86_64 architecture

To develop locally, you need to **install the following workloads and tools**:

- [.NET 8.0 SDK](https://dotnet.microsoft.com/zh-cn/download/dotnet/8.0)
- [Visual Studio 2022](https://visualstudio.microsoft.com/), including the [.NET Desktop Development] workload
- [Git](https://git-scm.com/)

## Clone and Build ClassIsland

The ClassIsland source code is required during plugin development to build the ClassIsland core executable, which is used for running and debugging plugins.

::: note Why not use the executable released in Releases?
Release builds cannot utilize hot reload (including XAML hot reload) functionality, making debugging cumbersome.
:::

Below are the command lines to clone the repository:

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

After cloning, run the following command to enter the ClassIsland source code directory.

``` shell
cd ClassIsland
```

Currently, the plugin feature has not been released to the `master` branch; you need to check out the development branch `dev`. If you wish to check out a specific version, use the corresponding version tag (e.g., `1.4.3.0`):

``` shell
git checkout dev    # Check out to the dev branch
# To check out a specific version, use the tag name:
# git checkout 1.4.3.0
```

Then, run the following command in PowerShell to build ClassIsland:

``` powershell
dotnet build -c Debug -p:Version=$(git describe --tags --abbrev=0)
```

This will give you a Debug build of ClassIsland. The build output is by default located in `(Project Folder)\ClassIsland\bin\Debug\net8.0-windows`.

## Updating

If ClassIsland releases a new version, or if you update the plugin SDK, you need to update the ClassIsland repository. To update the repository, first pull the latest changes, then rebuild.

``` shell
git pull
dotnet clean
dotnet build -c Debug
```

## Start Developing Plugins

With all preparations complete, continue reading the article [Start Developing Plugins](../plugins/create-project.md) to begin your plugin development journey!
