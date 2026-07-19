# 使用编码智能体开发？

如果您希望在 ClassIsland 本体/插件开发过程中使用编码智能体辅助编写代码，请阅读本页。

## 本体开发

ClassIsland 仓库已经包含`AGENTS.md`。打开仓库文件夹，项目信息将自动加载至编码智能体。

## 插件开发

要获得最佳开发体验，请安装 ClassIsland 插件开发 Skills。

### 安装 Skills

:::tabs#skills_install_method

@tab GitHub CLI（推荐，实验性）

更新 GitHub CLI 到最新版本后，使用以下命令安装插件开发 Skills：

``` powershell
gh skill install ClassIsland/ClassIsland
```

并按照提示安装 Skills。建议安装所有 Skills（勾选`(all skills)`旁边的复选框）。

@tab npm

运行以下命令之一：

``` powershell
npx -y skills add ClassIsland/ClassIsland
```

如果速度太慢或在安装过程中出现问题，请使用其他安装方式。

@tab 手动安装

1. [克隆 ClassIsland 仓库](development-plugins.md)。
2. 找到`skills`文件夹。
3. 将文件夹中的**所有**内容复制到`用户目录\.agents\skills`（或你的编码智能体指定的目录）。

:::

### 开始开发插件

一切准备工作就绪后，继续阅读文章[开始编写插件](../plugins/create-project.md)，开始您的插件开发之旅吧！
