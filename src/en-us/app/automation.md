---
icon: fa-solid fa-scroll
category:
  - 使用指南
tag:
  - 应用
  - 主界面
  - 规则
  - 行动
  - 变量
  - 触发器
  - 自动化
---

# Automation

::: info ClassIsland welcomes your participation in improving this article ☆ Kira~

Welcome to assist in editing this article if you are currently reading it. Please read the [Contributing Specification](../community/contributing.html) and search for relevant information before editing. ClassIsland wishes you a pleasant time with this document.

:::

**Automation** is a new feature of ClassIsland 1.6 (Himeko) designed to provide simple and efficient automation operations.

::: tip Contribution tips

Although automation, rule sets, and action functions are currently supported in ClassIsland 2.0, they still cannot meet all user needs. If you have good ideas and suggestions for "automation" related functions, please feel free to go to[#1152](https://github.com/ClassIsland/ClassIsland/discussions/1152)to discuss.

:::

For example, you can: 

- When the video booth is opened, the main interface will automatically move to the upper right corner of the screen and only display the countdown of the current course;
- Automatically open the whiteboard before math class;
- Automatically turn off the device after school.

Automation can be combined with plugins to obtain richer functions, such as ExtraIsland, SuperAutoIsland, SystemTools, etc.

If you need more advanced automation features, you can also use professional automation software such as [zTasker](https://everauto.net/cn/index.html), [Power Automate](https://www.microsoft.com/zh-cn/power-platform/products/power-automate)or etc.

::: warning

Automation allows for automatic modification of various settings on ClassIsland and calling external programs, which may pose certain security risks.

Improper automation writing may have an impact on computer systems or normal teaching, please do not abuse it.
:::

## Overview

### Automation

**Automation** is a combination of triggers, rule sets, and actions.

The basic logic of an **automation** is: trigger the automated process → detect whether the rule set is met (if there is a rule set) → execute the action (if the rule set is not met, the action will not be executed).

![自动化设置界面](image\automation\自动化：应用设置界面.png)

### Trigger

**Trigger** can define when an automated process should be triggered.

::: note
This needs to be used in versions 1.5.4.1 and above.
:::

![触发器|0x340](image\automation\触发器.png)

- **`收到信号时`**, refers to the event of receiving the corresponding "broadcast signal" in "[Action](#action)". For example, when the `广播信号：信号1` action is executed in other automation processes, the trigger `收到信号时：信号1` will be triggered and the automation process where the trigger is located will be executed.
- **`调用uri时`**, it triggers upon receiving the following URI:`classisland://app/api/automation/run/xxx`; restore when receiving the following URI (with the 'restore' function enabled):`classisland://app/api/automation/revert/xxx`. (Refer to [Uri Navigation](./uri-navigation.md), need to enable the Register URL Protocol option).
- **`cron`**， This is a timed trigger, also known as a 'time trigger'. Due to space limitations, we will not elaborate further here. You can use search engines to search for relevant information and online format converters on your own.
- **`当应用启动时`**refers to triggering when the ClassIsland application starts (more precisely, after it has started).
- **`当应用退出时`**is triggered when the ClassIsland application exits (more precisely, just before exiting).
- **`规则集更新时`**When updating the rule set, such as changes in the focus window, time status, or the start of the main timer, etc.
-During class, after class, during break, and after school, which is the literal meaning; **`When the current time state changes, that is, when any of the first four situations are triggered.
-* * * * * Before a specific time point * * *, refers to the specified n seconds before * * class * * or * * break * *.
Before a specific time point | 500x0] (image \ automation \ before a specific time point. png)


### Rule set

**Ruleset can define triggering conditions for certain behaviors. You can also see it in the advanced hidden rules of the main interface and the hidden rules of components.

> [!tip] 
>In versions 1.5.4.0 and above, the rule set can only take effect if a trigger is set.
> 
>Some plugins will provide more rule set options. 
-Always true, this rule will return true in any situation.   
-Always false, this rule will return false in any situation.     
-When the class name of the current 'focus window' (which can also be understood as the window being used) meets the set name, this rule returns true. Case sensitive, regular expressions are available.   
-When the title of the foreground window meets the set name, this rule returns true. Case sensitive, regular expressions are available.   
-The foreground window state is, and when the current focus window state meets the conditions, this rule returns true. Optional values: 'Normal', 'Maximize', 'Minimize', 'Full Screen'.   
-When the process name of the current focus window in the foreground window meets the set name, this rule returns true. Case sensitive, regular expressions are available.
> [!Tip]
>The latest version of ClassIsland comes with a window rule debugging tool. You can open it in Settings - More (three dots in the top right corner) - Debug Window Rules. After opening, the tool will place itself at the top, making it convenient to view information without being obscured; Click on the window you want to query to obtain information such as window handle, window class name, window title, window status, and window process name.
>You can also use [Batch_2indow_Tool]（ https://github.com/SRInternet-Studio/Catch_Window_Tool ）View the class name or title of a window.   

-When the subject is, the next subject is, and the previous subject is, and the current subject meets the set subjects, this rule returns true.   
-The current time state is, and when the current time state satisfies the given time state, this rule returns true. Optional values: None, in class, during break, after school.   
-When the current weather condition meets the given weather conditions, this rule returns true.   
-When there is a weather warning, and the name of the current weather warning meets the set name, this rule returns true. Case sensitive, regular expressions are available.   
> [!tip]
>To achieve the effect of 'arbitrary weather warning', you can try checking the regular option and entering '\ *' at the end.   

-When there is still time left before the start/end of precipitation, and the current precipitation is within the set time before the end or start, this rule returns true. The unit is in minutes, and you can click the button in front of the input box to set whether it is the remaining time until the end or the beginning. The default is the remaining time from the start.   


! [Rule Set Example] (image \ automation \ rule set example. png)


### Action

**Action can define some actions, such as changing application settings, launching specified programs, etc.

> [!tip] 
>In versions 1.5.4.1 and above, you can also add 'Actions' in the [Edit Profile] - [Schedule] (./profile/time-llayout. md).
> 
>Some plugins will provide more action options.

! [Action Example] (image \ automation \ action example. png)

-Broadcast Signal, see [Trigger] (# Trigger) - When a signal is received, an in app broadcast signal can be emitted to trigger other automation processes.
-Component Configuration Scheme, which allows you to modify the configuration scheme (different JSON files) of [component] (basic. md # component). (As of version 1.7.0.0 and earlier, due to insufficient device performance, switching component configuration schemes when displaying mask reminders may cause errors. This issue can be alleviated by setting a certain waiting time before switching.)
-* * Application Theme * *, can change the theme of the application's main interface (basic. md # main interface), including 'bright', 'dark', or 'follow the system'.
-Window docking position, which can change the approximate display position of the application's main interface (basic. md # main interface), such as the upper left corner, upper middle corner, lower right corner, etc.
-Window Level, which can change the level of the application's main interface (basic. md # main interface) to top or bottom.
-Window offset to the right, window offset to the left, and window offset downward can be modified to adjust the degree of left, right, or downward offset of the application's main interface (basic. md # main interface).
-Running refers to running applications, URLs, or cmd commands.
-Display Reminder "refers to the pop-up of the application's main interface (basic.md # main interface) notification (notifications. md), which includes a mask and body. You can customize the content and duration of the mask, as well as the content and duration of the body (when the duration of the body is 0, there will be no normal reminder. If you do not want to display the body content, please set the body reminder text to empty and the body reminder duration to any positive number). You can also choose whether to enable voice playback of the mask and body (enabled by default).
-* * ` Waiting time * *, used to customize the waiting time of n seconds before executing the next operation.
-Display Weather Reminder "refers to the weather reminder (notifications. md) that pops up on the main interface of the application (basic. md # main interface). You can choose" three-day weather forecast "(default)," hourly weather forecast ", or" weather warning "(if there is currently no weather warning, the action of" display weather warning " will not be actived)
-Exiting ClassIsland refers to exiting the ClassIsland application.
-Restarting ClassIsland refers to restarting the ClassIsland application.



##Trigger and Recovery

! [Trigger and Restore | 500x0] (image \ automation \ restore. png)

Modifying the built-in settings of an application will create a * * Settings Overlay * * to make temporary changes to the application settings for the recovery of multiple actions. However, during the temporary change period, if you manually modify a setting, the setting item will follow the manual modification and will not be restored.

The 'restore' function is enabled by default. You can also click on the 【 Trigger 】 and 【 Restore 】 buttons in the upper right corner of the automation settings page to test the action. When the rule set is no longer satisfied, actions that have already been executed will be automatically restored. For example, modified application settings will be automatically reverted back.

::: note
The automated recovery function includes a "locking" mechanism, enabling the "recovery" function will prevent the automated process from being triggered again until it is "restored".
:::

> [!warning]
>If you use 'when rule set updates' as a trigger, it is recommended that you turn on the recovery function, as rule set updates are frequent and each change in the focus window triggers the automation process. This may result in frequent execution of actions in the automation process, which may cause problems such as computer lag, and may also interfere with teaching activities.


##Configuration plan

Like components, you can switch between multiple different configuration files for automation, or disable all or specified automation at any time.

! [] (image \ automation \ automation switch and configuration scheme. png)

You can also come[ 🏝️ Component Configuration Sharing（ https://github.com/ClassIsland/ClassIsland/discussions/categories/%E7%BB%84%E4%BB%B6%E9%85%8D%E7%BD%AE%E5%88%86%E4%BA%AB ）Share your automation solution with everyone.

##Technical details

1. You can drag the automation to sort them, and they will start executing in order from top to bottom. Actions can also be dragged and dropped with the mouse to achieve sorting of actions. The action of v1 can be dragged and dropped using the delete button, see: [# 645]（ https://github.com/ClassIsland/ClassIsland/issues/645 )

2. The stacking will follow a first come, first served order to stack up sequentially. Therefore, if you want a certain action to always take effect, you need to set exclusions for other automated rule sets to avoid it.

3. After editing components, automation, or files, do not shut down directly as this may result in the loss of your changes. You need to manually close the application settings window (or manually exit ClassIsland) to trigger the saving of these configurations.

4. Basic process of automated execution:

```flow
start=>start: 触发器被触发
有无规则集=>condition: 检查是否启用规则集?
是否符合规则集=>condition: 检查是否符合规则集?
行动=>operation: 执行行动
end=>end: 结束

start->有无规则集(yes,right)->是否符合规则集(yes,bottom)->行动->end
start->有无规则集(yes,right)->是否符合规则集(no,right)->end
start->有无规则集(no,bottom)->行动->end
```

<!-- 该文档主要贡献者：HelloWRC、干冰DryIce、wang-lu-yuan、wjj-8283、nosoftcn、Yeson38等（不分先后） -->

<!--v2的图片是我加的，如有不妥还请告知。from Yeson38-->

<!--英文版也是我翻译的(虽然机翻)-->