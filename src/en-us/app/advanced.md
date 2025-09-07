# Advanced Features

This application also provides some advanced operations. If you are interested, you can continue exploring them.

## Additional Settings

Some settings in the application can be configured separately for subjects, time points, timetables, and time layouts. These settings are applied in the following order: Subject → Time Point → Timetable → Time Layout. The earlier items take priority. You can edit these settings in the More Settings section of each element’s editing page.

The following settings support additional configuration. A “√” means this setting can be applied individually to that element:

| Setting Name | Subject | Time Points | Timetable | Time Layout |
| -- | -- | -- | -- | -- |
| Class Start/End Notification | √ | √ | √ | √ |
| Extra Info for Time Points | √ | √ | √ | √ |
| End-of-Time-Point Countdown | √ | √ | √ | √ |
| School End Notification |  |  | √ | √ |
| Weather Alerts & Forcasts | | √ | |  |

## Class Start/End Notification

The app issues notifications at the start and end of classes. You can adjust these in [App Settings -> Notification -> Class Notifications](classisland://app/settings/notification/08F0D9C3-C770-4093-A3D0-02F3D90C24BC).

In addition, you can configure class notices separately for each subject, time point, timetable, and time layout.

## Weather

The app can fetch local weather information and display it in quick info. You can adjust settings in [App Settings -> Weather](classisland://app/settings/weather).

After setting the city and related information, you can enable weather forecasts and weather alerts in [App Settings -> Notification](classisland://app/settings/notification/7625DE96-38AA-4B71-B478-3F156DD9458D).

::: tip
Weather-related reminders also support additional settings. This means you can enable or disable weather forecast reminders for specific time points. It is recommended to keep weather forecasts off by default and only enable them for specific time points.
:::

## Extract Theme Color from Wallpaper

The app can extract its theme color from the wallpaper. This feature is enabled by default. You can adjust it further in [App Settings -> Appearance](classisland://app/settings/appearance).

### Dynamic Wallpaper Compatibility

In theory, the app can extract theme colors from dynamic wallpapers. Here are the steps to enable this:

::: note
In compatibility mode, the app fetches the current wallpaper from the registry. If disabled, the app will take a screenshot of the wallpaper window to extract its theme color.
:::

1. Disable compatibility mode.
2. Click Browse… next to the Wallpaper Window Class Name option to open the window selection screen.
3. Select the wallpaper layer window of your dynamic wallpaper software, then click OK.
4. The app will use this window’s screenshot to extract the theme color. You can also click Preview Extraction Result to check if it is working correctly.

If the dynamic wallpaper has built-in color-changing effects, you can enable Automatically Extract Wallpaper Theme Color.

## Debug Menu

In [App Settings -> About](classisland://app/settings/about), click the app icon 10 times to unlock the [Debug](classisland://app/settings/debug) and [Brushes](classisland://app/settings/debug_brushes) interfaces.

::: danger Warning!
The features in the debug menu are for testing only. Do not use them if you don’t know what you are doing.
:::
