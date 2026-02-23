---
icon: fa-solid fa-code
category:
  - 使用指南
tag:
  - 应用
  - 进阶功能
  - 附加设置
  - 提醒
  - 天气
  - 主题色提取
  - 调试
---

# Advanced

There are some advanced operations in this application. If you are interested in this, you can continue to learn about it.

## Attached settings

Some settings in the application can be set separately in subjects, time points, timetables and timetables. Know more in the column of [Attached Settings](./profile/attached-settings.md).

## Class reminder

This application will send reminders during class and after class. You can go to[【应用设置】→【提醒】→【上课提醒】](classisland://app/settings/notification/08F0D9C3-C770-4093-A3D0-02F3D90C24BC)to adjust the setting of reminders for the first and last lesson in.

In addition, you can also set separate reminders for each subject, time point, schedule, and timetable.

After setting up the city and other related settings, you can go to[【应用设置】→【提醒】](classisland://app/settings/notification/7625DE96-38AA-4B71-B478-3F156DD9458D)to enable weather forecast and meteorological warning functions.

::: tip
Weather related reminders also support additional settings, so you can turn on or off weather forecast reminders for specific time points. It is recommended to disable weather forecast reminders by default and enable them for specific time points.
:::

## Extract theme colors from wallpaper

This application can extract the theme color of the application from the wallpaper. This feature is enabled by default. You can go to[【应用设置】→【外观】](classisland://app/settings/appearance)to make further adjustments.

### Compatible with dynamic wallpapers

In theory, this application can extract the theme color of dynamic wallpapers. The following are the steps to enable this feature:

::: note
In compatibility mode, the application will retrieve the wallpaper currently used by the system from the registry. After closing, the application will take a screenshot from the corresponding wallpaper window to extract the wallpaper theme color.
:::

1. Turn off compatibility mode
2. Click the "Browse..." button on the right side of the "Wallpaper Window Class Name" option to open the window selection interface
3. Select the wallpaper layer window of the dynamic wallpaper software, and then click [OK].
4. The application will use the screenshot of this window to extract the theme color. You can also click on 'Preview Extraction Results' to check if the application is taking the correct screenshot of the wallpaper window.

If the dynamic wallpaper used comes with a color change effect, you can enable the 'Auto Extract Wallpaper Theme Color' function.

## Debugging menu

In[【应用设置】→【关于】](classisland://app/settings/about), click the top application icon 10 times in a row to enable[调试](classisland://app/settings/debug)and debugging interface with other plugins.

::: danger Attention!
The functions in the debug menu are for testing purposes only. If you do not know what you are doing, please do not use them casually. This function can be disabled in centralized control management.
:::
