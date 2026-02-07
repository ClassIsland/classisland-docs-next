# Installation & Getting Started

This article will introduce how to install and start using ClassIsland.

## Check System Requirements

First, ensure your device meets the following recommended requirements:

- Windows 10 or later, x86_64 architecture
- Installed [.NET 8.0 Desktop Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-8.0.1-windows-x64-installer)
- 4GB or more RAM

::: details Installing ClassIsland on Windows 7

> [!caution]
> **Using ClassIsland on Windows 7 is not recommended.** If you insist on using ClassIsland on Windows 7, **be sure to follow the steps below** to complete the environment setup, otherwise, you may encounter **serious memory leak issues([ClassIsland#91](https://github.com/ClassIsland/ClassIsland/issues/91))**. 

> [!caution]
> If you previously enabled ClassIsland to run on Windows 7 by setting Environment Variables or running a Repair Tool, please follow the instructions in [this article](https://docs.classisland.tech/en-us/app/appendix/revert-win7-patching.html) to roll back the repair, as this method may cause incompatibility with some .NET Core applications.

Additionally, **Microsoft support for Windows 7 ended on 2020/1/14** [^1]. If you encounter system-related issues on Windows 7, **the developers may not address them.** Some features may also be unavailable on systems below Windows 10. If you accept these limitations, please continue reading.

1. **Install Dependencies**

    You need to install additional dependencies according to your OS version as guided [here](https://learn.microsoft.com/en-us/dotnet/core/install/windows?tabs=net80#additional-deps).

    For Windows 7, the following additional dependencies are required:

    - Microsoft Visual C++ 2015-2019 Redistributable [64-bit](https://aka.ms/vs/16/release/vc_redist.x64.exe) / [32-bit](https://aka.ms/vs/16/release/vc_redist.x86.exe)
    - Windows Update KB3063858 [64-bit](https://www.microsoft.com/download/details.aspx?id=47442) / [32-bit](https://www.microsoft.com/download/details.aspx?id=47409)

2. Install [.NET 6.0.36 Desktop Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)

3. Go to the [ClassIsland Official Website](classisland.tech/download) to download the *Windows 7 Compatible Version* of Classisland.

::: OUTDATED Method

> [!important]
> **This method has been DEPRECATED**, and it's NOT responsible for continuing to use the Development Team.

1. **Install Dependencies**

    You need to install additional dependencies according to your OS version as guided [here](https://learn.microsoft.com/en-us/dotnet/core/install/windows?tabs=net80#additional-deps).

    For Windows 7, the following additional dependencies are required:

    - Microsoft Visual C++ 2015-2019 Redistributable [64-bit](https://aka.ms/vs/16/release/vc_redist.x64.exe) / [32-bit](https://aka.ms/vs/16/release/vc_redist.x86.exe)
    - Windows Update KB3063858 [64-bit](https://www.microsoft.com/download/details.aspx?id=47442) / [32-bit](https://www.microsoft.com/download/details.aspx?id=47409)

2. **Address Memory Leak Issues**

    .NET 7 and above runtimes cause serious memory leak issues on Windows 7. You need to run the following commands in the command prompt as an administrator to fix this:

    ```shell
    setx DOTNET_GCName clrgc.dll
    setx DOTNET_EnableWriteXorExecute 0
    ```

    The above commands set the following environment variables. If the commands fail, you can manually set the following variables.
    
    | Environment Variable | Value |
    | --- | --- |
    | [`DOTNET_GCName`](command:_github.copilot.openSymbolFromReferences?%5B%22DOTNET_GCName%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fquyilin%2FProjects%2Fclassisland-docs-next%2Fsrc%2Fen-us%2Fapp%2Fsetup.md%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fquyilin%2FProjects%2Fclassisland-docs-next%2Fsrc%2Fen-us%2Fapp%2Fsetup.md%22%2C%22path%22%3A%22%2FUsers%2Fquyilin%2FProjects%2Fclassisland-docs-next%2Fsrc%2Fen-us%2Fapp%2Fsetup.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A34%2C%22character%22%3A9%7D%7D%5D%5D "Go to definition") | [`clrgc.dll`](command:_github.copilot.openSymbolFromReferences?%5B%22clrgc.dll%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fquyilin%2FProjects%2Fclassisland-docs-next%2Fsrc%2Fen-us%2Fapp%2Fsetup.md%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fquyilin%2FProjects%2Fclassisland-docs-next%2Fsrc%2Fen-us%2Fapp%2Fsetup.md%22%2C%22path%22%3A%22%2FUsers%2Fquyilin%2FProjects%2Fclassisland-docs-next%2Fsrc%2Fen-us%2Fapp%2Fsetup.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A34%2C%22character%22%3A23%7D%7D%5D%5D "Go to definition") |
    | [`DOTNET_EnableWriteXorExecute`](command:_github.copilot.openSymbolFromReferences?%5B%22DOTNET_EnableWriteXorExecute%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fquyilin%2FProjects%2Fclassisland-docs-next%2Fsrc%2Fen-us%2Fapp%2Fsetup.md%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fquyilin%2FProjects%2Fclassisland-docs-next%2Fsrc%2Fen-us%2Fapp%2Fsetup.md%22%2C%22path%22%3A%22%2FUsers%2Fquyilin%2FProjects%2Fclassisland-docs-next%2Fsrc%2Fen-us%2Fapp%2Fsetup.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A35%2C%22character%22%3A9%7D%7D%5D%5D "Go to definition") | [`0`](command:_github.copilot.openSymbolFromReferences?%5B%220%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fquyilin%2FProjects%2Fclassisland-docs-next%2Fsrc%2Fen-us%2Fapp%2Fsetup.md%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fquyilin%2FProjects%2Fclassisland-docs-next%2Fsrc%2Fen-us%2Fapp%2Fsetup.md%22%2C%22path%22%3A%22%2FUsers%2Fquyilin%2FProjects%2Fclassisland-docs-next%2Fsrc%2Fen-us%2Fapp%2Fsetup.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A9%2C%22character%22%3A14%7D%7D%5D%5D "Go to definition") |

:::

:::

## Download the Application

For regular users, you can download the software from the following channels. Please choose the appropriate channel based on your network environment.

::: warning
The beta version includes the latest features but may also contain incomplete and unstable features. Please use with caution.

| Download Channel / Version | **🚀Stable Version** <br/>[![GitHub Release](https://img.shields.io/github/v/release/HelloWRC/ClassIsland?style=flat-square&logo=GitHub&color=%233fb950)](https://github.com/HelloWRC/ClassIsland/releases/latest)  | 🚧Beta Version<br/>[![GitHub Release](https://img.shields.io/github/v/release/HelloWRC/ClassIsland?include_prereleases&style=flat-square&logo=GitHub&label=BETA)](https://github.com/HelloWRC/ClassIsland/releases/) |
| -- | -- | -- |
| GitHub | [**GitHub Download**](https://github.com/HelloWRC/ClassIsland/releases/latest) | [GitHub Download](https://github.com/HelloWRC/ClassIsland/releases) |
| AppCenter | [**AppCenter Download**](https://install.appcenter.ms/users/hellowrc/apps/classisland/distribution_groups/public/releases/latest) | [AppCenter Download](https://install.appcenter.ms/users/hellowrc/apps/classisland/distribution_groups/publicbeta/releases/latest) |
:::

<a id="third-party-downloads"></a>
::: info Other Download Channels

If your network environment does not support downloading from the above channels, you can download from the following unofficial mirrors and then upgrade to the latest version through the built-in application update.

| Download Link | Password | Source |
|:--:|:--:|:--:|
| https://wwz.lanzouv.com/b00tao8lwb | 0556 | [MC_Sky](https://bilibili.com/read/cv35699004) |
| https://pan.quark.cn/s/40d1dca97c3d | | |

Thanks to the above contributors for providing the mirrors.
:::

::: info Advanced

If you want to experience the latest features, you can download the latest builds from [GitHub Actions](https://github.com/ClassIsland/ClassIsland/actions/workflows/build_release.yml). If you want to build ClassIsland yourself, please refer to the [development documentation](../dev/get-started/devlopment.md).
:::

### Full Version vs Trimmed Version

If you download from GitHub, you can choose to download the full version or the trimmed version of ClassIsland. The build named [`ClassIsland.zip`](command:_github.copilot.openSymbolFromReferences?%5B%22ClassIsland.zip%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fquyilin%2FProjects%2Fclassisland-docs-next%2Fsrc%2Fen-us%2Fapp%2Fsetup.md%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fquyilin%2FProjects%2Fclassisland-docs-next%2Fsrc%2Fen-us%2Fapp%2Fsetup.md%22%2C%22path%22%3A%22%2FUsers%2Fquyilin%2FProjects%2Fclassisland-docs-next%2Fsrc%2Fen-us%2Fapp%2Fsetup.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A15%7D%7D%5D%5D "Go to definition") is the full version; the build named [`ClassIsland_AssetsTrimmed.zip`](command:_github.copilot.openSymbolFromReferences?%5B%22ClassIsland_AssetsTrimmed.zip%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fquyilin%2FProjects%2Fclassisland-docs-next%2Fsrc%2Fen-us%2Fapp%2Fsetup.md%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fquyilin%2FProjects%2Fclassisland-docs-next%2Fsrc%2Fen-us%2Fapp%2Fsetup.md%22%2C%22path%22%3A%22%2FUsers%2Fquyilin%2FProjects%2Fclassisland-docs-next%2Fsrc%2Fen-us%2Fapp%2Fsetup.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A81%2C%22character%22%3A79%7D%7D%5D%5D "Go to definition") is the trimmed version of ClassIsland, which removes unnecessary resource files (fonts, documents, etc.) to reduce the application size while keeping the functionality unchanged.

::: note
The AppCenter download channel only provides the full version.
:::

### About .NET 6 Compatible Version
In order for ClassIsland to run on lower versions of Windows 10, we made .NET 6 Compatible Version. This compatible version will be synced from time to time with the upstream main repository. You can view the compatible version of the repository [here](https://github.com/ClassIsland/ClassIsland-net6/).

The following features are not available in Compatible Version:

- Plugins

## Extract the Software

After downloading, extract the software package to an **independent folder (the path cannot contain Chinese characters [^2])** and run the software to start using it.

Do not extract to a cloud sync folder or the [Downloads] folder, as this may cause **file read/write issues or file loss**.

::: tip
This software will store all configurations in this folder. After configuration, you can directly take this folder to school for use.
:::

## Encountering Issues?

If you encounter issues during installation, please refer to the FAQ article. If the issue cannot be resolved, you can [Seek Help in the Community](../community/README.md).

## Getting Started

On the first launch, there will be a short welcome guide to help you complete the basic setup of the software and demonstrate some basic operations.

You can also watch the [Getting Started Tutorial Video](https://www.bilibili.com/video/BV1fA4m1A7uZ/) to quickly get started with the software. If you want to learn more about the software, you can continue reading this document.

[^1]: Windows 7 Lifecycle Policy: <https://learn.microsoft.com/en-us/lifecycle/products/windows-7>. Windows 7 ESU support ended on 2023/1/10.
[^2]: May cause the application to get stuck during updates.
