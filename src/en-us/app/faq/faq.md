# Frequently Asked Questions

These are common issues that users can usually resolve on their own. You can quickly find the problem you’re facing using the table of contents below or the search function.

[[TOC]]

## Installation

Issues during installation.

### Prompt “You must install or update .NET to run this application.”

![1723087458369](../image/faq/1723087458369.png)

This popup usually appears because the .NET 8 runtime is not installed. Please click Download it now or download the .NET runtime from [this link](https://dotnet.microsoft.com/zh-cn/download/dotnet/thank-you/runtime-desktop-8.0.7-windows-x64-installer), then run the installer to install it. After installation, reopen the software and it should work.

### Memory Usage Extermely High After Launching in Windows 7

Consult the [Installing ClassIsland for Windows 7](../setup.md#check-system-requirements) page for the solution.

## System

Issues related to the system.

### After setting ClassIsland to auto-start on boot, it fails to start automatically

This may be because ClassIsland’s auto-start entry has been disabled or blocked by security software. You can check whether your security software is blocking ClassIsland’s startup entry, or go to the Startup Apps page in Task Manager to see if the entry has been disabled.

## Configuration Files

### During normal use, after the computer/display restarts, configuration files are lost or reverted

This situation may occur if the computer lost power unexpectedly, causing configuration files not to be saved completely. Currently, ClassIsland attempts to reduce the impact of unexpected power loss on configuration files through periodic backups.
If your configuration files are lost, you can find regularly created backups in the Backups folder under the application directory and restore them. For details, please refer to the [Application Data Backup](../backup.md#恢复备份) page.
