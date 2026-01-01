# Windows 7 Rolling Back Repair Way

We've discovered that the previous method of setting Environment Variables can cause some .NET Core Applications, such as Seewo Easinote, to fail. Users who previously installed the .NET 8 version of ClassIsland on Windows 7 and installed the Memory Leak Fix should uninstall the fix and install the .NET 6 Compatible Version of ClassIsland.
The specific steps are as follows:

1. Run `Powershell` **as Administrator** and then run the following command to delete the Environment Variables you set previously:

    ``` powershell
    [System.Environment]::SetEnvironmentVariable("DOTNET_GCName", $null, "User")
    [System.Environment]::SetEnvironmentVariable("DOTNET_GCName", $null, "Machine")
    [System.Environment]::SetEnvironmentVariable("DOTNET_EnableWriteXorExecute", $null, "User")
    [System.Environment]::SetEnvironmentVariable("DOTNET_EnableWriteXorExecute", $null, "Machine")
    ```

2. Restart your computer

3. Follow the instructions in the article [Installation & Getting Started](../setup.md#check-system-requirements) to install the .NET 6 Version of ClassIsland, replacing the original .NET 8 Version of ClassIsland. You only need to replace `ClassIsland.exe`; no other files need to be modified.


