# 贡献者标记

ClassIsland 内置了一套贡献者标记机制，允许开发者在功能上标注贡献者信息，在界面中以贡献者徽章 ContributorBadge 的形式呈现。
用户在点击徽章后，可以查看该功能的贡献者详情和插件来源信息。

本文章介绍如何在你的代码中标注贡献者、如何放置贡献者徽章，以及贡献者详情的写作规范。

## 标注贡献者信息

标注 ContributorInfo 一般两种方式：
- **推荐在类上标记 `[ContributorInfo]` 特性**
- 在不便使用特性的场合，则使用 **`service.AddXXX(..).WithContributorInfo(..)` 的链式调用方法**。

### 各功能的标注方式对照

| 功能类型                  | 标记 `[ContributorInfo(..)]` 特性 | ClassIsland 适配情况 |
|---------------------------|-----------------------------------|----------------------|
| 行动　　 Action           | ✅ 标记在 TAction                 | ✅ 已适配            |
| 附加设置 AttachedSettings | ✅ 标记在 TControl                | ❌ 未显示            |
| 认证　　 Authorize        | ✅ 标记在 TControl                | ✅ 已适配            |
| 组件　　 Component        | ✅ 标记在 TComponent              | ✅ 已适配            |
| 提醒　　 Notification     | ✅ 标记在 TProvider               | ✅ 已适配            |
| 档案迁移 ProfileTransfer  | ⭕️ 部分支持，标记在 TControl      | ❌ 未显示            |
| 规则集　 Rule             | ⭕️ 部分支持，见代码 XML 注释      | ✅ 已适配            |
| 设置页面 SettingsPage     | ✅ 标记在 TSettingsPage           | ✅ 已适配            |
| 语音　　 Speech           | ✅ 标记在 ISpeechService          | ✅ 已适配            |
| 触发器　 Trigger          | ✅ 标记在 TTrigger                | ✅ 已适配            |
| 教程　　 Tutorial         | ❌ 不可用                         | ❌ 未显示            |
| 天气图标 WeatherIcon      | ❌ 不可用                         | ✅ 已适配            |

- **主界面 XAML 主题**：不支持贡献者信息。主题的作者和名称信息直接在 `ThemeManifest` 中声明。
- **应用内教程 Tutorial**：支持在教程 JSON 中添加 ContributorInfo 字段标注贡献者信息。或使用链式调用方法。

各功能具体标记方式，详见代码 XML 文档注释。  
所有功能均支持以 `service.AddXXX(..).WithContributorInfo(..)` 链式调用方法添加 ContributorInfo 信息。

### 通过特性标注（推荐）

在功能类上添加 `[ContributorInfo]`，这是最优先推荐的方式。

```csharp
[ContributorInfo("..")]
public class ScheduleComponent : ComponentBase<LessonControlSettings> {
```

贡献者较多或描述较复杂时，可以使用原始字符串字面量，每行一个条目：

```csharp
[ContributorInfo("""
                 @foo 贡献一
                 @bar 贡献二
                 @ouo 贡献三
                 """)]
public class WeatherSettingsPage : SettingsPageBase {
```

### 通过链式方法标注（备选）

`WithContributorInfo` 是一个通用补充机制，可在链式调用中为注册项附加贡献者信息。所有功能均支持此方法。
它尤其适用于那些没有具体类可以标注特性的功能，例如规则集、天气图标模板等。

```csharp
services.AddRule(..)
        .WithContributorInfo("..");

services.AddWeatherIconTemplate(..).WithContributorInfo("..")
        // 链式调用 service 写法
        .AddProfileTransferProvider(..)
        .WithContributorInfo("..");

services.AddTutorialGroupByUri(new Uri("avares://..."))
        .WithContributorInfo("..");
```

**对本身已标注特性的类型使用 `WithContributorInfo`**

在已经标注了 `[ContributorInfo]` 的类型上链式调用 `WithContributorInfo` 是合法的，默认会覆盖特性中声明的 `Details`。

## 贡献者 ID 与别名

在 `[ContributorInfo]` 中使用的 `@xxx` 形式的 ID 并非直接显示给用户。系统会通过 `IPluginService.ContributorAliases` 映射表将其转换为可读的名称。

ClassIsland 内置了部分贡献者的别名映射。
如果你的插件引入了新的贡献者，可以在配置服务时通过 `AddContributorAliases` 注册别名：

```csharp
services.AddContributorAliases("yourid", "Your Name");
```

## 在界面中放置贡献者徽章 `ContributorBadge`

`ContributorBadge` 控件位于 `ClassIsland.Core.Controls` 命名空间中，XAML 中的引用前缀为 `ci`：

```xml
xmlns:ci="http://classisland.tech/schemas/xaml/core"
```

### 绑定 `ContributorInfo`

将控件的 `ContributorInfo` 属性绑定到数据源中已经标注好的 `ContributorInfo` 对象上：

```xml
<ci:ContributorBadge ContributorInfo="{Binding ViewModel.SelectedXXX?.ContributorInfo}"/>
```

### 直接设置 `PluginId` 和 `Details`

如果数据源中没有现成的 `ContributorInfo` 对象，也可以在 XAML 中直接设置：

```xml
<ci:ContributorBadge PluginId="your.plugin.id"
                     Details="贡献者详情.."/>
```

## `Flyout`的渲染效果

点击贡献者徽章后弹出的内容使用 `SimpleRichText` 控件渲染。该控件支持以下语法：

| 语法 | 效果 |
|---|---|
| `\\` | **换行**，可以代替`\n`。前后不要加空格 |
| `@关键词` | 从 `ContributorAliases` 映射表中查找并**加粗显示**，未找到时加粗显示原文 |
| `**文字**` | **加粗** |
| `[显示文本](链接)` | 超链接，点击通过 `classisland://` URI 导航打开 |
| 空行 | 半高间距，用于段落分隔 |

因此在编写 `Details` 时：

- `@bro 功能A\\@ouo 功能B` — `\\` 分隔会产生换行，共两行。
- 使用原始字符串字面量时，代码中的**真实换行**也会被渲染为弹窗中的换行，因为 `SimpleRichText` 会将 `\\` 替换为 `\n` 后再按真实换行拆分。建议**统一使用 `\\` 表示换行**，风格更一致。

## 插件支持信息 `PluginMessage`

插件可以通过 `SetPluginContributorInfo` 方法设置全局的贡献者支持信息，该信息会显示在该插件所有功能的徽章弹窗底部：

```csharp
public override void Initialize(HostBuilderContext context, IServiceCollection services)
{
    services.SetPluginContributorInfo("""
        如需获取帮助或反馈问题，请访问项目主页。
        """);
}
```

如果插件没有主动设置，徽章会自动构建默认信息，包含插件名称、作者和项目主页链接。

## 贡献者详情 `Details` 写作规范

**格式**

```
@id 贡献描述
```
```
贡献描述 @foo @bar
```

- 贡献者 ID 以 `@` 开头，与别名映射表中的 key 对应。
- 贡献描述跟在 ID 之后或之前，用空格分隔，简要说明该贡献者承担的工作。
- 多个条目间使用 **`\\`** 分隔（单行时）或换行（多行原始字符串时）。
- 如果多人共同完成同一项工作且无需细分，可合并到一行中列出。

**风格**

- **简洁**：描述应简明扼要，字数不过多。如"天气功能""轮播逻辑改进""页面外观改进"。
- **具体**：明确指出贡献的范围，如"城市查询改进""课程表组件"。
- **完整**：添加新功能时，须将所有参与该功能的贡献者一一列出。如果有贡献者同时参与了多项工作，可以在同一行中分别注明。
