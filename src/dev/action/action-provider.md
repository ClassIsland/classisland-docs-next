# 编写行动提供方

> 本文章适用版本：
自动化（第三代，第一部分）
ClassIsland 2.0 - Khaslana

::: info
本文章相关内容在 ClassIsland 代码中也有文档注释，可视情况略读。
:::

[[TOC]]





## 1. 编写 ActionInfo（行动信息）

新建一个继承自 ActionBase 的类，并为该类编写 ActionInfo（行动信息）特性。

所有 ActionInfo 属性：

- **行动提供方唯一 ID。**
插件提供的行动提供方需以自己插件 ID 开头，形如 “extraIsland.action.mainWindowOperator”。
```csharp
[ActionInfo(id: "classisland.showNotification",
```

- **行动提供方名称。**
行动设置控件可以在运行时更改此名称。[^new]
```csharp
name: "显示提醒",
```

- **行动提供方图标。**
形如 "\ue9a8" 的 FluentIcon Glyph 格式。[教程：如何获取 FluentIcon 图标？（未编写）](WIP)
支持留空，即不显示图标。[^new]
行动设置控件可以在运行时更改此图标。[^new]
```csharp
iconGlyph: "\ue02b",
```

- **是否要在「添加行动」菜单添加默认项。**[^new]
可留空，默认为 true。
```csharp
addDefaultToMenu: true,
```

- **在「添加行动」菜单添加默认项的根菜单组。**[^new]
如果找不到该组会添加该组。
可留空，默认为根菜单。
```csharp
defaultGroupToMenu: "提醒")]
```

:::tabs

@tab 示例

```csharp {1} title="“显示天气提醒”行动 / WeatherNotificationAction.cs"
[ActionInfo("classisland.notification.weather", "显示天气提醒", "\uf44f", addDefaultToMenu:true, defaultGroupToMenu:"提醒")]
public class WeatherNotificationAction : ActionBase<WeatherNotificationActionSettings>

...
```

```csharp {1} title="“等待时长”行动 / SleepAction.cs"
[ActionInfo("classisland.action.sleep", "等待时长", "\ue9a8")]
public class WeatherNotificationAction : ActionBase<WeatherNotificationActionSettings>

...
```

@tab 行动参考

所有行动提供方均需标注 `ActionInfo` 特性。

ClassIsland 多数行动提供方实现，存放在 `ClassIsland/Services/Automation/Actions/` 目录。

:::





## 2. 实现行动的触发和恢复

### 触发逻辑

在该行动提供方类中，实现 `OnInvoke()` 方法，以实现触发逻辑。

::: warning
重要：重写 OnInvoke() 方法时，请先使用 `base.OnInvoke();` 调用基类的实现。
:::

:::tabs

@tab 示例

```csharp {5-12} title="“显示天气提醒”行动 / WeatherNotificationAction.cs"
[ActionInfo("classisland.notification.weather", "显示天气提醒", "\uf44f", addDefaultToMenu:true, "提醒")]
public class WeatherNotificationAction :
    ActionBase<WeatherNotificationActionSettings> // 重要：如需获取行动设置，则需在此标注行动设置类型。
{
    protected override async Task OnInvoke() // 当行动触发时，此方法将被调用。
    {
        await base.OnInvoke(); // 重要：重写方法时，先调用基类的实现。
        
        ... // 在此编写此行动提供方的行动触发实现。
        
        ... // 行动触发结束后，要在此方法内自行完成资源释放。
    }
}
```

@tab 行动参考

所有行动提供方均需实现 `OnInvoke()` 方法。

ClassIsland 多数行动提供方实现，存放在 `ClassIsland/Services/Automation/Actions/` 目录。

对于第二代自动化，行动处理注册方多存放在 `ClassIsland/Services/ActionHandlers/` 目录。

:::

::: tip
行动触发和恢复时可自由抛出错误（包括行动被中断时引发的错误）。ClassIsland 会捕获错误详情并在用户查看时显示。
:::





### 恢复逻辑

同理，也可以选择重写 OnRevert() 方法，实现行动的恢复逻辑。

::: warning
重要：**如果未实现行动恢复，请勿重写 OnRevert() 方法。**
重写 OnRevert() 方法时，请先使用 `base.OnRevert();` 调用基类的实现。
:::

:::tabs

@tab 示例

```csharp
    protected override async Task OnRevert() // 当行动触发恢复时，此方法将被调用。
        // 重要：如果未实现行动恢复，请勿重写此方法。
    {
        await base.OnRevert(); // 重要：重写方法时，先调用基类的实现。
        
        ... // 在此编写此行动提供方的行动恢复实现。
        
        ... // 行动恢复结束后，要在此方法内自行完成资源释放。
    }
```

@tab 行动参考

以下 ClassIsland 内置行动实现了恢复：

- 应用设置[^new] / SettingsAction （该行动目前用户不可见[^uns]）

:::

::: tip
可在行动触发时（即 `OnInvoke()` 方法中）通过 `IsRevertable` 查询此行动是否可能被恢复。如果触发时查询为 false，则不需要为恢复作准备。
:::

> 备注：ClassIsland 会在运行恢复前先等待中断行动运行完成，无需在恢复逻辑中编写中断触发的逻辑。

### 清理行动运行资源

> 说明：
行动提供方实例的生命周期，都在每次触发行动和恢复行动完成后立即结束。
所以需要在每次触发行动和恢复行动完成后，立即清理和释放资源。

