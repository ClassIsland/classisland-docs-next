# Plugin Entry Class

A ClassIsland plugin needs to define a plugin entry class. This class must inherit from the PluginBase abstract class and be decorated with the PluginEntrance attribute. Below is an example of a plugin entry point:

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

In the code above, we defined a class named Plugin that inherits from the `PluginBase` abstract class. The `PluginEntrance` attribute is added to the Plugin class to declare it as the plugin entry class.

This plugin entry class is also added to the IoC host during initialization. You can obtain an instance of the plugin entry class via dependency injection in services registered by the plugin.

## Initialization Method

The `Initialize` method is executed immediately after the plugin is loaded. You can perform plugin initialization operations within this method. The following code displays a "Hello world!" dialog during initialization.

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

The initialization method receives parameters required for host construction. Operations such as registering [components](../components.md), notification providers, services, etc., need to be completed within this method. The following code registers a settings page named `ExampleSettingsPage` and a component named `ExampleComponent` during initialization.

```cs title="Plugin.cs" hl_lines="11-12"
// ...
namespace PluginWithSettingsPage;

[PluginEntrance]
public class Plugin : PluginBase
{
    public Settings Settings { get; set; } = new();

    public override void Initialize(HostBuilderContext context, IServiceCollection services)
    {
        services.AddSettingsPage<ExampleSettingsPage>();
        services.AddComponent<ExampleComponent>();
    }

}
```

::: note
Some registration operations need to be performed after the host has started. Since the initialization method executes before the host starts, you can subscribe to the [`AppBase.AppStarted`](../events.md#应用启动完成-appstarted) event to perform registrations after the application has fully started.
:::

## Obtaining Plugin Information

You can access the `Info` property to get information about this plugin, such as the plugin manifest. You can also access the `PluginConfigFolder` property to get the path to the plugin's configuration directory.
