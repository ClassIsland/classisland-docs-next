# 基础知识

本文将介绍在进行 ClassIsland 相关开发时需要了解的一部分基础概念。

<a id="dependency-injection"></a>

## 依赖注入

ClassIsland 使用了依赖注入设计模式，在开始 ClassIsland 本体或插件开发前我们强烈建议您先了解[ClassIsland 中的依赖注入](./dependency-injection.md)。

<a id="xml-namespace"></a>

## XML 命名空间

在 XAML 中使用程序集 `ClassIsland.Core` 下封装的一些控件时，需要引入对应的 XML 命名空间，如下方代码所示：

``` xml hl_lines="3"
<ci:MyWindow x:Class="ClassIsland.Views.FeatureDebugWindow"
        xmlns="https://github.com/avaloniaui"
        xmlns:ci="http://classisland.tech/schemas/xaml/core">
    <!-- ... -->
</ci:MyWindow >
```

`http://classisland.tech/schemas/xaml/core` 命名空间的前缀默认是 `ci` ，包含了以下的 CLR 命名空间，在引用这个命名空间时会自动包含以下命名空间中的控件。

- ClassIsland.Core
- ClassIsland.Core.Converters
- ClassIsland.Core.Controls
- ClassIsland.Core.Controls.CommonDialog
- ClassIsland.Core.Controls.LessonsControls
- ClassIsland.Core.Controls.IconControl
- ClassIsland.Core.Controls.NavHyperlink
- ClassIsland.Core.Commands
- ClassIsland.Core.Abstractions.Controls

如果您要对 ClassIsland 本体进行修改，在 `ClassIsland` 程序集下的命名空间，需要手动按照 CLR 命名空间进行引用：

``` xml hl_lines="4"
<ci:MyWindow x:Class="ClassIsland.Views.FeatureDebugWindow"
        xmlns="https://github.com/avaloniaui"
        xmlns:ci="http://classisland.tech/schemas/xaml/core"
        xmlns:controls="clr-namespace:ClassIsland.Controls">
    <!-- ... -->
</ci:MyWindow >
```

## 日志

有些时候我们需要向日志中写入一些信息，以便于调试或记录运行时状态。我们建议插件开发者使用统一的由 ClassIsland 提供的日志记录器来记录日志。您可以查看文章[记录日志](./logging.md)来了解如何在 ClassIsland 中使用日志记录器。
