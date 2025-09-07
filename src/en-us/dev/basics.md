# Basics

This article introduces some fundamental concepts you need to understand when developing for ClassIsland.

<a id="xml-namespace"></a>

## XML Namespaces

When using some encapsulated controls from the `ClassIsland.Core` assembly in XAML, you need to import the corresponding XML namespace, as shown in the code below:

``` xml hl_lines="3"
<ci:MyWindow x:Class="ClassIsland.Views.FeatureDebugWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:ci="http://classisland.tech/schemas/xaml/core">
    <!-- ... -->
</ci:MyWindow >
```

The default prefix for the `http://classisland.tech/schemas/xaml/core` namespace is `ci`. It includes the following CLR namespaces. Controls from these namespaces are automatically included when referencing this XML namespace.

- ClassIsland.Core
- ClassIsland.Core.Converters
- ClassIsland.Core.Controls
- ClassIsland.Core.Controls.CommonDialog
- ClassIsland.Core.Controls.LessonsControls
- ClassIsland.Core.Controls.IconControl
- ClassIsland.Core.Controls.NavHyperlink
- ClassIsland.Core.Commands
- ClassIsland.Core.Abstractions.Controls

If you are modifying the ClassIsland core itself, namespaces under the `ClassIsland` assembly need to be manually referenced according to their CLR namespaces:

``` xml hl_lines="4"
<ci:MyWindow x:Class="ClassIsland.Views.FeatureDebugWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:ci="http://classisland.tech/schemas/xaml/core"
        xmlns:controls="clr-namespace:ClassIsland.Controls">
    <!-- ... -->
</ci:MyWindow >
```

<a id="dependency-injection"></a>

## Dependency Injection

ClassIsland uses the Dependency Injection design pattern. When defining a service, you can specify the service dependencies in the constructor parameters. The host will automatically inject these dependencies when constructing the service.

To learn more about dependency injection, please refer to [.NET Dependency Injection](https://learn.microsoft.com/zh-cn/dotnet/core/extensions/dependency-injection). This documentation provides a more detailed introduction to dependency injection in .NET.

If you are developing a plugin for ClassIsland, you should also pay attention to the Dependency Injection section in the document [Plugin Basics](./plugins/basics.md#依赖注入), which covers operations that differ from developing the core application.
