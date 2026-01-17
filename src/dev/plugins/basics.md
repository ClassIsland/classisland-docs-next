# 插件基础知识

这里是在 [ClassIsland 开发基础](../basics/README.md)的基础上，开发插件时还需要注意的事项。

## 程序集隔离

默认情况下，不同的插件会被加载到不同的程序集加载上下文（[AssemblyLoadContext](https://learn.microsoft.com/zh-cn/dotnet/core/dependency-loading/understanding-assemblyloadcontext)）中。因此，不同插件间可以引入相同依赖库的不同版本，而不会产生冲突。

如果要调用其它插件的类型，则需要将此插件[声明为依赖](./dependency.md)。

::: warning
由于这个特性，当两个插件间包含具有相同名称的类型定义时，它们不是同一类型。当且仅当它们来自同一个 Assembly 实例时，它们的类型相同。详细请见[此文章](https://learn.microsoft.com/zh-cn/dotnet/core/dependency-loading/understanding-assemblyloadcontext#type-conversion-issues)。
:::

## 资源引用

在插件中引用插件程序集内的资源时，需要使用绝对路径，例如：

``` plaintext
avares://程序集名称/资源路径
avares://ExamplePlugin/Assets/Image.png
```

## 依赖注入

在 [依赖注入中的“注册服务”章节](../basics/dependency-injection.md#注册服务) 所描述的基础上，插件需要在入口点的 `Initialize` 方法内完成相关注册操作。例如：

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

## 访问 Application 对象

ClassIsland 的应用程序类（App）基于封装后的 `Avalonia.Application` 类 `ClassIsland.Core.AppBase`。AppBase 类在源 Application 的基础上，向插件暴露了一些[生命周期事件](../events.md#应用生命周期事件)和控制生命周期状态的方法。

您可以通过 `ClassIsland.Core.AppBase` 的 `Current` 属性获取当前 Application 实例。

下面的示例代码获取了应用程序对象，并订阅了 [AppStarted](../events.md#应用启动完成-appstarted) 事件，以在应用启动完成时在终端输出“App started!”。

``` csharp
var app = AppBase.Current;

app.AppStarted += (o, args) => Console.WriteLine("App started!");
```

您可以通过 `AppBase.Stop` 和 `AppBase.Restart` 方法停止或重启应用。下面的代码演示了如何重启 ClassIsland。

``` csharp
var app = AppBase.Current;

app.Restart();
```

## 保存插件配置

ClassIsland 为每个插件创建了单独的配置目录，您可以将插件的各种配置文件和数据库等信息保存到插件的配置目录下。您可以通过访问[插件入口类](./plugin-base.md)的`PluginConfigFolder`属性来获取插件配置目录的绝对路径。

您可以使用`ClassIsland.Shared.Helpers.ConfigureFileHelper`类中封装的方法便捷地读取和保存 JSON 格式的配置文件。例如：

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

上面的的示例代码在[插件入口类](./plugin-base.md)的[初始化方法](./plugin-base.md#初始化方法)中获取了插件配置目录，然后读取插件配置，并订阅了配置对象的`PropertyChanged`属性，以在配置属性更改时保存配置文件。

:::warning
**不要**将配置文件保存在插件安装目录下，保存在插件安装目录下的配置文件不会被自动备份，并且可能会在插件更新时被删除。
:::
