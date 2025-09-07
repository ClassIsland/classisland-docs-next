# Getting Started with Plugin Development

This article will guide you through creating, debugging, and running a ClassIsland plugin project.

::: warning
The content covered in this article is still under development and may change at any time. Please pay attention to documentation updates.
:::

Before starting, you need to set up the plugin development environment according to the instructions in [Setting up the ClassIsland Plugin Development Environment.](../get-started/devlopment-plugins.md)

## Using a Template

You can use a project template to quickly start development.

::: info To be added.
:::

## Manually Creating a Project

The following steps use Visual Studio 2022 as an example.

1. Create a project with the template 【WPF Class Library】, selecting the 【.NET 8】 target framework.
2. After the project is created, right-click the project in 【Solution Explorer】, and click 【Manage NuGet Packages…】 in the context menu.
    ![1721876643763](image/create-project/1721876643763.png)
3. Search for and install the package 【ClassIsland.PluginSdk】.
    ![1721876680236](image/create-project/1721876680236.png)
   ::: info Using Preview SDK
You can obtain the latest SDK packages built from GitHub Actions by adding the GitHub Packages source. You need to create a GitHub personal access token (classic) following [this passage](https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), granting at least `read:packages` permissions. Then use the following command to add ClassIsland's GitHub Packages NuGet source:

    ``` shell
    dotnet nuget add source --username（你的用户名） --password（你的 GitHub 个人访问令牌） --store-password-in-clear-text --name github "https://nuget.pkg.github.com/ClassIsland/index.json"
    ```
    :::

4. Open the project file, add the `EnableDynamicLoading property` to allow the plugin to be dynamically loaded, and set the `ExcludeAssets` property to runtime on the `ClassIsland.PluginSdk` reference to prevent plugin SDK dependencies from flowing into the build output.
    ```xml title="MyPlugin.csproj" hl_lines="9 13"
    <Project Sdk="Microsoft.NET.Sdk">

        <PropertyGroup>
            <TargetFramework>net8.0-windows</TargetFramework>
            <Nullable>enable</Nullable>
            <UseWPF>true</UseWPF>
            <ImplicitUsings>enable</ImplicitUsings>
            <PlatformTarget>x64</PlatformTarget>
            <EnableDynamicLoading>True</EnableDynamicLoading>
        </PropertyGroup>
        <ItemGroup>
            <PackageReference Include="ClassIsland.PluginSdk" Version="1.0.0">
                <ExcludeAssets>runtime</ExcludeAssets>
            </PackageReference>
        </ItemGroup>
    </Project>

    ```

## Plugin Manifest File

The plugin manifest file contains basic information about the plugin, such as the plugin entry assembly.

Create a file named `manifest.yml` in the project directory, and in its 【Properties】, set the 【Copy to Output Directory】 property to 【Copy if newer】. This ensures the plugin manifest file is automatically copied to the output directory during build.

The manifest file has the following properties:

| Property Name | Type | Required? | Description |
| -- | -- | -- | -- |
| id | `string` | **Yes** | The unique id of the plugin |
| entranceAssembly | `string` | **Yes** | The plugin entry assembly. The plugin entry point will be searched for here when loading the plugin. |
| apiVersion | `Version` | **Yes** | The ClassIsland version this plugin targets. This plugin will only work on ClassIsland versions equal to or higher than this. |
| name | `string` | No | The display name of the plugin |
| description | `string` | No | Description of the plugin |
| url | `string` | No | The plugin homepage URL |
| author | `string` | No | The plugin author |
| version | `Version` | No | The plugin version, e.g., `1.0.0.0` |
| icon | `string` | No | The plugin icon filename. Default value is `icon.png` |
| readme | `string` | No | The plugin readme filename. Default is `README.md` |

Here is an example of a manifest file:

```yaml title="manifest.yml"
id: examples.helloworld  # Plugin ID
name: Hello world!  # Plugin name
apiVersion: 1.4.2.0  # Targeted ClassIsland version
description: Displays a "Hello world" prompt on startup.  # Plugin description
entranceAssembly: "HelloWorldPlugin.dll"  # Plugin entry assembly
url: https://github.com/ClassIsland/ExamplePlugins  # Plugin URL
author: HelloWRC  # Plugin author
version: 1.0.0.0  # Plugin version
```

## Plugin Entry Point

When loading the plugin, the entry assembly marked in the manifest file will be searched for a class that inherits from `ClassIsland.Core.Abstractions.PluginBase` and is decorated with the `ClassIsland.Core.Attributes.PluginEntrance` attribute. This class will be used as the plugin entry point, and its `Initialize` method will be called to run the plugin's custom initialization function.

