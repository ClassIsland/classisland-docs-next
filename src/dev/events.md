# 事件

事件是相应 ClassIsland 生命周期变化和课表状态改变的重要方式。

.NET 通用主机和 ClassIsland 提供了一系列的事件，您可以通过调取对应的服务等方式订阅这些事件。

> [!warning]
> 如果您在组件中订阅组件以外的服务的事件，请务必在组件卸载（Unload 事件触发）时取消订阅这些事件，否则组件可能不会被 GC 回收，造成内存泄露。下面的代码可以添加到组件的构造函数中，以实现在加载时订阅相关事件，并在卸载时自动取消订阅。
> 
> ``` csharp
> Loaded += (_, _) => LessonsService.PostMainTimerTicked += LessonsServiceOnPostMainTimerTicked;
> Unloaded += (_, _) => LessonsService.PostMainTimerTicked -= LessonsServiceOnPostMainTimerTicked;
> ```

## 生命周期

:::details 生命周期事件示意图

以下是 ClassIsland 的生命周期及事件触发的示意图：

```mermaid
flowchart TD
    Startup(["应用启动"])
    --> ConfigureHost["配置通用主机"]
    --> InitializePlugins["初始化插件（PluginBase.Initialize）"]
    --> HostStartup["主机启动"]
    --> LaunchMainLoop["启动主循环"]
    --> AppStarted{{"AppStarted"}}
    --> PreMainTimerTick{{"PreMainTimerTicked"}}
    --> ProcessLessons["处理课表"]
    --> PostMainTimerTick{{"PostMainTimerTicked"}}
    --> PreMainTimerTick

    PostMainTimerTick
    --> Exiting["应用正在退出"]
    --> AppStopping{{"AppStopping"}}
```

:::

[[TOC]]

## 应用生命周期事件

这些事件会在应用生命周期发生改变时触发。要订阅这些事件，需要通过以下代码获取当前应用的实例：

```csharp
var app = AppBase.Current;

// 注册应用启动完成事件
app.AppStarted += (o, e) => Console.WriteLine("AppStarted");
```

### 应用启动完成 `AppStarted`

在应用启动完成之后触发。

**事件名：** `AppStarted`

**参数：** _无_

### 应用正在停止 `AppStopping`

在应用正在退出时触发。

::: warning
不要在此事件的事件处理器上进行异步操作。
:::

**事件名：** `AppStopping`

**参数：** _无_

## 主计时器事件

这些事件会每隔 50ms 触发一次，适用于进行轮询操作。要订阅这些事件，需要按照[基础知识](./basics.md#依赖注入)文档中关于依赖注入的文档获取 `ClassIsland.Core.Abstractions.Services.ILessonsService` 服务。

### 课表处理前事件

在主计时器开始处理课表信息前触发。

**服务：** `ClassIsland.Core.Abstractions.Services.ILessonsService`

**事件名：** `PreMainTimerTicked`

**参数：** _无_

### 课表处理后事件

在主计时器完成处理课表信息后触发。

**服务：** `ClassIsland.Core.Abstractions.Services.ILessonsService`

**事件名：** `PostMainTimerTicked`

**参数：** _无_

## 课表事件

以下事件会在课表的对应状态触发。

### 上课事件

当进入上课类型的时间点时触发。

**服务：** `ClassIsland.Core.Abstractions.Services.ILessonsService`

**事件名：** `OnClass`

**参数：** _无_

### 下课事件

当进入课间休息类型的时间点时触发。

**服务：** `ClassIsland.Core.Abstractions.Services.ILessonsService`

**事件名：** `OnBreakingTime`

**参数：** _无_

### 放学事件

当放学（当前时间超出今天的时间表的最后一个时间点）时触发。

**服务：** `ClassIsland.Core.Abstractions.Services.ILessonsService`

**事件名：** `OnAfterSchool`

**参数：** _无_

### 时间状态改变事件

当当前时间状态改变时触发。

**服务：** `ClassIsland.Core.Abstractions.Services.ILessonsService`

**事件名：** `CurrentTimeStateChanged`

**参数：** _无_
