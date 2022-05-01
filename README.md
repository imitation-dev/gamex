# gamex

## 成果演示

## 资源地址

> //www.youtube.com/watch?v=BK9_voy6VXU
> 作者：codewithsadee
> 代码：//github.com/codewithsadee/gamex
> 标题：Amazing eSports gaming website with html css javascript

[模仿源码仓库地址](https://github.com/zgsgs/imitation-game/tree/master/html/gamex)

<iframe src="https://player.bilibili.com/player.html?aid=937886389&bvid=BV1bT4y1v7bK&cid=570255058&page=1" width="100%" height="400" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true">
</iframe>

## 获得技能

1. 熟悉规范地使用 HTML5 的新增标签，如：`figure`、`section`
2. 熟悉使用*使用CSS自定义属性（变量）*进行页面设计
3. 熟悉使用  *Grid布局基础* 的使用方式
4. 熟悉使用 `transition`、`clip-path`、`text-transform`、`letter-spacing`、`box-shadow`、`scroll-snap-type`、`opacity`、`transform`、`place-items` 、`padding-inline`、`margin-block`、`outline` 和 `pointer-events` 等属性
5. 熟悉使用 `@media` 进行 CSS 自适应布局设计
6. 熟悉使用浏览器的 Devtools 工具 *自适应页面开发时，调试页面布局*
7. 熟悉不同布局切换时，页面元素的位置处理方案

## 心得体会

通过这次的模仿游戏，我对HTML5新标签的使用有了一个新的认识，更加明确了**超文本标记语言** HTML（**H**yperText **M**arkup **L**anguage）的具体含义：明确标注元素语义。从这一点上来说，写网页与写文章没有本质区别。它们两者都需要对信息内容进行不同层次的区分，如主标题、副标题、目录、一级标题、二级标题、三级标题、正文、引用等等，都是同一个概念来源。

此外，从这一点上来说 HTML 还有**确定页面结构**这一重要作用。就是是说，在没有 CSS、JavaScript 的情况下，HTML代码本身呈现出的效果就应该如一篇文章一样**层次分明，结构清晰**，这一点非常重要。

在这个项目搭建的过程中，作者遵循了**模块划分，自顶而下，由外到内**的设计原则。首先，使用注释把页面整体结构做模块划分，再从第一个模块开始编码，编码过程从外层逐步向下设计。这种方式可以更加清晰的把握页面整体结构，做到结构清晰的标准。

对于层叠样式表 CSS (**C**ascading **S**tyle **S**heets) 简单的使用很容易做到，但是当项目复杂时，如何组织代码就是一个棘手的问题。从这个项目中，可以看到作者使用**预先定义，全局重置，模块划分，自顶而下，移动优先**的设计原则。

预先定义颜色、间距、字体、过渡和剪切路径等公共属性，再对系统默认样式进行一定的重置以保证样式统一。同样是对页面不同模块进行划分，通过注释进行分割，通过 `class` 变量名进行具体区分。先实现外层布局，再逐步向内部布局，提炼局部公共样式到顶层。整体设计是移动端优先设计，最后再通过媒体查询技术对页面进行不同屏幕尺寸的适配。
