---
typora-copy-images-to: init\02
---

# FAQ

记录一些万金油问题

## ★插件类

### ①VS Code能不能记忆插件？

> 场景需求：经常换电脑，都得重新安装插件，类似有个插件管理器的功能存在云端？

[Syncing](https://github.com/nonoroazoro/vscode-syncing) 是一个 VS Code 扩展，它能在多台设备之间同步你的所有 VSCode 配置（借助了你的 GitHub Gist）。

### ②一个深色主题插件？

**➹：**[Material Theme - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme)

### ③支持Vim的插件？

> 有几个 Vim 的插件，我是其中一个的 maintainer ，这几个插件各有千秋

### ④VS Code 之 Java语言环境配置？

**➹：**[redhat-developer/vscode-java: Java Language Support for Visual Studio Code](https://github.com/redhat-developer/vscode-java/)

### ⑤查找所有引用？

安装gtags即可！





## ★不知道分啥类

### ①launch.json 很难用

> launch.json 确实难用。我之前写 Ruby 的 debugger 的时候，debugger 几乎没有文档，更别说 launch.json 怎么定制了 ... 一方面要理解每个配置，另一方面则是为了几个常用的场景提供 sample，方便大家修改。

### ②关于对vscode的插件开发受编程语言限制吗？

> 如是否需要提前具备typescript基础？

需要 JavaScript 的知识储备

### ③标识文件修改？

> 在VS Code编辑文件后保存能直接标识这个文件已修改嘛（类似atom）？现在还得切到git栏目刷新一下，如果可以请问在哪设置？

默认情况下，在左侧资源管理里，能看到被修改的文件被高亮了

