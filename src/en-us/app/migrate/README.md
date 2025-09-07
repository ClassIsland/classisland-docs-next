---
author: Hello8693
---

# Timetable Migration

ClassIsland provides an online tool for converting configuration files, making it easy to migrate timetables from other scheduling software into ClassIsland archive files.

The migration tool is deployed at [https://migrate.classisland.tech/](https://migrate.classisland.tech/) and can be accessed directly.

## Supported Softwares

Currently, the following software is supported for import:

| Software Name | Config File Type | Description |
| --- | --- | --- |
| [Electron Class Schedule](https://github.com/EnderWolf006/ElectronClassSchedule/) | `scheduleConfig.js` | Currently supports importing up to bi-weekly rotations only. |
| [ZongziTEK Blackboard Sticker](https://github.com/STBBRD/ZongziTEK-Blackboard-Sticker/) | `timetable.json` | Supports importing all information. Subjects are automatically generated based on their names. |


The following software is under development for import support:

- [ ] 全能班辅
- [ ] [Class Widgets](https://github.com/RinLit-233-shiroko/Class-Widgets/)
- [ ] [Education Clock](https://github.com/Return-Log/Education-Clock/)

The following software is not planned to be supported:

- [ClassTools](https://github.com/clansty/ClassTools/) Reason: Missing time layout information, cannot be imported.

## Developer Guide

Contributions from developers to improve this program are welcome.

This program is developed using Vue 3 + TypeScript, with Vite as the build tool. Note: The program strictly requires Node 20 and Yarn package manager for development.
