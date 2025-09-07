# URI Navigation

::: info
This article explains how users can use URI navigation. If you want to learn how to register custom URIs in ClassIsland, please refer to [Developing URI Navigations](../dev/uri-navigation.md)。
:::

ClassIsland supports navigation within the app using URIs, and also registers a URL protocol in the system so that ClassIsland functions can be called externally.

The default URI navigation protocol for ClassIsland is `classisland://`. Built-in navigation paths are under `classisland://app/`, while plugin extension paths are generally under `classisland://plugins/`.

## Register URI Protocol

You can enable the Register URL Protocol option in [App Settings -> General](classisland://app/settings/general) to register the URL navigation protocol.

![1721609023773](image/uri-navigation/1721609023773.png)

::: warning
In some cases, certain antivirus software may treat Register URL Protocol as a sensitive behavior and block it. If this happens when enabling the feature, please click Allow.
:::

Once registered, you can test whether it works by running [`classisland://app/test`](classisland://app/test) in App Test.

## Supported Features

You can call the following features via the URL protocol:

### App Settings

``` plaintext
classisland://app/settings/{page}/[...]
```

Opens the app settings

**Parameters**

| Parameter | Type | Description |
| -- | -- | -- |
| page | `string` | The ID of the settings page to navigate to |

By modifying the `page` parameter, you can navigate to a specific settings page.
Below are the built-in settings pages in ClassIsland and their corresponding `category` values:

| Page | Value | Type |
| -- | -- | -- |
| General | general | Built-in |
| Components | components | Built-in |
| Appearence | appearance | Built-in |
| Notifications | notification | Built-in |
| Window | window | Built-in |
| Weather | weather | Built-in |
| Updates | update | Built-in |
| Privacy | privacy | Built-in |
| Plugins | classisland.plugins | Extension |
| About ClassIsland | about | About |
| Test Page | test-settings-page | Debug |
| Debug | debug | Debug |
| Brushes | debug_brushes | Debug |

### Profile Settings

``` plaintext
classisland://app/profile/
```

Opens the profile settings window.

### Class Swap

``` plaintext
classisland://app/class-swap
```

Opens the class swap window.

::: note
This URI does not work if there are no timetable loaded currently.
:::

### Test Navigation

``` plaintext
classisland://app/test
```

Opens the test navigation window.
