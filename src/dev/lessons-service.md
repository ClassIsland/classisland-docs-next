# 课程服务

课程服务（LessonsService）是 ClassIsland 的核心服务，用于处理课表信息和进行主循环，插件可以从这个服务获取许多课表状态信息（如当前科目、当前课表等）。

## 属性

课程服务具有许多属性，您可以在获取服务后直接在代码里使用这些属性，也可以直接将这些属性绑定到界面上。由于课程服务实现了 `INotifyPropertyChanged` 接口，当这些属性值发生修改时，前端也会自动更新。

课程服务具有以下属性：

| 属性名 | 类型 | 说明 |
| --- | --- | --- |
| CurrentSubject | `Subject?` | 当前所处时间点的科目。如果没有加载课表，则为 null。|
| NextClassSubject | `Subject` | 下一节课（下一个上课类型的时间点）的科目。|
| CurrentState | `TimeState` | 当前时间点状态。|
| CurrentTimeLayoutItem | `TimeLayoutItem` | 当前所处的时间点。|
| CurrentClassPlan | `ClassPlan?` | 当前加载的课表。如果当前没有课表，则为 null。|
| NextBreakingTimeLayoutItem | `TimeLayoutItem` | 下一个课间休息类型的时间点。|
| NextClassTimeLayoutItem | `TimeLayoutItem` | 下一个上课类型的时间点。|
| CurrentSelectedIndex | `int` | 当前所处时间点的索引。|
| OnClassLeftTime | `TimeSpan` | 距离上课剩余时间。|
| OnBreakingTimeLeftTime | `TimeSpan` | 距下课剩余时间。|
| IsClassPlanEnabled | `bool` | 是否启用课表。|
| IsClassPlanLoaded | `bool` | 是否已加载课表。|
| IsLessonConfirmed | `bool` | 是否已确定当前时间点。|

## 了解更多

- [ILessonsService 接口](https://api.docs.classisland.tech/api/ClassIsland.Core.Abstractions.Services.ILessonsService.html)
- [IPublicLessonsService 接口](https://api.docs.classisland.tech/api/ClassIsland.Shared.IPC.Abstractions.Services.IPublicLessonsService.html)
