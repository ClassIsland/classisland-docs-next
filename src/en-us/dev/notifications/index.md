# Notifications

This article primarily explains how to register notification providers, add notification settings interfaces, and send notifications.

:::info This article focuses on how to develop notifications. If you are a regular user looking to adjust notification settings, please refer to [this article](../../app/notifications.md). :::

<!-- ??? note "Demo Video"
    <video src="../image/index/1724501396690.mp4" muted controls loop></video> -->

Notifications in ClassIsland are used to display important information and can be enhanced with full-screen effects, voice, sound effects, etc. Notifications are sent by notification providers, managed by the notification host, and ultimately displayed on the main interface.

::: info Example
Complete sample code for registering a notification provider can be viewed in the [Example Plugins Repository](https://github.com/ClassIsland/ExamplePlugins/tree/master/PluginWithNotificationProviders).
:::

## Registering a Notification Provider

A notification provider is a hosted service (`IHostedService`) that implements the `INotificationProvider` interface and starts automatically after the application host starts.

To register a notification provider, we first need to create a notification provider class that implements both `INotificationProvider` and `IHostedService`. As shown in the code below:

``` csharp title="Services/NotificationProviders/MyNotificationProvider.cs"
using ClassIsland.Core.Abstractions.Services;
using ClassIsland.Shared.Interfaces;
using Microsoft.Extensions.Hosting;

namespace PluginWithNotificationProviders.Services.NotificationProviders;

public class MyNotificationProvider : INotificationProvider, IHostedService
{
    public string Name { get; set; } = "Example Notification Provider";
    public string Description { get; set; } = "Notification provider description";
    public Guid ProviderGuid { get; set; } = new Guid("DD3BC389-BEA9-40B7-912B-C7C37390A101");
    public object? SettingsElement { get; set; }
    public object? IconElement { get; set; }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
    }
}
```

There might be a lot of code above, but don't worry, let's break it down step by step.

The `ProviderGuid` property in the code is a unique ID used to distinguish the notification provider. You can use Visual Studio's built-in GUID generator or the nguid abbreviation in Resharper/Rider to quickly create a GUID.

The Name and Description properties are the notification provider's name and description, respectively. This information will be displayed in the notification settings.

Next, we need to register this notification provider with the notification host. Add the following highlighted code:

``` csharp title="Services/NotificationProviders/MyNotificationProvider.cs" hl_lines="9-15"
// ...

namespace PluginWithNotificationProviders.Services.NotificationProviders;

public class MyNotificationProvider : INotificationProvider, IHostedService
{
    // ...

    private INotificationHostService NotificationHostService { get; }

    public MyNotificationProvider(INotificationHostService notificationHostService)
    {
        NotificationHostService = notificationHostService;
        NotificationHostService.RegisterNotificationProvider(this);
    }

    // ...
}

// ...
```

In the code above, the highlighted part belongs to the constructor of this notification provider. We obtain the notification host service in the constructor's parameters, save it to a read-only property named `NotificationHostService` for later use, and then call the notification host service's `RegisterNotificationProvider` method to register this notification provider with the notification host.

We also need to add the following code in the [Plugin Init. Method](../plugins/plugin-base.md#初始化方法) or the application host configuration method to register this notification provider with the application host.

```csharp
services.AddHostedService<MyNotificationProvider>();
```

The code above registers this notification provider as a hosted service with the application host, so this notification provider service will start automatically when the application starts and will also be displayed in the notification settings.

![1724554291097](image/index/1724554291097.png)

Additionally, you can specify the notification provider's icon element by setting the `IconElement` property. The notification provider will be displayed in the notification settings. The `IconElement` property can be any WPF control that can serve as an icon, such as PackIcon, Image, etc. Take the following code as an example:

``` csharp
IconElement = new PackIcon()
{
    Kind = PackIconKind.TextLong,
    Width = 24,
    Height = 24
};
```

The code above sets the icon element to a PackIcon of kind `TextLong`. The effect on the notification settings interface is shown in the figure below:

![1724580808124](image/index/1724580808124.png)

## Displaying Notifications

After registering the notification host, our notification host can send notifications. You can subscribe to events you are interested in (such as [Class Start Event](../events.md#上课事件), [Break Time Event](../events.md#下课事件), etc.) to display notifications at the appropriate time.

### Composition

A notification consists of the following parts:

- **Mask**：The content displayed when the notification enters, using the theme color as the background. Generally used to attract attention and summarize the notification content.
    ![1724556002501](image/index/1724556002501.png)
- **Overlay _(Optional)_**：The main body of the notification displayed after the mask ends. If there is no body content.
![1724556005560](image/index/1724556005560.png)

### Subscribing to Events

Let's take displaying a notification at the end of class as an example. Add the following code to obtain the lesson service and subscribe to the [Break Time Event](../events.md#下课事件)：

``` csharp title="Services/NotificationProviders/MyNotificationProvider.cs" hl_lines="8 11 14 17 20-23"
// ...

namespace PluginWithNotificationProviders.Services.NotificationProviders;

public class MyNotificationProvider : INotificationProvider, IHostedService
{
    private INotificationHostService NotificationHostService { get; }
    public ILessonsService LessonsService { get; }

    public MyNotificationProvider(INotificationHostService notificationHostService,
     ILessonsService lessonsService)
    {
        NotificationHostService = notificationHostService;
        LessonsService = lessonsService;  // Save the lesson service instance for later use
        NotificationHostService.RegisterNotificationProvider(this);
        
        LessonsService.OnBreakingTime += LessonsServiceOnOnBreakingTime;  // Subscribe to the break time event
    }

    private void LessonsServiceOnOnBreakingTime(object? sender, EventArgs e)
    {
    
    }

    // ...
}
```

The highlighted code above obtains the lesson service instance by adding a lesson service parameter to the constructor, saves it to the `LessonsService` property for later use, and then subscribes to the break time event `OnBreakingTime` with the event handler `LessonsServiceOnOnBreakingTime`. When class ends, the code in the event handler `LessonsServiceOnOnBreakingTime` will be called.

### Notification Request

Displaying a notification requires calling the notification host's `ShowNotification` method and passing a notification request (`NotificationRequest`) as a parameter. Additionally, using the asynchronous overload `ShowNotificationAsync` allows waiting for the notification display to complete.

!!! warning
    The `ShowNotification` and `ShowNotificationAsync` methods **must** be called from the corresponding notification provider; otherwise, an exception will be thrown.

The following are several commonly used notification request properties; other properties will be introduced later in the article. For complete notification request properties, please refer to the [Source Code Documentation](https://github.com/ClassIsland/ClassIsland/blob/master/ClassIsland.Shared/Models/Notification/NotificationRequest.cs)。

| property name | type | required? | description |
| -- | -- | -- | -- |
| MaskContent | `object` | **Yes** | The notification mask content, displayed when the notification enters. |
| MaskDuration | `TimeSpan` | No | The display duration of the notification mask. Default is 5 seconds. |
| OverlayContent | `object` | No | The main body content of the notification. |
| OverlayDuration | `TimeSpan` | No | The display duration of the notification body. Default is 5 seconds. |

Here is an example of calling the `ShowNotification` method to display a notification:

``` csharp
NotificationHostService.ShowNotification(new NotificationRequest()
{
    MaskContent = new TextBlock(new Run("Hello world!"))
    {
        VerticalAlignment = VerticalAlignment.Center,
        HorizontalAlignment = HorizontalAlignment.Center
    }
});
```

We can add this code to the break time event handler:

``` csharp title="Services/NotificationProviders/MyNotificationProvider.cs" hl_lines="9-16"
// ...
namespace PluginWithNotificationProviders.Services.NotificationProviders;

public class MyNotificationProvider : INotificationProvider, IHostedService
{
    // ...
    private void LessonsServiceOnOnBreakingTime(object? sender, EventArgs e)
    {
        NotificationHostService.ShowNotification(new NotificationRequest()
        {
            MaskContent = new TextBlock(new Run("Hello world!"))
            {
                VerticalAlignment = VerticalAlignment.Center,
                HorizontalAlignment = HorizontalAlignment.Center
            }
        });
    }
    // ...
}
```

The code above will display a notification with the mask text "Hello world!" when class ends, and the text has both horizontal and vertical alignment properties set. The effect is shown in the figure below:

![1724556880002](image/index/1724556880002.png)

Obviously, manually initializing controls in code is not very easy, especially for more complex notification content. Therefore, we generally encapsulate the content to be displayed in the notification into a control. For example, if we encapsulate the "Hello world!" text box above into a control named `MyNotificationControl`, then we can change the code for displaying the notification to this:

``` csharp
NotificationHostService.ShowNotification(new NotificationRequest()
{
    MaskContent = new MyNotificationControl()
});
```

## Notification Settings

Generally, notification providers provide some adjustable settings options, as shown in the figure below:

![1724575564993](image/index/1724575564993.png)

Next, we will add a settings interface to our notification provider and allow users to customize the content displayed in the notification.

Create a new notification settings class `MyNotificationSettings` to store our settings:

``` csharp title="Models/MyNotificationSettings.cs"
using CommunityToolkit.Mvvm.ComponentModel;

namespace PluginWithNotificationProviders.Models;

public class MyNotificationSettings : ObservableRecipient
{
    private string _message = "";

    /// <summary>
    /// The text to display
    /// </summary>
    public string Message
    {
        get => _message;
        set
        {
            if (value == _message) return;
            _message = value;
            OnPropertyChanged();
        }
    }
}
```

上The code above defines a property named `MyNotificationSettings`, containing the `Message` property, used to store the custom message content.

Additionally, we need to use the notification host's `GetNotificationProviderSettings` method to obtain the notification settings. Add the following highlighted code to our notification provider:

``` csharp title="Services/NotificationProviders/MyNotificationProvider.cs" hl_lines="8-11 20-21"
// ...
namespace PluginWithNotificationProviders.Services.NotificationProviders;

public class MyNotificationProvider : INotificationProvider, IHostedService
{
    // ...
    
    /// <summary>
    /// This property is used to store the notification settings.
    /// </summary>
    private MyNotificationSettings Settings { get; }

    public MyNotificationProvider(INotificationHostService notificationHostService,
        ILessonsService lessonsService)
    {
        NotificationHostService = notificationHostService;
        LessonsService = lessonsService;
        NotificationHostService.RegisterNotificationProvider(this);

        // Get the settings for this notification provider and save them to the Settings property for later use.
        Settings = NotificationHostService.GetNotificationProviderSettings<MyNotificationSettings>(ProviderGuid);
        
        LessonsService.OnBreakingTime += LessonsServiceOnOnBreakingTime;
    }
    // ...
}
```

The highlighted code above obtains the current notification provider's settings using the notification provider's GUID and saves them to the `Settings` property for later use. This way, we can access the notification settings within the notification provider, and the notification settings will be saved together when the application settings are saved.

Then modify the break time event handler to add the `OverlayContent` property in the notification request part, to display the customizable text from the notification settings in the notification body.

``` csharp title="Services/NotificationProviders/MyNotificationProvider.cs" hl_lines="15-19"
namespace PluginWithNotificationProviders.Services.NotificationProviders;

public class MyNotificationProvider : INotificationProvider, IHostedService
{
    // ...
    private void LessonsServiceOnOnBreakingTime(object? sender, EventArgs e)
    {
        NotificationHostService.ShowNotification(new NotificationRequest()
        {
            MaskContent = new TextBlock(new Run("Hello world!"))
            {
                VerticalAlignment = VerticalAlignment.Center,
                HorizontalAlignment = HorizontalAlignment.Center
            },
            OverlayContent = new TextBlock(new Run(Settings.Message))
            {
                VerticalAlignment = VerticalAlignment.Center,
                HorizontalAlignment = HorizontalAlignment.Center
            },
        });
    }
    // ...
}
```

The code above sets `OverlayContent` to a text box with both vertical and horizontal center alignment, using the `Message` property from the notification provider settings as the display content. This way, when displaying the notification, our custom text will be shown.

Next, we need to create a notification settings interface to adjust the custom display text. Add the following code:

:::tabs
@tab <HopeIcon icon="code"/> `Controls/NotificationProviders/MyNotificationProviderSettingsControl.xaml`

``` xml
<UserControl x:Class="PluginWithNotificationProviders.Controls.NotificationProviders.MyNotificationProviderSettingsControl"
            xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
            xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
            xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
            xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
            xmlns:local="clr-namespace:PluginWithNotificationProviders.Controls.NotificationProviders"
            mc:Ignorable="d"
            d:DesignHeight="300" d:DesignWidth="300">
    <StackPanel DataContext="{Binding RelativeSource={RelativeSource FindAncestor, AncestorType=local:MyNotificationProviderSettingsControl}}">
        <TextBox Text="{Binding Settings.Message}"/>
    </StackPanel>
</UserControl>

```

@tabs <HopeIcon icon="code"/> `Controls/NotificationProviders/MyNotificationProviderSettingsControl.xaml.cs`

``` csharp
using System.Windows.Controls;
using PluginWithNotificationProviders.Models;

namespace PluginWithNotificationProviders.Controls.NotificationProviders;

public partial class MyNotificationProviderSettingsControl : UserControl
{
    /// <summary>
    /// This property is used to store the notification provider settings
    /// </summary>
    public MyNotificationSettings Settings { get; }
    
    // The settings object is passed in through the constructor parameter, so the settings control can access the notification provider's settings.
    public MyNotificationProviderSettingsControl(MyNotificationSettings settings)
    {
        // Write the settings object to the property so the frontend can access this settings object for binding.
        Settings = settings;
        
        InitializeComponent();
    }
}
```
:::

Then we need to set the `SettingsElement` property in our notification provider to the control we just created, so that in the notification settings, our notification provider's settings interface will display the notification settings control we just defined. Add the following highlighted code:

``` csharp title="Services/NotificationProviders/MyNotificationProvider.cs" hl_lines="17-19"
// ...
namespace PluginWithNotificationProviders.Services.NotificationProviders;

public class MyNotificationProvider : INotificationProvider, IHostedService
{
    // ...
    public MyNotificationProvider(INotificationHostService notificationHostService,
        ILessonsService lessonsService)
    {
        NotificationHostService = notificationHostService;
        LessonsService = lessonsService;
        NotificationHostService.RegisterNotificationProvider(this);
        
        // Get the settings for this notification provider and save them to the Settings property for later use.
        Settings = NotificationHostService.GetNotificationProviderSettings<MyNotificationSettings>(ProviderGuid);

        // Pass the notification provider settings we just obtained to the notification settings control, so the settings control can access the notification settings.
        // Then set the SettingsElement property to this control object, so the notification settings interface will display our custom notification settings control.
        SettingsElement = new MyNotificationProviderSettingsControl(Settings);
        
        LessonsService.OnBreakingTime += LessonsServiceOnOnBreakingTime;
    }   
    // ...
}
```

After completing the steps above, open the notification settings. You will see a text box defined in our notification settings control appear in the notification settings section, and the content of the text box will be displayed in the notification body when class ends.

![1724579672364](image/index/1724579672364.png)

## Notification Voice

To enable voice broadcast for displayed notifications, you need to manually set the `MaskSpeechContent` and `OverlaySpeechContent` properties in the notification request. These two properties set the text for voice broadcast when displaying the mask and the body, respectively. You can set these properties directly to the text displayed on the notification or to a summary of the notification content.

::: warning
After the notification display ends, any unread content will be truncated. Please control the duration of the spoken content.
:::

Modify the notification provider's break time event handler to add the following highlighted code to the notification request:

``` csharp title="Services/NotificationProviders/MyNotificationProvider.cs" hl_lines="20-22"
namespace PluginWithNotificationProviders.Services.NotificationProviders;

public class MyNotificationProvider : INotificationProvider, IHostedService
{
    // ...
    private void LessonsServiceOnOnBreakingTime(object? sender, EventArgs e)
    {
        NotificationHostService.ShowNotification(new NotificationRequest()
        {
            MaskContent = new TextBlock(new Run("Hello world!"))
            {
                VerticalAlignment = VerticalAlignment.Center,
                HorizontalAlignment = HorizontalAlignment.Center
            },
            OverlayContent = new TextBlock(new Run(Settings.Message))
            {
                VerticalAlignment = VerticalAlignment.Center,
                HorizontalAlignment = HorizontalAlignment.Center
            },
            // The following two properties set the content for voice broadcast.
            MaskSpeechContent = "Hello world!",
            OverlaySpeechContent = Settings.Message,
        });
    }
    // ...
}
```

In the highlighted code above, we set the content broadcast when displaying the mask to "Hello world!" and the content broadcast when displaying the body to the custom message set in the notification settings.
