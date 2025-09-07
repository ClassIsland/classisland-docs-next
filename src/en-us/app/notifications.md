# Notifications

::: note
If you want to learn how to develop reminders, please refer to the [Developers Documentation](../dev/notifications/index.md)。
:::

The application will issue prominent notifications at certain time points. For example, it can remind you to prepare for class a specified time before it starts, and remind you when class ends while also previewing the next class (as shown below).

![1690357490894](image/basic/1690357490894.png)

![1690357510377](image/basic/1690357510377.png)

![1690357561703](image/basic/1690357561703.png)

![1690357548114](image/basic/1690357548114.png)

You can click Clear All Notifications in the main menu to clear all currently displayed reminders (as shown).

![1694923928375](image/Notifications/1694923928375.png)

## Notification Settings

You can adjust related notification settings in [Settings -> Notifications](classisland://app/settings/notification)。

![1694923983253](image/Notifications/1694923983253.png)

## Notification Priority

When issuing notifications, the app will display notices from providers earlier in the list before those later in the list.

## Emphasized Notifications

When an emphasized notification is issued, ClassIsland will display a full-screen notice effect and can also play a sound effect, enhancing the notification and bringing the ClassIsland main interface to the top. Notification sound effects are disabled by default, but you can customize which sound effect to play. You can also set different sound effects for each notification source.

You can adjust these settings in [Settings -> Notifications -> Advanced Settings](classisland://app/settings/notification).

![1712379341205](image/ChangeLog/1712379341205.png)

You can also set individual settings for each notification provider. To do so, you need to enable “Enable special advanced settings for this notification source”. These settings are applied in the following order: Per-provider settings in the settings interface → Settings requested by the provider when sending notifications → Global settings.

## Reading the Notice Content Aloud

When a reminder is issued, ClassIsland can read the reminder content aloud. This feature is disabled by default, but you can enable it in [Settings -> Notifications -> Advanced Settings](classisland://app/settings/notification).
