# Setting up the ClassIsland Core Development Environment

## Development Environment

**First, ensure your system meets the following requirements:**

- Windows 10 version 1803 or later, x86_64 architecture

To develop locally, you need to install **the following workloads and tools**:

- [.NET 8.0 SDK](https://dotnet.microsoft.com/zh-cn/download/dotnet/8.0)
- [Visual Studio 2022](https://visualstudio.microsoft.com/), including the [.NET Desktop Development] workload
- [Git](https://git-scm.com/)

## Pulling the Code

After forking this repository, you can clone the code to your local machine using Git and begin development.

To clone the repository, you can either clone directly within Visual Studio or use the command line.

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
The repository name is for reference only; please use the name of your own Fork.
:::

## Compilation and Running

1. Open the solution `ClassIsland.sln` in Visual Studio.
2. Set the project `ClassIsland` as the startup project.
3. Click 【Start】 to compile the project and begin debugging.
