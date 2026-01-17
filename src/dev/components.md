# 组件

组件是在 ClassIsland 主界面上显示信息的单元，若干个组件可以组成 ClassIsland 主界面上显示的内容。您可以通过开发组件的方式，丰富 ClassIsland 的主界面。

::: info
这篇文章主要讲述如何开发组件。如果您只是要调整主界面组件的普通用户，请参考[这篇文章](../app/basic.md#组件)。
:::

## 定义组件

组件实质上是 Avalonia 的用户控件，所以我们需要先创建一个用户控件。在创建好用户控件之后，修改如下高亮内容，将控件的基类修改成组件基类 `ComponentBase`：

```xml title="MyComponent.xaml" hl_lines="1-2 8"
<ci:ComponentBase
    xmlns:ci="http://classisland.tech/schemas/xaml/core"
    ...
    >
    <Grid>
        <!-- 在这里编写组件界面 -->
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

此外，我们还需要为组件类添加`ComponentInfo`属性来声明组件的信息。

```cs title="MyComponent.xaml.cs" hl_lines="2-5"
// ...
[ComponentInfo(
    "66164856-794B-4243-87C2-78EFD3F49E7C",  // 这里需要替换成你生成的 GUID
    "我的组件"
)]
public partial class MyComponent : ComponentBase
{
    public MyComponent()
    {
        InitializeComponent();
    }
}
```

上面的代码声明了组件的 GUID 和名称。在加载组件配置时，会通过 GUID 进行识别。组件名称会在组件设置页面中显示。

您也可以通过修改 `ComponentInfo` 属性，为您的组件指定图标和描述，它们会在组件设置页面中显示。其中图标参数接受一个[图标表达式](./ui/iconexpr.md)。例如：

```csharp hl_lines="4-5"
[ComponentInfo(
    "66164856-794B-4243-87C2-78EFD3F49E7C",
    "我的组件",
    "\uE9B0",
    "描述文本"
)]
```

## 注册组件

要让组件出现在组件库中，需要将其注册到组件服务上。您可以通过在配置服务的过程中，使用`AddComponent`扩展方法来注册您的组件。

```cs hl_lines="3"
public void OnServiceConfiguring(HostBuilderContext context, IServiceCollection services) {
    // ...
    services.AddComponent<MyComponent>();
    // ...
}
```

注册完成后，打开[【应用设置】->【组件】](classisland://app/settings/components)，您可以在组件库中看到您创建的组件。您可以将您的组件拖动到主界面上来测试组件的效果。

## 组件设置

有时组件需要提供一些设置选项，供用户进行自定义。主界面上每个摆放的组件的设置相互独立。`ComponentBase` 封装了一套设置提供方案，只需要为组件继承的 `ComponentBase` 基类添加对应设置模型的类型参数即可。

假设组件的设置模型类名为 `MySettingsClass`，那么我们需要在 XAML 中加入泛型参数 `x:TypeArguments="MySettingsClass"` ，如：

```xml title="MyComponent.xaml" hl_lines="2"
<ci:ComponentBase
    x:TypeArguments="MySettingsClass"
    xmlns:ci="http://classisland.tech/schemas/xaml/core"
    ...
    >
    <Grid>
        <!-- 在这里编写组件界面 -->
    </Grid>
</ci:ComponentBase>
```

同时别忘了修改后端代码的声明：

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

这种带了类型参数的 `ComponentBase` 包含一个类型为传入的类型参数 `Settings` 属性，存储了当前组件的设置，并且会在组件 **初始化完成后** 自动加载。

::: warning
不要在构造函数和`OnInitialized`方法中访问`Settings`属性。此时`Settings`属性尚未初始化，会返回`null`值。
:::

然后以与定义组件类似的方法定义组件设置控件。**组件设置控件不需要再填写注册信息。**

```xml title="MyComponentSettingsControl.xaml" hl_lines="2"
<ci:ComponentBase
    x:TypeArguments="MySettingsClass"
    xmlns:ci="http://classisland.tech/schemas/xaml/core"
    ...
    >
    <Grid>
        <!-- 在这里编写组件设置界面 -->
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

最后更新注册代码，在调用的注册方法的第二个泛型参数填入设置控件类别，告诉 ClassIsland 这个组件有一个与之对应的设置控件。

```cs hl_lines="3"
public void OnServiceConfiguring(HostBuilderContext context, IServiceCollection services) {
    // ...
    services.AddComponent<MyComponent, MyComponentSettingsControl>();
    // ...
}
```

您可以在[【应用设置】->【组件】](classisland://app/settings/components)中查看设置控件效果。
