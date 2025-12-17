# 依赖注入

ClassIsland 使用了依赖注入设计模式，使用了控制反转（IoC）容器[Microsoft.Extensions.Hosting](https://learn.microsoft.com/zh-cn/dotnet/core/extensions/generic-host)作为依赖注入的实现。通过在主机注册服务，您可以在应用各处通过构造函数注入或服务定位器模式（即直接获取）来便捷地使用这些服务。

ClassIsland 的[大部分公开 API 服务](https://api.docs.classisland.tech/api/ClassIsland.Core.Abstractions.Services.html)是和其对应的抽象接口成对注册到主机上的，这样您可以直接通过接口获取和调用对应的服务，无需关心其内部实现。且插件也可以以与应用内类似的方式获取和注册服务，既提升了插件代码和应用代码的一致性，又减轻了开发者为各个接口架桥的负担。

接下来将介绍 ClassIsland 中依赖注入的基础用法。要了解关于依赖注入的更多内容，请参阅[.NET 依赖项注入](https://learn.microsoft.com/zh-cn/dotnet/core/extensions/dependency-injection)。这篇文档会更详细地介绍 .NET 中依赖注入的相关信息。

## 获取服务

在 ClassIsland 中，您可以使用服务定位器和构造函数注入两种方法通过服务类型或服务的抽象类型获取服务。如果您要在一个注册到主机的服务的初始化过程中自动获取所需的服务，建议使用构造函数注入法。

### 服务定位器法

您可以调用 [IAppHost.GetService](https://api.docs.classisland.tech/api/ClassIsland.Shared.IAppHost.html#ClassIsland_Shared_IAppHost_GetService__1) 方法通过服务类型或服务的抽象类型来在应用任何地方快速获取一个服务，如以下代码：

``` csharp
var service = IAppHost.GetService<ILessonsService>();
```

以上代码通过课程服务的抽象接口[`ILessonsService`](https://api.docs.classisland.tech/api/ClassIsland.Core.Abstractions.Services.ILessonsService.html)获取到了课程服务，并将其存储在变量 `service` 中。同理，如果该服务是直接以具体的类类型（而非接口）注册的，您也可以直接使用该类类型来获取服务。

如果您不确定此服务有没有注册，可以使用[IAppHost.TryGetService](https://api.docs.classisland.tech/api/ClassIsland.Shared.IAppHost.html#ClassIsland_Shared_IAppHost_TryGetService__1)方法尝试获取服务，当获取失败时，会返回 `null` 而非抛出异常，例如：

``` csharp
var service = IAppHost.TryGetService<ILessonsService>();
```

此时如果抽象接口[`ILessonsService`](https://api.docs.classisland.tech/api/ClassIsland.Core.Abstractions.Services.ILessonsService.html)对应的服务没有被注册，变量 `service` 将为 `null`。

您也可以通过访问[`IAppHost.Host.Services`](https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.extensions.hosting.ihost.services?view=net-10.0-pp#microsoft-extensions-hosting-ihost-services) 属性来获取服务。

### 构造函数注入法

如果您要在注册到主机上的服务类（如您手动注册的服务类、组件类、设置页面类、提醒提供方等）获取所需的服务，建议使用构造函数注入法来获取服务。

要使用构造函数注入法，只需在构造函数的参数中添加以您需要注入的服务的服务类型或抽象类型为类型的参数：

``` csharp
public class Demiurge(ILessonsService lessonsService) {
    private ILessonsService LessonsService { get; } = lessonsService;

    private void DoSomething() {
        // 此时我们可以通过 ILessonsService 属性访问到课程服务了。
    }
}
```

此时服务主机在实例化这个服务类的时候，就会自动将所需的服务注入到服务类的构造函数参数中，服务类就可以通过参数接收并使用所需的服务了。

您可以阅读文档[.NET 依赖项注入](https://learn.microsoft.com/zh-cn/dotnet/core/extensions/dependency-injection)来了解更多有关构造函数注入的用法。

## 注册服务

假设现在我们要将这样一个服务类注册到主机上，以供其它服务调用：

``` csharp
public class Foo {
    public void Bar(int x) {
        Console.WriteLine($"{x}");
    }
}
```

在[Microsoft.Extensions.Hosting](https://learn.microsoft.com/zh-cn/dotnet/core/extensions/generic-host)中，一个服务有三种生命周期：

- **单例（Singleton）** ：服务自创建后，每次获取的都是同样的服务实例，将在整个应用生命周期中存活。适用于在应用生命周期内保持状态共享或无状态的服务，如课程服务、档案服务等。
- **临时（Transient）** ：每次获取服务时都将获取其的新实例。适用于如视图（View）、视图模型（ViewModel）等单次使用的服务。
- **范围内（Scoped）**：可在作用域内获取，在单个作用域内生效，离开作用域后释放的服务。ClassIsland 在应用内目前没有使用作用域，暂不做进一步介绍。

您可以使用 ServiceCollectionServiceExtensions.AddXXX（XXX 是生命周期）方法将您的服务注册到主机上。应用内和插件中注册服务的方法有所差异，以下是具体介绍：

:::: tabs
@tab 插件

插件需要在入口点的 `Initialize` 方法内完成相关注册操作。例如：

```csharp
// ...
namespace ClassIsland.ExamplePlugin;

[PluginEntrance]
public class Plugin : PluginBase
{
    public override void Initialize(HostBuilderContext context, IServiceCollection services)
    {
        services.AddSingleton<Foo>(); // 注册一个单例（Singleton）服务

        // 或者，根据需要选择其他生命周期（不要对同一个服务重复注册）：
        // services.AddTransient<Foo>(); // 注册一个临时（Transient）服务
        // services.AddScoped<Foo>(); // 注册一个范围内（Scoped）服务
    }
    // ...
}


```

@tab 应用内

在 [`App.Services.axaml.cs`](https://github.com/ClassIsland/ClassIsland/blob/master/ClassIsland/App.Services.xaml.cs) 的 `App.ConfigureServices` 方法内完成相关注册操作。例如：

```csharp
// ...
namespace ClassIsland;

public partial class App
{
    private void ConfigureServices(HostBuilderContext context, IServiceCollection services)
    {
        // ...
        services.AddSingleton<Foo>(); // 注册一个单例（Singleton）服务

        // 或者，根据需要选择其他生命周期（不要对同一个服务重复注册）：
        // services.AddTransient<Foo>(); // 注册一个临时（Transient）服务
        // services.AddScoped<Foo>(); // 注册一个范围内（Scoped）服务
        // ...
    }
}
```

::::

恭喜，您在主机上注册了一个服务！您现在可以按照上文的方法在插件或应用内获取并使用这个服务了。更多注册服务的方法可以参阅[.NET 依赖项注入的“服务注册方法”章节](https://learn.microsoft.com/zh-cn/dotnet/core/extensions/dependency-injection#service-registration-methods)。

您在后续的开发中可能还会遇到类似这样的通过扩展方法在主机上注册如设置页面、组件等功能的写法：

``` csharp
services.AddSettingsPage<ExampleSettingsPage>();
services.AddComponent<MyComponent>();
```

这种注册功能的写法本质上一般也是将这样的服务注册到了主机上，并根据需要进行了额外的注册步骤。这些功能类实际上也是主机上的一个服务，可以使用[构造函数注入的方法](#构造函数注入法)获取所需的服务。

## 暴露服务

有些时候我们需要将服务暴露给其它插件使用，这时我们就需要在注册服务的时候将服务类和与之对应的抽象类（如对应的接口或父类等）一并注册，然后共享其抽象类。这样其他开发者就可以通过这个抽象类从主机获取需要的服务。

修改刚刚的 `Foo` 类型代码，添加一个与之对应的接口，并让这个类实现这个接口：

``` csharp

public interface IFoo {
    /// <summary>
    /// 如果需要，建议为您公开的服务添加文档，以助于其他开发者理解。
    /// </summary>
    void Bar(int x);
}

public class Foo : IFoo {
    public void Bar(int x) {
        Console.WriteLine($"{x}");
    }
}
```

然后修改注册服务的代码：

``` csharp
services.AddSingleton<IFoo, Foo>();
```

在上述的代码中，我们为 `Foo` 类添加并实现了一个接口，然后将其接口作为抽象类与其成对地注册到了服务主机上。此时我们可以用这个接口来获取这个服务了，例如：

:::: tabs

@tab 服务定位器

``` csharp
var service = IAppHost.GetService<IFoo>();
```

@tab 构造函数注入

``` csharp
public class Demiurge(IFoo foo) {
    private IFoo Foo { get; } = foo;

    private void DoSomething() {
        // 此时我们可以通过 Foo 属性访问到 Foo 服务类了
    }
}
```

::::
