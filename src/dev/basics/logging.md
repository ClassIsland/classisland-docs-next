# 记录日志

有些时候我们需要向日志中写入一些信息，以便于调试或记录运行时状态。本文将介绍如何在 ClassIsland 中使用日志记录器。

## 获取日志记录器

您可以通过[从主机获取](./dependency-injection.md#获取服务) [`ILogger`](https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.extensions.logging.ilogger) 服务来获取日志记录器，并使用它来将日志记录到日志文件、终端输出、日志窗口等位置。在获取 [`ILogger`](https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.extensions.logging.ilogger) 服务时，需要通过此接口的泛型参数指定日志记录器的类别，例如：

:::: tabs

@tab 服务定位器法

``` csharp
// 其中的类别一般填写调用这个日志记录器的类。
var logger = IAppHost.GetService<ILogger<MyClass>>();
logger.LogInformation("Hello World!");
```

@tab 构造函数注入法

``` csharp
// 其中的类别一般填写调用这个日志记录器的类。
public class Demiurge(ILogger<Demiurge> logger) {
    private ILogger<Demiurge> Logger { get; } = logger;

    private void DoSomething() {
        Logger.LogInformation("Hello World!");
    }
}
```

::::

## 日志级别

在 ClassIsland 中，日志分为以下级别：

| 级别 | 说明 | 在生产环境可见？ |
| --- | --- | --- |
| Trace | 跟踪级别的日志，用于记录详细的运行时信息。 | 否 |
| Debug | 调试级别的日志，用于记录调试信息。 | 否 |
| Information | 信息级别的日志，用于记录正常运行时的信息，如完成了某些操作 | 是 |
| Warning | 警告级别的日志，用于记录可能导致问题的情况。 | 是 |
| Error | 错误级别的日志，用于记录运行时错误。 | 是 |
| Critical | 严重错误级别的日志，用于记录非常严重的错误和可能或已经导致应用崩溃的错误。 | 是 |

其中在生产中不可见的日志级别仅在开发环境和启用诊断模式的情况下显示。

## 记录日志

> [!warning]
> 需要注意，在 Windows 等平台下，Warning 级别及以上的日志会被一并记录到系统的事件查看器中，高频记录 Warning 级别以上的日志可能会增加系统负担。

调用 [`ILogger`](https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.extensions.logging.ilogger) 的 `LogXXX` 方法即可记录日志，其中 `XXX` 为要记录的日志级别。例如如果我们要记录一个 `Information` 级别的日志，那么我们可以这样写：

``` csharp
logger.LogInformation("Hello World!");
```

此外，您还可以在日志消息中包含参数，例如：

``` csharp
logger.LogInformation("Hello {Name}!", "World");
```

如果要在日志信息中包含与这条日志有关的异常信息，可以将异常对象作为参数传递给日志记录方法，例如：

``` csharp
try {
    // 一些可能会抛出异常的代码
}
catch (Exception ex) {
    logger.LogError(ex, "An error occurred while doing something.");
}
```
