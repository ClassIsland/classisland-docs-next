# Tutorial: Manually Writing a Centralized Management Configuration File

This tutorial will guide you through manually writing a centralized management configuration file and hosting it statically online.

::: note
If you need to maintain centralized management for a large organization, manually editing the configuration can be very cumbersome. In that case, it’s recommended to use a management server.
:::

Whenever you see the 👉 symbol, it indicates an action you should take. Other content is for reference and deeper understanding.

::: tip
In this tutorial, we’ll use GitHub as an example and use [GitHub Codespaces](https://github.dev) to edit these configuration files online. If you want to use another platform, replace the GitHub-related steps with your own.
:::

::: tip
If you cannot connect to GitHub from your network environment, consider using an alternative (such as [Gitee](https://gitee.com)) to complete this tutorial.
:::

## Before You Begin

We need to install a local instance of ClassIsland to test centralized management.

**👉 Follow the instructions to [Download and Install ClassIsland](https://github.com/HelloWRC/ClassIsland?tab=readme-ov-file#%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8)。**

!!! tip "If you have already installed ClassIsland before, it’s recommended to install a fresh instance in another location and complete this tutorial there."

To host our management configuration, we need to [Create a new repository](https://github.com/new) on github.

**👉 On GitHub, [Create a new public repository](https://github.com/new), and name it `classisland-mgmt-cfg`.**

On the repository creation page, check the box for Add a README file.**

![1715485878305](image/tutorial-create-management-config/1715485878305.png)

::: note
For convenience, we use `classisland-mgmt-cfg` as the repository name here, but you can choose a name that you like.
:::

By checking Add a README file, GitHub will create and initialize the repository with a README file.

After the repository is created, you’ll see the repository main page (as shown):

![1715486027121](image/tutorial-create-management-config/1715486027121.png)

Now we need to enter GitHub Codespaces to edit the files.

**👉️On the repository page, press <kbd>.</kbd> (period key) to enter GitHub Codespaces.**

![1715486161995](image/tutorial-create-management-config/1715486161995.png)

Now everything is set and ready to go, we can begin writing the centralized management configuration files.

## 编写集控清单

Writing the Management Manifest

**👉️Create a new file and name it `manifest.json`.**

**👉️Paste the following text into `manifest.json`:**

```json title="manifest.json"
{
    "ServerKind": 0,
    "OrganizationName": "Hello"
}
```

This is the most basic manifest file. It specifies that the server type is static hosting and sets the organization name. We will expand this file later as needed.

::: tip
Try modifying the `OrganizationName` field using the [Configuration Documentation](configure.md#mgmt-manifest) to set a custom organization name.
:::

**👉️Commit the changes in the editor’s Git panel.**

We have to commit our changes to Github. We can see our file on github once it has been committed

Next, go back locally and create a centralized management configuration file in the ClassIsland installation directory to tell the instance where to fetch the manifest.

**👉️In the ClassIsland installation folder, create a new file named `ManagementPreset.json` and open it with a text editor.**

**👉Paste the following text into `ManagementPreset.json`, replacing the GitHub username with your own in `ManifestUrlTemplate`:**

```json title="ManagementPreset.json"
{
    "ManagementServerKind": 0,
    "ManagementServer": "",
    "ManifestUrlTemplate": "https://raw.githubusercontent.com/（把这里替换成你的 GitHub 用户名）/classisland-mgmt-cfg/master/manifest.json"
}
```

After editing, you can import this configuration into the ClassIsland instance.

**👉Run ClassIsland.**

If this is your first run, ClassIsland will display the welcome wizard.

**👉同Agree to the license agreement, then click the Join Management button.**

![1715487543978](image/tutorial-create-management-config/1715487543978.png)

::: tip
If you’ve already completed the welcome wizard, you can [join management using this guide](connect-to-mgmt-server.md).
:::

The join management window will open and automatically load the `ManagementPreset.json` file from the app directory. You can also click Browse to select another configuration file.

![1715487558487](image/tutorial-create-management-config/1715487558487.png)

**👉Enter `TEST` in the ID field.**

The ID identifies this ClassIsland instance. In real use, you could set it as a class name, room number, or other recognizable name.

**👉Click the Connect button.**

The app will download the management manifest. Speed depends on your network environment. After downloading, the app will show the final confirmation window.

**👉在弹出的确认提示框上，点击【加入】按钮。**

![1715487625695](image/tutorial-create-management-config/1715487625695.png)

**👉In the confirmation prompt, click Join.**

![1715487641719](image/tutorial-create-management-config/1715487641719.png)

**👉In the success prompt, click OK.**

The app will restart. After restarting, go to App Settings, and you’ll see a Managed by your organization badge at the top right.

![1715487682961](image/tutorial-create-management-config/1715487682961.png)

🎉 Congratulations! You’ve successfully joined centralized management!

## Fetching Profiles

Although we joined centralized management, it doesn’t do anything yet. Next, we’ll introduce profile configuration.

We’ve prepared profile files for this tutorial so you can focus on writing the configuration.

Back in GitHub Codespaces, continue with the following steps:

**👉Copy [this file](https://gist.github.com/HelloWRC/a0d817648c8f65f26e7d1ab3eb762917/raw/ff6867942311c0c297e90710ab5cd7d147ae98eb/subjects.json) into `subjects.json`**

**👉Copy [this file](https://gist.githubusercontent.com/HelloWRC/a0d817648c8f65f26e7d1ab3eb762917/raw/ff6867942311c0c297e90710ab5cd7d147ae98eb/timelayouts.json) into `timelayouts.json`**

**👉Copy [this file](https://gist.github.com/HelloWRC/a0d817648c8f65f26e7d1ab3eb762917/raw/ff6867942311c0c297e90710ab5cd7d147ae98eb/classplans.json) into `classplans.json`**

These files store subjects, time layouts, and timetables. Although still in ClassIsland profile format, only the relevant parts are loaded. You can also upload and use your own profile files.

**👉Add the highlighted code below into `manifest.json`, replacing the GitHub username in all URLs with your own.。**

```json title="manifest.json" hl_lines="4-15"
{
    "ServerKind": 0,
    "OrganizationName": "Hello",
    "ClassPlanSource": {
        "Value": "https://raw.githubusercontent.com/(replace with your GitHub username)/classisland-mgmt-cfg/master/classplans.json",
        "Version": 1
    },
    "TimeLayoutSource": {
        "Value": "https://raw.githubusercontent.com/(replace with your GitHub username)/classisland-mgmt-cfg/master/timelayouts.json",
        "Version": 1
    },
    "SubjectsSource": {
        "Value": "https://raw.githubusercontent.com/(replace with your GitHub username)/classisland-mgmt-cfg/master/subjects.json",
        "Version": 1
    }
}
```

These three URLs point to subjects, time layouts, and timetables stored in your GitHub repository. The [`ReVersionString`](configure.md#reversionstring) type stores a URL and its version number. ClassIsland only updates data if the manifest version is newer than the local version.

::: warning
When modifying these URLs or the files they point to, always increase the version number. Otherwise, ClassIsland instances may not update the data.
:::

**👉️Commit the changes in the editor’s Git panel.**

**👉️Restart the ClassIsland instance.**

If everything was correct, ClassIsland will fetch the profiles. After startup, go to Profile Editor to see them.

![1715490985052](image/tutorial-create-management-config/1715490985052.png)

## Applying URL Templates

We’ve successfully distributed profiles, but in real deployments across multiple devices, each device may need different timetables. To achieve this, we can add URL templates to the manifest so that ClassIsland replaces them with each instance’s ID.

For example, take this URL:

``` plaintext
https://example.com/client/{id}/policy.json
```

Here `{id}` is a template. When ClassIsland requests the file, it replaces `{id}` with the instance’s management ID. With our tutorial ID `TEST`, the request becomes:

``` plaintext
https://example.com/client/TEST/policy.json
```

Using this, you can assign unique IDs to each instance so that different timetables are distributed.

For more about URL templates, you can see [this file](client-identify.md#url-template)。

**👉️Create two new folders in the repository named `TEST` and `HELLO`**

**👉Copy [this file](https://gist.github.com/HelloWRC/a0d817648c8f65f26e7d1ab3eb762917/raw/ff6867942311c0c297e90710ab5cd7d147ae98eb/classplans.json) into `TEST/classplans.json`**

**👉Copy [this file](https://gist.githubusercontent.com/HelloWRC/a0d817648c8f65f26e7d1ab3eb762917/raw/9226d120d3eeab8861a665236ad005f40df0cf20/classplans-2.json) into `HELLO/classplans.json`**

**👉Replace the highlighted code in `manifest.json`, again changing the GitHub username in the URLs.**

```json title="manifest.json" hl_lines="5-6"
{
    "ServerKind": 0,
    "OrganizationName": "Hello",
    "ClassPlanSource": {
        "Value": "https://raw.githubusercontent.com/(replace with your GitHub username)/classisland-mgmt-cfg/master/{id}/classplans.json",
        "Version": 2
    },
    "TimeLayoutSource": {
        "Value": "https://raw.githubusercontent.com/(replace with your GitHub username)/classisland-mgmt-cfg/master/timelayouts.json",
        "Version": 1
    },
    "SubjectsSource": {
        "Value": "https://raw.githubusercontent.com/(replace with your GitHub username)/classisland-mgmt-cfg/master/subjects.json",
        "Version": 1
    }
}
```

This adds a URL template for the timetable. When fetching, it replaces `{id}` with the instance ID. The version was also incremented to `2` to force an update.

**👉️Commit the changes in the editor’s Git panel.**

**👉️Restart the ClassIsland instance.**

Now you’ve added a template! Try [exiting management](connect-to-mgmt-server.md#exit) and rejoining with the ID `HELLO`. You’ll see the app fetched a different timetable.

In real deployments, you can add templates to different URLs as needed.

## Policies

Apart from distributing timetables, centralized management can also enforce policies that restrict instance features. You can configure policies for your organization.

**👉️Copy the following into `policy.json`**

```json title="policy.json"
{
    "DisableSettingsEditing": true
}
```

This is a simple [policy file](policy.md) that tells ClassIsland to disable settings editing.

**👉Replace the highlighted code in `manifest.json`, updating the GitHub username in the URLs.**

```json title="manifest.json" hl_lines="16-19"
{
    "ServerKind": 0,
    "OrganizationName": "Hello",
    "ClassPlanSource": {
        "Value": "https://raw.githubusercontent.com/(replace with your GitHub username)/classisland-mgmt-cfg/master/{id}/classplans.json",
        "Version": 2
    },
    "TimeLayoutSource": {
        "Value": "https://raw.githubusercontent.com/(replace with your GitHub username)/classisland-mgmt-cfg/master/timelayouts.json",
        "Version": 1
    },
    "SubjectsSource": {
        "Value": "https://raw.githubusercontent.com/(replace with your GitHub username)/classisland-mgmt-cfg/master/subjects.json",
        "Version": 1
    },
    "PolicySource": {
        "Value": "https://raw.githubusercontent.com/(replace with your GitHub username)/classisland-mgmt-cfg/master/policy.json",
        "Version": 1
    }
}
```

This adds a reference to the policy in the manifest.

**👉 Commit the changes in the editor’s Git panel.**

**👉️Restart the ClassIsland instance.**

After restart, open the settings page—you’ll see settings editing has been disabled.

![1716004833729](image/tutorial-create-management-config/1716004833729.png)

For more on policies, see the [policy file documentation](policy.md) and configure as needed.

## Conclusion

🎉 Congratulations! You now have a basic understanding of manually editing centralized management. You can continue exploring other documents to deepen your knowledge of writing management configurations.