Create a class named `Plugin` that inherits from `ClassIsland.Core.Abstractions.PluginBase`, and add the `ClassIsland.Core.Attributes.PluginEntrance` attribute to the class.

```csharp title="Plugin.cs"
using ClassIsland.Core.Abstractions;
using ClassIsland.Core.Attributes;
using ClassIsland.Core.Controls.CommonDialog;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace HelloWorldPlugin;

[PluginEntrance]
public class Plugin : PluginBase
{
    public override void Initialize(HostBuilderContext context, IServiceCollection services)
    {
    }
}
```

Then add the following statement to the `Initialize` method to display a "Hello world!" prompt when the plugin is loaded.

```csharp title="Plugin.cs" hl_lines="9"
// ...
namespace HelloWorldPlugin;

[PluginEntrance]
public class Plugin : PluginBase
{
    public override void Initialize(HostBuilderContext context, IServiceCollection services)
    {
        CommonDialog.ShowInfo("Hello world!");
    }

    // ...
}
```

::: tip
You can also register related services in `Initialize`. For details, please refer to [this article](./basics.md#依赖注入)。
:::

For detailed usage of the plugin entry class, you can refer to the documentation [Plugin entry class](./plugin-base.md)。

## Configuring Themes

Introducing control styles in the plugin requires specifying the default theme dictionary.

Create a new `AssemblyInfo.cs` and write the following content to specify that the theme resource dictionary is located in the current assembly:

``` csharp title="AssemblyInfo.cs"
using System.Windows;

[assembly: ThemeInfo(
    ResourceDictionaryLocation.None, 
    ResourceDictionaryLocation.SourceAssembly
)]
```

::: note
For detailed usage of this attribute, please refer to the [Docs](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.themeinfoattribute?view=windowsdesktop-8.0)。
:::

Create `Themes/Generic.xaml` and write the following content to reference the theme resource dictionary:

``` xml title="Themes/Generic.xaml"
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
    <ResourceDictionary.MergedDictionaries>
        <ResourceDictionary Source="pack://application:,,,/ClassIsland.Core;;;component/ThemeBase.xaml"/>
    </ResourceDictionary.MergedDictionaries>
</ResourceDictionary>
```

## Configuring the Startup Project

The ClassIsland core executable is required as a host to run and debug the plugin.

:::tabs
@tab Visual Studio

1. Go to 【Debug】 -> 【(Project Name) Debug Properties】 to open the 【Launch Profiles】 window.
![1721876856393](image/create-project/1721876856393.png)
2. Create a new 【Executable】 launch profile.
![1721876883260](image/create-project/1721876883260.png)
3. In the 【Executable】 field, enter the path to the ClassIsland executable built in [Setting up the Plugin Development Environment](../get-started/devlopment-plugins.md#克隆并构建-classisland)
4. Set the 【Working Directory】 field to the folder containing the ClassIsland executable.
5. In the 【Command Line Arguments】 field, enter the following argument to make ClassIsland load plugins from the current plugin's output directory on startup: 
```plaintext
-epp（Your current plugin project's output directory, e.g., E:\Coding\ExamplePlugins\HelloWorldPlugin\bin\Debug\net8.0-windows）
```

![1721876903698](image/create-project/1721876903698.png)

@tab Manually editing `launchSettings.json`

Add the following content to `launchSettings.json`:

```json {4-9} title="launchSettings.json"
{
    "profiles": {
        // ...
        "配置文件 1": {
            "commandName": "Executable",
            "executablePath": "...",  // (1)
            "commandLineArgs": "-epp ...",  // (2)
            "workingDirectory": "..."  // (3)
        }
    }
}
```

1. Replace this with the path to the ClassIsland executable built in [Setting up the Plugin Development Environment](../get-started/devlopment-plugins.md#clone-and-build-classisland).
2. Replace the argument with your current plugin project's output directory, e.g., `E:\\Coding\\ExamplePlugins\\HelloWorldPlugin\\bin\\Debug\\net8.0-windows`
3. Replace this with the folder containing the ClassIsland executable built in [Setting up the Plugin Development Environment](../get-started/devlopment-plugins.md#clone-and-build-classisland).

:::

After completing the above configuration steps, close the 【Launch Profiles】 window, switch to the newly added launch profile, and start debugging. If everything is correct, you should see ClassIsland start normally and display the prompt box shown by the plugin.

![1721874637367](image/create-project/1721874637367.png)

🎉Congratulations! You have successfully created your first plugin!

## Next Steps

You can continue reading articles to learn more about the relevant API usage, or check out the [plugin examples](https://github.com/ClassIsland/ExamplePlugins) on Github.
