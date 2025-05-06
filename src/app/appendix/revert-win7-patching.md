# 回滚原先的 Windows 7 修复操作

目前发现先前设置环境变量的方法会导致一些 .NET Core 应用无法运行，比如希沃白板。请所有之前在 Windows 7 上安装了 .NET 8 版本的 ClassIsland，并安装了内存泄漏修复补丁的用户卸载修复补丁，并安装 .NET 6 兼容版 ClassIsland。具体操作如下：

1. 以【管理员身份】运行 Powershell，然后运行以下命令删除之前设置的环境变量：

    ``` powershell
    [System.Environment]::SetEnvironmentVariable("DOTNET_GCName", $null, "User")
    [System.Environment]::SetEnvironmentVariable("DOTNET_GCName", $null, "Machine")
    [System.Environment]::SetEnvironmentVariable("DOTNET_EnableWriteXorExecute", $null, "User")
    [System.Environment]::SetEnvironmentVariable("DOTNET_EnableWriteXorExecute", $null, "Machine")
    ```

2. 重启电脑
3. 按照文章[安装与开始](../setup.md#检查系统需求)的方法安装 .NET 6 版本的 ClassIsland，替换原来 .NET 8 版本的 ClassIsland。只需替换 `ClassIsland.exe` ，不需要操作其它文件。
