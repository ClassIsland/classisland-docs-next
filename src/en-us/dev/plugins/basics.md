# Plugin Basics

This section covers additional considerations for plugin development, building upon the [ClassIsland Development basics](../basics.md).

## Assembly Isolation

By default, different plugins are loaded into different Assembly Load Contexts ([AssemblyLoadContext](https://learn.microsoft.com/zh-cn/dotnet/core/dependency-loading/understanding-assemblyloadcontext)). This allows different plugins to reference different versions of the same dependency library without causing conflicts.

::: warning
Due to this feature, when two plugins contain type definitions with the same name, they are not the same type. Their types are identical only if they come from the same `Assembly` instance. For details, please refer to [this article](https://learn.microsoft.com/zh-cn/dotnet/core/dependency-loading/understanding-assemblyloadcontext#type-conversion-issues)。
:::

## Resource References

When referencing resources within the plugin assembly, you must use an absolute path; otherwise, the path will be resolved relative to the ClassIsland core assembly. For example:

``` plaintext
pack://application:,,,/AssemblyName;;;component/ResourcePath
pack://application:,,,/ExamplePlugin;;;component/Assets/Image.png
```

## Dependency Injection

Building upon the concepts described in [ClassIsland Development Basics](../basics.md#依赖注入), plugins need to complete relevant registration operations within the `Initialize` method of the entry point. For example:

```csharp
// ...
namespace ClassIsland.ExamplePlugin;

[PluginEntrance]
public class Plugin : PluginBase
{
    public override void Initialize(HostBuilderContext context, IServiceCollection services)
    {
        services.AddSettingsPage<HelloSettingsPage>();
        services.AddSingleton<MyService>();
    }
    // ...
}
```

## Accessing the Application Object

ClassIsland's application class (App) is based on the encapsulated `System.Windows.Application` class ClassIsland.Core.AppBase. The `AppBase` class exposes some [生命周期事件](../events.md#应用生命周期事件) and methods to control the lifecycle state to plugins on top of the source Application.

You can obtain the current Application instance via the `Current` property of `ClassIsland.Core.AppBase`.

The following sample code gets the application object and subscribes to the [AppStarted](../events.md#应用启动完成-appstarted) event to output "App started!" to the terminal when the application startup is complete.

``` csharp
var app = AppBase.Current;

app.AppStarted += (o, args) => Console.WriteLine("App started!");
```

You can stop or restart the application using the `AppBase.Stop` and `AppBase.Restart` methods. The following code demonstrates how to restart ClassIsland.

``` csharp
var app = AppBase.Current;

app.Restart();
```

## Saving Plugin Configuration

ClassIsland creates a separate configuration directory for each plugin. You can save various configuration files, databases, and other information for the plugin in its configuration directory. You can access the `PluginConfigFolder` property of the [plugin entry class](./plugin-base.md) to get the absolute path of the plugin's configuration directory.

You can use the encapsulated methods in the `ClassIsland.Shared.Helpers.ConfigureFileHelper` class to conveniently read and save configuration files in JSON format. For example:

``` csharp title="Plugin.cs"
using System.IO;
using ClassIsland.Core.Abstractions;
using ClassIsland.Core.Attributes;
using ClassIsland.Core.Extensions.Registry;
using ClassIsland.Shared.Helpers;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PluginWithSettingsPage.Models;
using PluginWithSettingsPage.Views.SettingsPages;

namespace PluginWithSettingsPage;

[PluginEntrance]
public class Plugin : PluginBase
{
    public Settings Settings { get; set; } = new();

    public override void Initialize(HostBuilderContext context, IServiceCollection services)
    {
        Settings = ConfigureFileHelper.LoadConfig<Settings>(Path.Combine(PluginConfigFolder, "Settings.json"));  // 加载配置文件
        Settings.PropertyChanged += (sender, args) =>
        {
            ConfigureFileHelper.SaveConfig<Settings>(Path.Combine(PluginConfigFolder, "Settings.json"), Settings);  // 保存配置文件
        };
    }

    public override void OnShutdown()
    {
    }
}
```

The sample code above, within the [Initialization method](./plugin-base.md#初始化方法) of the [plugin entry class](./plugin-base.md), obtains the plugin configuration directory, loads the plugin configuration, and subscribes to the `PropertyChanged` event of the configuration object to save the configuration file when configuration properties change.

:::warning
Do **NOT** save configuration files in the plugin installation directory. Configuration files saved in the plugin installation directory will not be automatically backed up and may be deleted during plugin updates.
:::
