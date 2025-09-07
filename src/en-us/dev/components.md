# Components

Components are units that display information on the main interface of ClassIsland. Several components can together form the content displayed on ClassIsland's main interface. You can enrich ClassIsland's main interface by developing components.

::: info
This article primarily explains how to develop components. If you are a regular user looking to adjust the main interface components, please refer to [this artical](../app/basic.md#组件)。
:::

## Defining a Component

A component is essentially a WPF User Control, so we first need to create a User Control. After creating the User Control, modify the highlighted content below to change the control's base class to the component base class `ComponentBase`:

```xml title="MyComponent.xaml" hl_lines="1-2 8"
<ci:ComponentBase
    xmlns:ci="http://classisland.tech/schemas/xaml/core"
    ...
    >
    <Grid>
        <!-- Write the component interface here -->
    </Grid>
</ci:ComponentBase>
```

```cs title="MyComponent.xaml.cs" hl_lines="2"
// ...
public partial class MyComponent : ComponentBase
{
    public MyComponent()
    {
        InitializeComponent();
    }
}
```

Additionally, we need to add the `ComponentInfo` attribute to the component class to declare the component's information.

```cs title="MyComponent.xaml.cs" hl_lines="2-5"
// ...
[ComponentInfo(
    "66164856-794B-4243-87C2-78EFD3F49E7C",  // Replace this with your own generated GUID
    "My Component"
)]
public partial class MyComponent : ComponentBase
{
    public MyComponent()
    {
        InitializeComponent();
    }
}
```

The code above declares the component's GUID and name. The GUID is used for identification when loading component configurations. The component name will be displayed on the component settings page.

You can also specify an icon and description for your component by modifying the `ComponentInfo` attribute; these will be displayed on the component settings page. For example:

```csharp hl_lines="4-5"
[ComponentInfo(
    "66164856-794B-4243-87C2-78EFD3F49E7C",
    "My Component",
    PackIconKind.CalendarOutline,
    "Description text"
)]
```

## Registering the Component

To make the component appear in the component library, it needs to be registered with the component service. You can register your component by using the `AddComponent` extension method during the service configuration process.

```cs hl_lines="3"
public void OnServiceConfiguring(HostBuilderContext context, IServiceCollection services) {
    // ...
    services.AddComponent<MyComponent>();
    // ...
}
```

After registration, open [App Settings -> Components](classisland://app/settings/components). You can see your created component in the component library. You can drag your component onto the main interface to test its effect.

## Component Settings

Sometimes a component needs to provide some settings options for user customization. The settings for each placed component on the main interface are independent. `ComponentBase` encapsulates a settings provisioning solution. You only need to add a type parameter for the settings model to the inherited `ComponentBase` base class.

Assuming the component's settings model class is named `MySettingsClass`, we need to add the generic parameter `x:TypeArguments="MySettingsClass"` in the XAML, like this:

```xml title="MyComponent.xaml" hl_lines="2"
<ci:ComponentBase
    x:TypeArguments="MySettingsClass"
    xmlns:ci="http://classisland.tech/schemas/xaml/core"
    ...
    >
    <Grid>
        <!-- Write the component interface here -->
    </Grid>
</ci:ComponentBase>
```

Also, don't forget to modify the declaration in the backend code:

```cs title="MyComponent.xaml.cs" hl_lines="2"
// ...
public partial class MyComponent : ComponentBase<MySettingsClass>
{
    public MyComponent()
    {
        InitializeComponent();
    }
}
```

This `ComponentBase` with a type parameter includes a property named Settings of the passed type parameter, which stores the current component's settings and will be automatically loaded **after the component initialization is complete**.

::: warning
Do not access the Settings property in the constructor or the `OnInitialized` method. At this time, the Settings property has not been initialized and will return `null`.
:::

Then, define the component settings control in a similar way to defining the component. **The component settings control does not need registration information.**

```xml title="MyComponentSettingsControl.xaml" hl_lines="2"
<ci:ComponentBase
    x:TypeArguments="MySettingsClass"
    xmlns:ci="http://classisland.tech/schemas/xaml/core"
    ...
    >
    <Grid>
        <!-- Write the component settings interface here -->
    </Grid>
</ci:ComponentBase>
```

```cs title="MyComponentSettingsControl.xaml.cs" hl_lines="2"
// ...
public partial class MyComponentSettingsControl : ComponentBase<MySettingsClass>
{
    public MyComponent()
    {
        InitializeComponent();
    }
}
```

Finally, update the registration code. Fill the second generic parameter of the registration method call with the settings control class, informing ClassIsland that this component has a corresponding settings control.

```cs hl_lines="3"
public void OnServiceConfiguring(HostBuilderContext context, IServiceCollection services) {
    // ...
    services.AddComponent<MyComponent, MyComponentSettingsControl>();
    // ...
}
```

You can check the effect of the settings control in [App Settings -> Components](classisland://app/settings/components)
