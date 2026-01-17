# 图标表达式

图标表达式是一种用于以字符串简单地表示用于 `IconControl` 的 `IconSource` 派生的图标源的表达式，可以在[组件](../components.md)信息、应用设置项目等的图标属性中使用。

> [!note]
> 本文章的用法示例的代码文本均为在 C# 字符串中的写法，即使用反斜杠 `\` 转义特殊字符。如果您在其它语言中使用图标表达式，需要根据语言的语法规则转义特殊字符。

## 语法

图标表达式的语法如下：

``` plaintext
icon(args)
```

其中 `icon` 是要调用的图标类型，`args` 是调用目标图表类型的参数。特别地，如果输入的图标表达式是单个图标字符，那么它会被解析为图标为此字符的 [FluentIconSource](https://api.docs.classisland.tech/api/ClassIsland.Core.Controls.FluentIconSource.html)。

参数类型均为字符串值，可选使用单引号或双引号包围，各个参数间使用逗号 `,` 分隔。

## 图标类型

ClassIsland 目前内置了对以下图标类型的支持：

| 图标类型 | 图标源类型 | 说明 |
| -------- | --------- | ---- |
| `fluent` | [FluentIconSource](https://api.docs.classisland.tech/api/ClassIsland.Core.Controls.FluentIconSource.html) | 基于 [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons) 图标库的图标源。 |
| `lucide` | [LucideIconSource](https://api.docs.classisland.tech/api/ClassIsland.Core.Controls.LucideIconSource.html) | 基于 [Lucide Icons](https://lucide.dev/) 图标库的图标源。 |
| `bitmap` | [BitmapIconSource](https://amwx.github.io/FluentAvaloniaDocs/pages/Controls/BitmapIconSource) | 基于自定义位图的图标源。 |

### fluent

基于 [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons) 图标库的图标源。

用法：

``` plaintext
fluent(\uxxxx)
```

示例：

``` plaintext
fluent(\uE9B0)
```

### lucide

基于 [Lucide Icons](https://lucide.dev/) 图标库的图标源。   

用法：

``` plaintext
lucide(\uxxxx)
```

示例：

``` plaintext
lucide(\uE0FA)
```

### bitmap

基于自定义位图的图标源。

用法：

``` plaintext
bitmap(uri[, mono])
```

参数：

- `uri`：图标位图的 URI。
- `mono`：可选参数，指定图标是否为单色图标。默认值为 `false`。

示例：

``` plaintext
bitmap(avares://ClassIsland/Assets/HoYoStickers/昔涟_爱.png)
```

## 使用图标表达式

我们可以通过调用 [`IconExpressionHelper.Parse`](https://api.docs.classisland.tech/api/ClassIsland.Core.Helpers.UI.IconExpressionHelper.html?q=IconExpressionHelper#ClassIsland_Core_Helpers_UI_IconExpressionHelper_Parse_System_String__) 方法，传入图标表达式字符串，返回对应的图标源对象。例如：

``` csharp
var iconSource = IconExpressionHelper.Parse("fluent(\uE9B0)");
```

在以上代码中，我们调用了 `IconExpressionHelper.Parse` 方法，传入了 `fluent(\uE9B0)` 图标表达式字符串，返回了一个 `FluentIconSource` 图标源对象。

如果您不确定图标表达式是否合法，可以考虑调用 [`IconExpressionHelper.TryParse`](https://api.docs.classisland.tech/api/ClassIsland.Core.Helpers.UI.IconExpressionHelper.html?q=IconExpressionHelper#ClassIsland_Core_Helpers_UI_IconExpressionHelper_TryParse_System_String__FluentAvalonia_UI_Controls_IconSource__) 或 [`IconExpressionHelper.TryParseOrNull`](https://api.docs.classisland.tech/api/ClassIsland.Core.Helpers.UI.IconExpressionHelper.html?q=IconExpressionHelper#ClassIsland_Core_Helpers_UI_IconExpressionHelper_TryParseOrNull_System_String_) 方法，以避免在遇到非法图标表达式时产生异常。

``` csharp
// 如果图标表达式合法，TryParse 方法会返回 true 以及对应的 IconSource 对象，反之则返回 null 和空值。
var success = IconExpressionHelper.TryParse("fluent(\uE9B0)", out var iconSource1);
// 如果图标表达式合法，TryParseOrNull 方法会返回对应的图标源对象，否则将返回 null
var iconSource2 = IconExpressionHelper.TryParseOrNull("fluent(\uE9B0)");
```

## 注册自定义图标类型

除了使用 ClassIsland 内置的图标类型，我们还可以注册自定义的图标类型。图标类型提供方本质上是一个用于生成 `IconSource` 对应派生类的工厂方法，只需处理图标表达式的参数，返回对应的图标源即可。

要注册图标表达式，只需调用 [`IconExpressionHelper.RegisterHandler`](https://api.docs.classisland.tech/api/ClassIsland.Core.Helpers.UI.IconExpressionHelper.html?q=IconExpressionHelper#ClassIsland_Core_Helpers_UI_IconExpressionHelper_RegisterHandler_System_String_System_Func_System_String___FluentAvalonia_UI_Controls_IconSource__) 方法，传入图标类型名称和对应的工厂方法即可。工厂方法的参数是一个字符串数组，返回一个基于 `IconSource` 的目标图标对象。当解析失败时，可返回一个空值。例如：

``` csharp
IconExpressionHelper.RegisterHandler("fluent", args => new FluentIconSource(args[0]));
```

在上面的代码中我们以 `fluent` 图标类型为例，展示了注册图标类型的基本方法。我们在 `IconExpressionHelper.RegisterHandler` 的第一个参数传入了图标类型的名称，在第二个参数传入了一个工厂方法，用于根据图标表达式的第一个参数包含的字符，创建了对应的图标源。
