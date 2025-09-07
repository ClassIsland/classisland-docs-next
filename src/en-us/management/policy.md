# Centralized Management Policy File

Reference for centralized management policy files.

You can use a policy file to restrict certain features of ClassIsland instances, such as disabling profile editing or preventing settings changes.

## Example

```json
{
    "DisableProfileClassPlanEditing": true,
    "DisableProfileTimeLayoutEditing": true,
    "DisableProfileSubjectsEditing": true,
    "DisableProfileEditing": true,
    "DisableSettingsEditing": false,
    "DisableSplashCustomize": true,
    "DisableDebugMenu": true,
    "AllowExitManagement": true
}
```

## Table of Contents

| Property Name | Type | Description | Default |
| -- | -- | -- | -- |
| [`DisableProfileClassPlanEditing`](#DisableProfileClassPlanEditing) | `bool` | Disables timetable editing. | `false` |
| [`DisableProfileTimeLayoutEditing`](#DisableProfileTimeLayoutEditing) | `bool` | Disables time layout editing. | `false` |
| [`DisableProfileSubjectsEditing`](#DisableProfileSubjectsEditing) | `bool` | Disables subject editing. | `false` |
| [`DisableProfileEditing`](#DisableProfileEditing) | `bool` | Disables profile editing. | `false` |
| [`DisableSettingsEditing`](#DisableSettingsEditing) | `bool` | Disables app settings editing. | `false` |
| [`DisableSplashCustomize`](#DisableSplashCustomize) | `bool` | Disables splash screen customization. | `false` |
| [`DisableDebugMenu`](#DisableDebugMenu) | `bool` | Disables the debug menu. | `false` |
| [`AllowExitManagement`](#AllowExitManagement) | `bool` | Allows exiting centralized management.。 | `true` |

<a id="DisableProfileClassPlanEditing"></a>

## DisableProfileClassPlanEditing

When enabled, users cannot create, delete, or edit timetables. The Import from Excel feature is also disabled.
Temporary course switching and enabling temporary timetables are not affected.

<a id="DisableProfileTimeLayoutEditing"></a>

## DisableProfileTimeLayoutEditing

When enabled, users cannot create, delete, or edit time layouts. The Import from Excel feature is also disabled.

<a id="DisableProfileSubjectsEditing"></a>

## DisableProfileSubjectsEditing

When enabled, users cannot create, delete, or edit subjects.

<a id="DisableProfileEditing"></a>

## DisableProfileEditing

When enabled, users cannot edit any content within a profile. The Import from Excel feature is also disabled.
Temporary course switching and enabling temporary timetables are not affected.

<a id="DisableSettingsEditing"></a>

## DisableSettingsEditing

When enabled, users cannot adjust app settings. However, previously configured settings remain in effect.

<a id="DisableSplashCustomize"></a>

## DisableSplashCustomize

When enabled, users cannot customize the splash screen. If splash customization was previously configured, those settings will be cleared.

<a id="DisableDebugMenu"></a>

## DisableDebugMenu

When enabled, users cannot access the debug pages.

<a id="AllowExitManagement"></a>

## AllowExitManagement

Controls whether users can manually exit centralized management. If disabled, users cannot leave centralized management on their own.