:::tabs

@tab 示例

```csharp title="“等待时长”行动 / SleepAction.cs"
protected override async Task OnInvoke()
{
    ...

    Settings.PropertyChanged += handler;

    using var reg = InterruptCancellationToken.Register(() => tcs.TrySetCanceled());
 // 使用 using 自动释放资源。

    try
    {
        await tcs.Task.ConfigureAwait(false);
    }
    finally // 在 finally 块中完成资源释放。
    {
        await timer.DisposeAsync(); // 手动释放资源并等待完成。
        Settings.PropertyChanged -= handler; // 手动移除事件订阅。
    }
}
```

@tab 行动参考

以下 ClassIsland 内置行动的资源清理释放实现可供参考：

- 显示提醒 / NotificationAction
- 等待时长 / SleepAction

:::

### 获取行动设置等信息

要访问行动设置等信息，参见以下代码：

```csharp {4}
    /// 此行动项的设置，以 ActionBase 类型形参所标注的行动设置类型提供。
    /// 此属性会在行动运行时，实时更新用户更改。
    /// 注意：只有在类的类型形参中标注了行动设置类型，才能获取到此属性。
    Settings { get; }
    
    /// 在触发行动时，查询此行动项是否将会被恢复。
    /// 在恢复行动时，此属性始终为 false。
    bool IsRevertable { get; }

    /// 此行动所运行的行动项。
    ActionItem ActionItem { get; }

    /// 该行动项所在的行动组。
    ActionSet ActionSet { get; }
    
    /// 现在需要通过 ActionSet 获取行动组的 Guid。
    Guid ActionSet.Guid { get; }
    
    /// 行动的 CancellationToken，详见下文「中断行动运行」部分。
    CancellationToken InterruptCancellationToken { get; }
    
    /// 可以通过 ActionItem 修改行动项的运行进度，详见下文「报告行动运行进度」部分。
    double ActionItem.Progress { get; set; }
```





## 3. 实现中断行动运行

::: warning
如果行动不是瞬间完成的，请务必现中断逻辑。[^new]
:::

### 中断概述

定义：
- 立即停下正在运行的任务，以减小影响。

例如：
- 中断终端命令的运行（“运行”行动）
- 清除正在播放中的提醒（“显示提醒”行动）

> 备注：
未开始运行或已完成运行的行动项均不会触发中断运行。

`ActionBase` 提供了 `CancellationToken` 和 `OnInterrupt()` 方法供选择。

### 使用 InterruptCancellationToken

**InterruptCancellationToken** 是 ClassIsland 提供的 `CancellationToken`，它会在行动运行被中断时被取消。

```csharp
    CancellationToken InterruptCancellationToken { get; }
```

:::tabs

@tab 示例

```csharp {3} title="“运行”行动 / RunAction.cs"
        try
        {
            await process.WaitForExitAsync(InterruptCancellationToken);
        }
        catch (OperationCanceledException)
        {
            throw new OperationCanceledException(
                $"命令执行中断。\n" +
                $"标准输出：{stdout}\n" +
                $"错误输出：{stderr}");
        }
```

@tab 行动参考

以下 ClassIsland 内置行动使用了 `InterruptCancellationToken`：

- 等待时长 / SleepAction
- 运行 / RunAction

:::

### 使用 OnInterrupt() 方法

**OnInterrupt()** 方法会在行动运行被中断时被触发，与 `InterruptCancellationToken` 等效，可以选择在此方法内实现行动中断。

:::tabs

@tab 示例

```csharp {1-3} title="“显示提醒”行动 / NotificationAction.cs"
    protected override async Task OnInterrupted() // 当行动运行被中断时，此方法将被调用。
    {
        await base.OnInterrupted();
        _ = Dispatcher.UIThread.InvokeAsync(() =>
        {
            _cancellationTokenSource?.Cancel();
            _completedTokenSource?.Cancel();
        });
    }
```

@tab 行动参考

以下 ClassIsland 内置行动使用了 `OnInterrupt()` 方法：

- 显示提醒 / NotificationAction

:::





## 4. 报告运行进度

可以通过设置 `ActionItem.Progress` 的值报告行动项的运行进度。[^new]
接受 double 0~100 的值。 也可以将其设为 null 以显示无限进度。默认值为 null。
进度条有 0.1 秒的过渡动画。

您可以创建风格化的行动进度显示，如“等待时长”行动会每隔 1 秒更新行动进度。

:::tabs

@tab 示例

```csharp title="“等待时长”行动 / SleepAction.cs" {9}
protected override async Task OnInvoke()
{
    ...

    var targetSeconds = Settings.Value; // 注意：Settings 会在行动运行时，实时更新用户更改。
    var elapsedSeconds = stopWatch.Elapsed.TotalSeconds;

    var progress = Math.Clamp(elapsedSeconds / targetSeconds * 100, 0, 100);
    ActionItem.Progress = progress;
}
```

@tab 行动参考

以下 ClassIsland 内置行动实现了报告运行进度：

- 等待时长 / SleepAction

:::






# 下一步

完成行动提供方的编写后，参见 [注册行动提供方](./register.md) 将行动提供方注册进 ClassIsland 使用。









[^new]: 新增：第三代自动化（第一部分）。
[^uns]: 未稳定：可能会在第三代自动化发生变化。