# Contributing to the ClassIsland Documentation

::: warning Note
This article is a contribution guide for the _**ClassIsland Documentation**_.
If you want to contribute to the _**ClassIsland project itself**_, please refer to the [ClassIsland Contribution Guide](https://github.com/ClassIsland/ClassIsland/blob/master/CONTRIBUTING.md)。
:::

<img src="./image/contributing/Firefly_Sticker_01.png"
    width="85"
    alt="流萤 - 比心"/>

The growth of this documentation would not be possible without the support of the community. Thank you for considering contributing ❤️!
Before contributing to this documentation, please read this guide first.

This documentation is built with [VuePress](https://vuepress.vuejs.org/). Understanding how [VuePress](https://vuepress.vuejs.org/) works will be very helpful for writing documentation.

The documentation is currently hosted on [GitHub Pages](https://pages.github.com/) 上。

## Contribution Guidelines

- Use lowercase filenames

    VuePress is case-sensitive with URLs. Using filenames with uppercase letters may cause issues. When naming documents and folders, use lowercase letters and separate words with -, for example:

    ``` plaintext
    example-doc.md
    example-folder/
        |- another-doc.md
    ```

- Place images in the repository

    When inserting images, please include the source files directly in the repository instead of using external CDNs or image hosts. This ensures images and other files are automatically bundled into GitHub Pages when the documentation is published. Inserted images should be placed under `(document-directory)/image/(document-filename)`, for example:

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

- Write simple and readable documentation

    When writing documentation, keep it as simple and readable as possible. When necessary, insert images, Mermaid diagrams, or other visual aids to help readers understand.

## Merging Changes

You can submit a [Pull Request](https://github.com/ClassIsland/classisland-docs-next/pulls) to merge your changes into this project. When creating a Pull Request, please briefly describe the changes you’ve made.

After your changes are merged, you can view them in the [latest documentation](https://classisland.github.io/classisland-docs-next/)

## Still Have Questions?

You can [Join the QQ Group](https://qm.qq.com/q/4NsDQKiAuQ) to discuss with developers and other users.
