---
slug: docusaurus-5-minutes
title: Docusaurus 5分钟教程
author: Adam Smith
author_title: Spark Store Contributor
author_url: https://github.com/metanoia1989
author_image_url: https://avatars.githubusercontent.com/u/19261473?v=4  
tags: [Docusaurus]
---


> 第一篇博客内容，今天学习了 Docusaurus 的5分钟教程，下面是记录。 


Docusaurus介绍
--------------

学习 Docusaurus 自带的5分钟快速入门教程，这些知识学的过程并写下来，印象会比较深刻，
并且后续还可以提供查询。



Markdown 页面示例
-----------------

创建页面原来如此的简单啊，其实Markdown适合纯粹展示文章内容，编写效率比较高。
而React适合展示复杂的效果和样式，适合宣传页面和复杂的页面，表现力强，效率稍低。
并且React可以接入动态的内容，虽然是静态生成器，不知道Docusaurus支不支持。


如何创建Docusaurus页面
---------------------

Docusaurus 支持 MDX 语法的Markdown文档和React组件。     

在 `src/pages` 目录添加 Markdown 或者 React 文件即可创建页面，Docusaurus 将会自动添加与文件名一致的路由。

* `src/pages/index.js` -> `localhost:3000/`
* `src/pages/foo.md` -> `localhost:3000/foo`
* `src/pages/foo/bar.js` -> `localhost:3000/foo/bar`


什么是Docusaurus的文档
----------------------


文档是通过以下组件连接起来的页面组：
* 一个侧边栏
* 上一页和下一页的导航
* 版本  

创建文档通过在 `sr/docs` 目录下添加 markdown 文件，将会自动生成对应的路由。     
如添加 `docs/hello.md` 生成 `http://localhost:3000/docs/hello`。        

侧边栏生成，需要添加元数据到文件头部。
```markdown
---
sidebar_label: 'Hi!'   # 侧边栏标题
sidebar_position: 3 # 位置  
---
```

或者显示地配置 `sidebar.js` 文件，默认是自动生成的。


创建博客页面
------------

每天博客文章都需要单独地创建页面，包含 tag、rss流、索引信息。   

创建文件 `blog/2021-02-28-greetings.md`，会根据slug生成路由 `http://localhost:3000/blog/greetings`  
```markdown
---
slug: greetings
title: Greetings!
author: Steven Hansel
author_title: Docusaurus Contributor
author_url: https://github.com/ShinteiMai
author_image_url: https://github.com/ShinteiMai.png
tags: [greetings]
---
```

这个博客页面没有右侧目录树诶，文档页面都有的，看看到时候怎么做出来。    
博客支持右侧目录树，但是要用 `#` 这种形式的才行吗，还是说，只支持二级目录。 


Markdown语法支持
---------------


### Links 链接

```markdown 
看看我创建的Markdown文件 [Markdown Page](/markdown-page).
Let's see how to [my react page](/my-react-page).
```

看看我创建的Markdown文件 [Markdown Page](/markdown-page).
Let's see how to [my react page](/my-react-page).


### 图片 Images 

大Logo图片路径 `/static/img/dalogo.png`，`static` 目录的资源会打包放到根目录，直接绝对路径引用即可。     
```md
![Spark Store Logo](/img/dalogo.png)
```
![Spark Store Logo](/img/dalogo.png)


### 代码块 Code Blocks

比普通Markdown语法，多了个标题的功能。  
````md
```jsx {3} title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
    return (
        <h1>Hello, Docusaurus!</h1>
    )
}
```
````

显示效果如下
```jsx {3} title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
    return (
        <h1>Hello, Docusaurus!</h1>
    )
}
```


### Admonitions 提示

Docusaurus 有特别的语法来支持警告和标注。

```md
:::note 注意
灰色的注意消息
:::

:::tip 提示消息 
这是绿色的提示消息
:::

:::info 默认
这是蓝色的默认消息
:::

:::caution 警告
这是黄色的默认消息
:::

:::danger 危险
红色的微信消息 
:::
```

:::note 注意
灰色的注意消息
:::

:::tip 提示消息 
这是绿色的提示消息
:::

:::info 默认
这是蓝色的默认消息
:::

:::caution 警告
这是黄色的默认消息
:::

:::danger 危险
红色的微信消息 
:::


### MDX and React Components

MDX 让文档直接支持 React 组件，来进行交互。 

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !



编译以及部署
------------

Docusaurus 是静态网站生成器，也叫 [Jamstack](https://jamstack.org/)[^1]


编译生产环境的代码，编译后的静态文件将会生成在 `build` 目录下
```sh
# 执行编译命令
$ npm run build

# 本来查看编译后的效果
$ npm run serve
```

详细的发布到 Github Pages 参考官方的教程 [Deploying to GitHub Pages](https://docusaurus.io/docs/deployment#deploying-to-githubbpages)




[^1]: Jamstack 是通过预渲染和解耦的原则，将网站和应用更易用和有弹性。 