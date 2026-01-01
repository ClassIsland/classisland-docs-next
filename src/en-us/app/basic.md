# Basic

This document mainly describes the basic operations of the application.

## Main Menu

![1690356161339](image/basic/1690356161339.png)

When the application starts, it will create a tray icon in the system tray. After launching the software, the application's icon will be displayed in the taskbar tray. If you do not see this icon, please click the expand button on the left side of the tray to expand the tray menu and consider pinning the application's icon to the taskbar.

Clicking this icon will open the application's main menu. All functions of the software need to be accessed from here. You can right-click the tray icon to open the main menu and access various functions of the application.

## Main Interface

![1690355954552](image/basic/1690355954552.png)

The application will create a window with a semi-transparent background on the desktop, docked at the top center of the screen by default. This window will display the enabled schedule and mark the current time point.

When the mouse moves to the top of the main interface, the main interface will automatically reduce its opacity to ensure it does not block the content behind the window. Mouse clicks can penetrate the window to operate the content behind it.

The main interface of the software will be displayed at the top of the screen by default, showing the schedule, reminders, and other information. When a course is in session, the corresponding course will expand and display a progress bar below.
> [!warning]
> By default, ClassIsland uses `RawInput` to receive Input Events. This approach allows ClassIsland to respond more appropriately to mouse and touch input, but it can be incompatible. If this feature doesn't work properly on your device, you can disable the "Use Raw Input" option in [【Application Settings】→【Window】](classisland://app/settings/window).

In [【Application Settings】→【Window】](classisland://app/settings/window), you can adjust the docking position and window level of the main interface.

In [【Application Settings】→【Appearance】](classisland://app/settings/appearance), you can adjust the scaling size and background opacity of the main interface.

## Components

::: note
If you want to learn how to develop components, please refer to the [Development Documentation](../dev/components.md).
:::

![1722672907457](image/basic/1722672907457.png)

You can customize the information displayed on the main interface through the [【Components】](classisland://app/settings/components) feature.

The main interface displays the 【Date】 and 【Schedule】 components by default. You can add and remove components as needed.

To add a component, drag it from the component library to the component bar. Dragging components on the component bar can adjust the display order of the components. After selecting a component on the component bar, if the component has settings options, the component settings will automatically be displayed. Component settings are independent of each other.

::: tabs

@tab Add Component

![1722673345080](image/basic/1722673345080.png)

@tab Adjust Component Order

![1722673350054](image/basic/1722673350054.png)
:::

Click the 【Delete】 button next to the component to delete the selected component.

You can create, switch, export, and import different component configuration schemes in the upper right corner.

## Course Schedule Component

![1726322521451](image/basic/1726322521451.png)

The course schedule displayed by default on the main interface is actually a component. You can adjust its settings in the corresponding [Component Settings](classisland://app/settings/components). Course schedule display settings can also be configured in [Additional Settings](../advanced.md#Additional-Settings).

## Additional Information

By default, the application will display additional information next to the current time point (as shown in the figure).

![miniinfo](image/basic/miniinfo.png)

You can toggle the display of additional information and adjust the content of the displayed information in [Settings](classisland://app/settings/general).

![1707456825303](image/basic/1707456825303.png)

## Time Point End Countdown

::: warning 
This is not the same as the countdown to the start of a class. To adjust the countdown to the start of a class, please adjust the relevant settings in the [【Reminders】](classisland://app/settings/notification/08F0D9C3-C770-4093-A3D0-02F3D90C24BC) tab.
:::

By default, the application will display a countdown to the end of the time point 60 seconds before the end in the additional information display position.

![1707463775853](image/basic/1707463775853.png)

You can adjust this feature in [Settings](classisland://app/settings/general).

![1707456835205](image/basic/1707456835205.png)
