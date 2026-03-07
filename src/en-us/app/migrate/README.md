---
author: Hello8693
---

# 迁移课表

ClassIsland 提供一个转换配置文件用的在线工具，可以方便地将其他课程表软件的课表配置转换为 ClassIsland 档案文件。

转换工具已经部署在 [https://migrate.classisland.tech/](https://migrate.classisland.tech/) 上，可以直接访问使用。

## 软件支持情况

目前已支持以下软件的导入：

| 软件名称 | 配置文件类型 | 配置文件说明 |
| --- | --- | --- |
| [ZongziTEK 黑板贴](https://github.com/STBBRD/ZongziTEK-Blackboard-Sticker/) | `timetable.json` | 支持导入全部信息。科目自动根据名称生成。 |


以下软件的导入程序正在制作：

- [ ] 全能班辅
- [ ] [Class Widgets](https://github.com/RinLit-233-shiroko/Class-Widgets/)
- [ ] [Education Clock](https://github.com/Return-Log/Education-Clock/)

以下软件没有计划支持：

- [ClassTools](https://github.com/clansty/ClassTools/) 原因：缺时间表信息，无法导入。

## 开发者指南

欢迎各位开发者完善本程序。

本程序使用 Vue 3 + TypeScript 开发，使用 Vite 作为构建工具。需要注意的是，本程序强制要求使用 Node 20 及 Yarn 包管理进行开发。
