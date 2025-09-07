# Publishing Plugins

You can package your plugin and distribute it by uploading it to the plugin repository or sharing it privately.

## Packaging the Plugin

:::tabs#pack_method

@tab Powershell Core

Use the following command in Powershell Core to package the plugin output/publish directory into a `.zip` compressed file with the extension `.cipx.`

``` powershell
Compress-Archive -Path "(Your plugin's build output directory, e.g., E:\xxx\MyPlugin\bin\Release\net8.0-windows\)" -DestinationPath ./myplugin.cipx
```

@tab Manual Packaging

1. Load your plugin into ClassIsland.
2. Open [App Settings -> Plugins](classisland://app/settings/classisland.plugins) in ClassIsland.
3. Select the plugin you want to package, click 【More options… (three dots in the upper right corner)】 in the plugin details interface, and click 【Package Plugin…】

    ![1722514478099](image/publishing/1722514478099.png)

    ![1722514515956](image/publishing/1722514515956.png)

4. Choose the location to save the plugin package.
5. Packaging complete.
:::

## Publishing to the Plugin Marketplace
[Plugin Index Repository]: https://github.com/ClassIsland/PluginIndex

:::info
The plugin marketplace here refers to the built-in plugin source within the application.
:::

**Plugins published to the marketplace must meet the following conditions:**

- The plugin content complies with relevant laws and regulations and contains no sensitive content such as pornography or politics.
- The plugin is an open-source project that conforms to the [OSD](https://opensource.org/osd) and has an open-source license.
- The code repository is hosted on GitHub.

Plugins that do not meet the above conditions can still be freely distributed under this project's open-source license (LGPLv3) in other forms but cannot be published on the plugin marketplace.

To publish your plugin to the marketplace, you need to supplement the original plugin manifest with additional information and upload the updated manifest file to the [Plugin Index Repository](https://github.com/ClassIsland/PluginIndex).

The following information needs to be added:

| Property | Name | Type | Description |
| -- | -- | -- | -- |
| RepoOwner | `string` | **Yes** | The GitHub repository owner of the plugin |
| RepoName | `string` | **Yes** | The GitHub repository name of the plugin |
| AssetsRoot | `string` | **Yes** | The asset root directory of the plugin, formatted as `<default branch>/<relative path of the plugin project in the repo>`, e.g., `master/ExamplePlugin.` |

For example:

```yaml title="classisland.example.yml" hl_lines="6-8"
id: classisland.example
name: 示例插件
description: 插件描述
entranceAssembly: "ClassIsland.ExamplePlugin.dll"
url: https://github.com/ClassIsland/ClassIsland
repoOwner: ClassIsland
repoName: ExamplePlugins
assetsRoot: master/HelloWorldPlugin

```

You also need to upload the packaged plugin to a Release in **your plugin's repository** and add MD5 checksum information.

:::tabs#pack_method

@tab via Powershell

1.Download the MD5 calculation PowerShell script from [here](https://github.com/ClassIsland/ClassIsland/raw/master/tools/generate-md5.ps1) and rename it as `generate-md5.ps1`
2. Run the following command:
    ```powershell
    ./generate-md5.ps1 打包输出目录
    ```
    This command will run the MD5 calculation script and output the MD5 checksum information in the required format to the file `checksums.md`.
3. Upload the plugin package to Releases and paste the contents of `checksums.md` into the release notes.

@tab Manual Addition

1.Use a tool like 7z to calculate the MD5 of the plugin package.
2. Upload the plugin package to Releases and add the checksum information to the release notes in the following format:
   ```markdown
   <!-- CLASSISLAND_PKG_MD5 {"PluginPackageFileName": "CalculatedMD5"} -->
   ```
   The JSON object enclosed within the comment tags is a dictionary where the keys are filenames and the values are MD5 hashes. You can expand this dictionary if there are multiple files.
:::

The supplemented plugin manifest file needs to be renamed to the plugin ID and uploaded to the [`index`](https://github.com/ClassIsland/PluginIndex/tree/main/index) folder in the root directory of the [Plugin Index Repository](https://github.com/ClassIsland/PluginIndex).

After uploading, you need to submit a PR to the index repository. Your plugin will be reviewed, and once approved, it will be added to the plugin marketplace. The relevant download information will be added to the plugin source based on the details in the plugin manifest.
