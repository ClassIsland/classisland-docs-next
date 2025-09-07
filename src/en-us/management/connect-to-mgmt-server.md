# Connect/Exit Centralized Management

After deploying the configuration file/management server, you still need to connect the ClassIsland instance to the centralized management server.

<a id="from-settings"></a>

## Join from Settings

ClassIsland loads centralized management settings from the [Management Configuration File](configure.md#mgmt-configure). After writing the configuration file, go to App Settings → More Options (three dots in the top right) → Join Management… to load the configuration file and connect to the centralized management service.

![image](https://github.com/HelloWRC/ClassIsland/assets/55006226/07d32ffc-a7a7-45e2-844e-58ae3f998d47)

![image](https://github.com/HelloWRC/ClassIsland/assets/55006226/b8013062-1b71-4a10-9e52-12f15928fb4c)

<a id="from-wizard"></a>

## Join During App Initialization

You can also connect during the first run of the app by clicking the Join Management button at the bottom right of the welcome wizard home page.

![image](https://github.com/HelloWRC/ClassIsland/assets/55006226/6e0f2c6d-5bff-4677-bf3a-caa4319a990e)

::: tip
If you rename the management configuration file to `ManagementPreset.json` and place it in the app directory, it will be automatically selected and loaded when joining centralized management.
:::

<a id="exit"></a>

## Exit Centralized Management

To exit centralized management, go to App Settings → More Options (three dots in the top right) → Exit Management….
![image](https://github.com/HelloWRC/ClassIsland/assets/55006226/b354b1fa-7347-4204-9546-effe0045c56e)

::: note
If you want to disable the option to exit centralized management, set `AllowExitManagement` to `false` in the management policy. [More Details](policy.md#allowexitmanagement)
:::
