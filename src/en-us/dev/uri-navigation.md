# Developing Uri Navigation

::: info
This article primarily explains how developers can register custom Uri navigation. If you want to learn about the built-in Uri navigation paths within the application, please refer to [Uri Navigation](../app/uri-navigation.md).
:::

ClassIsland supports in-app navigation via Uri and also allows registering system URL protocols to open specific Uris from outside the application.

This article describes how to use the `UriNavigationService` to register your custom Uris and navigation event handlers, and how to perform navigation in the UI through commands or by directly calling the navigation service.

The Uri navigation protocol for ClassIsland is `classisland://`.

## Registering Navigation

To register navigation, you first need to obtain the service `ClassIsland.Core.Abstractions.Services.IUriNavigationService`. For detailed methods on obtaining services, see [Basics](basics.md#dependency-injection).

::: info
In the code examples in this article, we assume the obtained service is stored in a property named `UriNavigationService`.
:::

Next, we register a handler for the path `foo/bar`:

```cs
UriNavigationService.HandlePluginsNavigation(
    "foo/bar", 
    args => {
        CommonDialog.ShowInfo($"Hello world! {args.Uri}");
    }
);
```

In the code above, we used the `HandlePluginsNavigation` method to register a handler for navigating to the path `foo/bar`. When navigating to the Uri `classisland://plugins/foo/bar`, the provided handler will run, displaying a dialog. Within the event handler, you can access the originally navigated Uri and the subpath relative to the currently registered path via the args parameter.

Uris registered using the `HandlePluginsNavigation` method have the host plugins, which is a navigation host specifically reserved for plugins. To register under the app host or other custom hosts, use the `HandleAppNavigation` method.

::: note
Methods like `HandleAppNavigation` have internal protection; only code within ClassIsland can register under the app host or custom hosts. Plugins can only use the `HandlePluginsNavigation` method to register under the plugins host.
:::

## Navigation

When navigating to a specific Uri, ClassIsland first attempts to navigate to the exact specified path. If no handler is registered for that path, it will progressively navigate up to parent directories until it reaches the root.

``` mermaid
flowchart LR
    BeginNavigation["Start Navigation"] --> IsExist{"Does the target path exist?"}  -->|"Yes"| Navigated["Navigation Successful"]
    IsExist -->|"No"| Back["Attempt to navigate to parent directory"] --> IsRoot{"Reached root directory?"} -->|"Yes"| Failed["Navigation Failed"]
    IsRoot --> |"No"| IsExist
```

::: info For example:
Suppose we registered a handler for the path `hello_world/hello_world`. When navigating to `hello_world/hello_world/foo_bar`, since this path is not registered, it will navigate up to the parent directory `hello_world/hello_world` and trigger the corresponding event handler.
:::

There are several ways to perform navigation:

### Via `NavHyperlink`

`NavHyperlink` inherits from `Hyperlink` and has a similar appearance and experience. It can be inserted into `TextBlock` or `FlowDocument`, etc., to implement Uri navigation.

To use `NavHyperlink` for navigation, set the `NavigateTarget` property to the Uri you want to navigate to, for example:

``` xml
<TextBlock>
    <ci:NavHyperlink NavigateTarget="https://cn.bing.com">Test link 1</ci:NavHyperlink>
    <ci:NavHyperlink NavigateTarget="classisland://app/test">Test link 2</ci:NavHyperlink>
</TextBlock>
```

### Navigating via Code

Calling the `IUriNavigationService.Navigate` method navigates to the specified Uri. If the Uri protocol is not `classisland://`, ClassIsland will automatically call the most appropriate system application to handle the Uri.

```cs
// Open the navigation test window
UriNavigationService.Navigate(new Uri("classisland://app/test"));

// Open the ClassIsland website in the system browser
UriNavigationService.Navigate(new Uri("https://classisland.tech"));
```

### Calling from External Applications

If ClassIsland has registered the `classisland://` link handling on the system, then opening links with this protocol in browsers or other places will allow ClassIsland to navigate to the corresponding Uri handler within the application.

For example: [classisland://app/test](classisland://app/test)
