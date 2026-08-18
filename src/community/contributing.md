---
icon: code-commit
---

# 向 ClassIsland 文档做贡献

::: warning 注意
本文章是面向 _**ClassIsland 文档**_ 贡献者的贡献指南。如果您要为 **ClassIsland 本体** 做出贡献，请参阅 [ClassIsland 贡献指南](https://github.com/ClassIsland/ClassIsland/blob/master/CONTRIBUTING.md)。
:::

<img src="./image/contributing/Firefly_Sticker_01.png"
    width="85"
    alt="流萤 - 比心"/>

本文档的建设离不开广大用户的支持，感谢您考虑为本文档做出贡献❤️！在为本文档贡献之前，请先阅读本指南。

本文档基于 [VuePress](https://vuepress.vuejs.org/) 搭建。了解 [VuePress](https://vuepress.vuejs.org/) 的用法对编写本文档很有帮助。

## 贡献准则

- 使用小写文件名

    VuePress 对 URL 链接大小写敏感，使用包含大写字母的文件名可能会出现一些问题。在命名文档和文件夹时请使用小写字母，并用`-`分割每个单词，例如：

    ``` plaintext
    example-doc.md
    example-folder/
        |- another-doc.md
    ```

- 将图片放置在仓库文件中

    插入图片时请尽量直接将源文件插入到仓库文件中，不使用额外的 CDN / 图床承载图片，以便发布文档时自动将图片等文件打包到 GitHub Pages 上。插入的图片请放置在 `(文档目录)/image/(文档文件名)`下，例如：

    ``` plaintext
    example-doc.md
    example-doc-2.md
    image/
        |- example-doc/
        |   |- image1.png
        |   |- image2.png
        |- example-doc-2/
            |- image1.png
            |- image2.png
    ```

- 编写简单易读的文档

    在编写文档时请尽量做到简单易读。必要时可以插入图片、Mermaid 图表等便于读者理解。

- 经过格式化

    文档汉字与数字和字母间应该有空格（可以使用 VS Code 插件 AutoCorrect 自动实现此格式化），且在提交审核前应该至少使用 markdownlint 格式化一遍，否则您的 Pull Request 可能会被打回更改。

- 善用富文本

    使用 Markdown 自带的**粗体**、_斜体_等样式以及
    
    :::info 信息
    像这样的 VuePress 引用框
    :::
    
    对于组织文本、强调内容很有帮助。善用它们可以提升文档的质量，让用户一目了然地看到最重要的信息以及需要注意的内容。

- 善用 AI

    不推荐使用 AI 辅助编写全部文档。AI 生成的文档不仅有令人晕头转向的文风，有些地方也不尽正确。若要使用 AI 编写文档，请务必在提交前人工核实事实是否有误，并手动修改语句不通顺处，确保用户能够一目了然地看懂文档。不过，你可以让使用 AI 执行检查错别字等任务，让最终的文档更好更优质。

## 合并更改

您可以向本项目发起 [Pull Request](https://github.com/ClassIsland/classisland-docs-next/pulls) 来合并您的更改。在发起 Pull Request 时，请简要地描述您做的更改。

更改合并以后，您可以在 [最新版文档](https://docs.classisland.tech/) 中看到您的更改。

## 还有疑问？

您可以加入 [QQ 群 #1](https://qm.qq.com/q/4NsDQKiAuQ) / [QQ 群 #2](https://qm.qq.com/q/MhWCvrk7mu) 与开发者和其他用户讨论。
