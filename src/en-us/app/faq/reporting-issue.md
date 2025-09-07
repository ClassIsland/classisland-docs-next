# How to Collect Debug Information

If you encounter issues while using ClassIsland, you can [Report them to the Developers](https://github.com/ClassIsland/ClassIsland/issues), or ask for help in the [Discussions](https://github.com/ClassIsland/ClassIsland/discussions) section or the [QQ Group](https://qm.qq.com/q/7BWNv3FcjK). At such times, you may be asked to provide logs, crash reports, or environment information. This document explains how to collect these details to help diagnose problems.

::: warning Before You Proceed…
You should check [App Help](../README.md) and [FAQ](faq.md) for your issue. Before asking others for help or reporting to developers, it’s worth checking these documents and attempting to resolve the problem yourself.
:::

## Collecting Logs

### Collect Logs from Current Session

You can open the log window using the following steps:

1. Open [App Settings](classisland://app/settings)。
    ![1722675858382](../image/reporting-issue/1722675858382.png)
2. Click More Options… (three dots in the top right) → Logs… to open the log window.
    ![1722675865242](../image/reporting-issue/1722675865242.png)

The log window displays the most recent 1000 logs of the current session. By default, only Warning and higher-level logs are shown. You can check other log levels in the filter to display them. You can also use Search Logs… to quickly filter logs by text or category.

![1722676362150](../image/reporting-issue/1722676362150.png)

Click a log entry to select it. Hold <kbd>Ctrl</kbd> or <kbd>Shift</kbd> to select multiple logs. After selecting logs, click Copy Selected to copy them to the clipboard.

### Collect Previous Logs

::: note
This method can only collect logs at the Warning level or higher.
:::

You can collect logs from previous sessions as follows:

1. Open Run and enter the following command to open Event Viewer:

    ```shell
    eventvwr.msc
    ```

2. In the left navigation bar, go to Windows Logs → Application.
    ![1722676552576](../image/reporting-issue/1722676552576.png)
3. In the right action panel, click Filter Current Log….
    ![1722676611278](../image/reporting-issue/1722676611278.png)
4. In the Event sources filter, select .NET Runtime, then click OK to close the filter window.
    ![1722676738332](../image/reporting-issue/1722676738332.png)
5. The view will now only show log entries from the .NET Runtime. Look for logs related to ClassIsland here.
    ![1722676851711](../image/reporting-issue/1722676851711.png)

## Exporting Diagnostic Data

::: warning
Diagnostic data may contain sensitive information. Please review it carefully before sharing.
:::

Diagnostic data includes app settings, currently loaded profiles, centralized control configurations (if any), system environment, and up to 1000 recent logs. Follow these steps to export diagnostic data:

1. Open [App Settings](classisland://app/settings)。
    ![1722675858382](../image/reporting-issue/1722675858382.png)
2. Click More Options… (three dots in the top right) → Export Diagnostic Data…
    ![1722676341109](../image/reporting-issue/1722676341109.png)
3. Choose a location to save the diagnostic data.
    ![1722676336906](../image/reporting-issue/1722676336906.png)
4. Wait a moment. Once export is complete, the application will automatically open the folder where the diagnostic data was saved.
