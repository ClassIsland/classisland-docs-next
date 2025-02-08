# IPC 参考

本文章主要介绍 IPC 中可以远程调用的服务和侦听的事件 ID。

## 服务

您可以远程获取这些服务：

| 服务接口名 | 说明 |
| --- | --- |
| IPublicLessonsService | 向其它进程公开的课程服务，用于存储当前课表状态与信息。 |
| IPublicProfileService | 向其它进程公开的档案服务，用于管理 ClassIsland 档案信息。 |
| IPublicUriNavigationService | 向其它进程公开的 Url 导航服务，用于在 ClassIsland 内部和外部通过 url 进行导航。~~别问为什么是接口名里的`Uri`不是`Url`~~ |
| ~~IFooService~~ | 用于测试 IPC 功能的测试服务 !!_低情商：没啥用_!! | 

## 事件 ID

以下是 ClassIsland 内置的事件 ID，这些 ID 以常量的形式存储在 IpcRoutedNotifyIds 类中。您可以将这些常量传入到事件 ID 参数中。关于事件的更多说明，请参阅文章[事件](../events.md)。

| 常量名 | 事件 |
| --- | --- |
| OnClassNotifyId | 上课 |
| OnBreakingTimeNotifyId | 课间休息 |
| OnAfterSchoolNotifyId | 放学 |
| CurrentTimeStateChangedNotifyId | 当前时间点状态变化 |
