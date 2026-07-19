# Using Coding Agents?

If you want to use a coding agent to assist writing code during ClassIsland core or plugin development, read this page.

## Core development

The ClassIsland repository already includes `AGENTS.md`. Open the repository folder, and the project information will automatically load into the coding agent.

## Plugin development

For the best development experience, install the ClassIsland plugin development Skills.

### Install Skills

:::tabs#skills_install_method

@tab GitHub CLI (recommended, experimental)

After updating GitHub CLI to the latest version, install the plugin development Skills with:

```powershell
gh skill install ClassIsland/ClassIsland
```

Then follow the prompts to install the Skills. It is recommended to install all Skills by selecting the checkbox next to `(all skills)`.

@tab npm

Run:

```powershell
npx -y skills add ClassIsland/ClassIsland
# Too slow? use this to speed it up:
npx -y --registry=https://registry.npmmirror.com skills add ClassIsland/ClassIsland # recommended for domestic networks
pnpx skills add ClassIsland/ClassIsland # if your preferred Node package manager is pnpm
bunx skills add ClassIsland/ClassIsland # if you have Bun installed
```

@tab Manual install

1. [Clone the ClassIsland repository](development-plugins.md).
2. Locate the `skills` folder.
3. Copy all contents from that folder into `~/.agents/skills` (or the directory your coding agent uses).

:::

### Start developing plugins

Once the preparation is complete, continue reading [Start developing plugins](../plugins/create-project.md) to begin your plugin development journey!
