# Settings Page

ClassIsland allows plugins to register custom settings pages in the settings window. This article mainly introduces how to create and register a custom settings page.

## Creating a Settings Page

Settings pages are based on WPF’s built-in page type, so we first need to create a page. After creating the page, change the highlighted parts below to modify the base class of the page to `SettingsPageBase`.

```xml title="ExampleSettingsPage.xaml" hl_lines="1 4"
<ci:SettingsPageBase 
      x:Class="PluginWithSettingsPage.Views.SettingsPages.ExampleSettingsPage"
      xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
      xmlns:ci="http://classisland.tech/schemas/xaml/core"
      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
      xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
      xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
      xmlns:local="clr-namespace:PluginWithSettingsPage.Views.SettingsPages"
      mc:Ignorable="d" 
      d:DesignHeight="450" d:DesignWidth="800"
      Title="ExampleSettingsPage">
    <Grid/>
</ci:SettingsPageBase>
```

```cs title="ExampleSettingsPage.xaml.cs" hl_lines="5"
using ClassIsland.Core.Attributes;

namespace PluginWithSettingsPage.Views.SettingsPages;

public partial class ExampleSettingsPage : SettingsPageBase
{
    public ExampleSettingsPage()
    {
        InitializeComponent();
    }
}
```

To apply theme styles, you also need to add the highlighted attributes to the settings page:

```xml title="ExampleSettingsPage.xaml" hl_lines="11-17"
<ci:SettingsPageBase x:Class="PluginWithSettingsPage.Views.SettingsPages.ExampleSettingsPage"
      xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
      xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
      xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
      xmlns:local="clr-namespace:PluginWithSettingsPage.Views.SettingsPages"
      xmlns:ci="http://classisland.tech/schemas/xaml/core"
      mc:Ignorable="d" 
      d:DesignHeight="450" d:DesignWidth="800"
      Title="ExampleSettingsPage"
      TextElement.Foreground="{DynamicResource MaterialDesignBody}"
      Background="{DynamicResource MaterialDesignPaper}"
      FontFamily="{StaticResource HarmonyOsSans}"
      TextElement.FontWeight="Regular"
      TextElement.FontSize="14"
      TextOptions.TextFormattingMode="Ideal"
      TextOptions.TextRenderingMode="Auto"
      d:DataContext="{d:DesignInstance local:ExampleSettingsPage}">
    <!-- ... -->
</ci:SettingsPageBase>
```

## Declaring Page Information

In addition, to declare settings page information, we need to add the `SettingsPageInfo` attribute to the backend code of the settings page:

```cs title="ExampleSettingsPage.xaml.cs" hl_lines="5"
using ClassIsland.Core.Attributes;

namespace PluginWithSettingsPage.Views.SettingsPages;

[SettingsPageInfo("examples.exampleSettingsPage", "Example Settings Page")]
public partial class ExampleSettingsPage : SettingsPageBase
{
    public ExampleSettingsPage()
    {
        InitializeComponent();
    }
}
```

You can specify icons, categories, and other information for the settings page in the `SettingsPageInfo` attribute, for example:

```cs
[SettingsPageInfo(
    "examples.exampleSettingsPage",   // Settings page id
    "Example Settings Page",  // Settings page name
    PackIconKind.CogOutline,   // Icon when not selected
    PackIconKind.Cog,  // Icon when selected
    SettingsPageCategory.External  // Settings page category
)]
```

You can also specify the category of the settings page in the `SettingsPageInfo` attribute. Settings pages of different categories will be grouped and displayed in a certain order. The settings page has the following categories:

| Values | Type | Description |
| -- | -- | -- |
| SettingsPageCategory.Internal | Internal Settings Page | Built-in settings pages of ClassIsland. It is not recommended for plugin-registered settings pages to use this category. |
| SettingsPageCategory.External | External Settings Page | Usually used for plugin-registered settings pages. |
| SettingsPageCategory.About | About Page | Settings page showing about information. |
| SettingsPageCategory.Debug | Debug Page | Pages used for debugging. When the debug menu is closed, these pages will not be displayed. |

The positions of these categories in the settings interface are shown in the diagram below:

![1722560691778](image/settings-page/1722560691778.png)

## Registering a Settings Page

After writing the settings page, you also need to register it in the initialization method.

:::tabs
@tab Registering in a Plugin

Add the highlighted code below in the entry point of the plugin:

```cs title="Plugin.cs" hl_lines="11"
// ...
namespace PluginWithSettingsPage;

[PluginEntrance]
public class Plugin : PluginBase
{
    public Settings Settings { get; set; } = new();

    public override void Initialize(HostBuilderContext context, IServiceCollection services)
    {
        services.AddSettingsPage<ExampleSettingsPage>();
    }

    public override void OnShutdown()
    {
    }
}
```

The highlighted code above uses the `AddSettingsPage` extension method to register the settings page with the application host.

@tab Registering in the application

Add the highlighted code below in the initialization method of the application:

```cs title="App.xaml.cs" hl_lines="15"
// ...
namespace ClassIsland;

class App : AppBase {
    // ...
    private void App_OnDispatcherUnhandledException(object sender, DispatcherUnhandledExceptionEventArgs e)
    {
        // ...
        IAppHost.Host = Microsoft.Extensions.Hosting.Host.
        CreateDefaultBuilder().
        UseContentRoot(AppContext.BaseDirectory).
        ConfigureServices((context, services) =>
        {
            // ...
            services.AddSettingsPage<ExampleSettingsPage>();
            // ...
        }
        );
        // ...
    }
    // ...
}  
```
:::

After registration, open App Settings, and you can see your registered settings page in the navigation bar of the settings interface.

You can check[Settings Page Example](https://github.com/ClassIsland/ExamplePlugins/tree/master/PluginWithSettingsPage) for more information.
