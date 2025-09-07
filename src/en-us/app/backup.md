# Application Data Backup

This article mainly describes the built-in backup feature of ClassIsland, as well as how to manually back up and restore application data.

![1724066299317](image/backup/1724066299317.png)

ClassIsland has a built-in backup function, which can be viewed and configured in [App Settings -> Storage](classisland://app/settings/storage).

When performing a backup, the following files and folders are copied to the `./Backups/Backup_<time>` folder:

- `Settings.json` - App Settings;
- `Config/` - Other app configurations;
- `Profiles/` - [Profile](./profile/README.md) information (including timetables, time layouts, subjects, etc.)

::: note
For your data security, it is recommended that you also manually back up the related configuration files to another location, in addition to using the built-in backup function.
:::

## Automatic Backup

By default, ClassIsland performs an automatic backup every 7 days, saving backup files to the `./Backups/Auto_Backup_<time>` folder.
Only the latest 16 automatic backups are kept by default. Manual backups and update backups are not affected.

## Update Backup

When the app is updated, ClassIsland automatically saves the application data into the `./Backups/Update_Backup_<app_version>_<time>` folder.

## Restore Backup

If configuration files become corrupted or lost, you can restore data by **exiting the application** and then copying the backup data files back into the app directory.
