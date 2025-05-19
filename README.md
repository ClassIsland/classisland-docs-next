# ClassIsland 文档

这是 [ClassIsland](https://github.com/HelloWRC/ClassIsland) 文档仓库。本文档基于 [VuePress](https://vuejs.press/) 搭建

[在线查看文档](https://classisland.github.io/classisland-docs-next/)

## 开始编写文档

1. 安装 Node 20 环境（推荐使用NVM）
2. 克隆并进入文档仓库
3. 安装依赖（需要使用pnpm，可使用corepack安装）
   ```sh
   pnpm install
   ```

4. 启动 VuePress 服务器

    ``` bash
    pnpm run docs:dev
    ```

启动 VuePress 服务器后，在浏览器中打开终端输出的链接（默认是[http://localhost:8080/](http://localhost:8080/)）即可浏览文档。当本地文档做出更改时，浏览器中的文档将自动刷新。

本文档使用了 vuepress-plugin-md-enhance
 的一些扩展语法，请尽量直接编辑 Markdown 文件，而不是使用可视化 Markdown 编辑器。建议使用 [Visual Studio Code](https://code.visualstudio.com/) 编辑文档。

关于 VuePress 和 vuepress-plugin-md-enhance
 的用法，请参见 [VuePress 文档](https://vuejs.press/) 和 [vuepress-plugin-md-enhance 文档](https://plugin-md-enhance.vuejs.press/zh/)。

## 做出贡献

如果您有意愿为本文档做出贡献，请先阅读[贡献指南](https://docs.classisland.tech/community/contributing.html)。我们欢迎向本仓库提交 [Pull Request](https://github.com/ClassIsland/classisland-docs-next/pulls)。

## 致谢

感谢以下为本文档做出贡献的同学：

<a href="https://github.com/ClassIsland/classisland-docs-next/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ClassIsland/classisland-docs-next&max=1000" alt="贡献者名单"/>
</a>

## 许可证

<p xmlns:cc="http://creativecommons.org/ns#" >本文档以 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a> 许可协议授权。</p>
