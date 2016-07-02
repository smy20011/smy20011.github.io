---
layout: post
published: true
title: Windows Tools In Python
---
上一次我们介绍了学习python的一些资料，这次我们来介绍一些工具，能让你的学习过程更加轻松愉快。

# Pycharm

史上最强的Python IDE，没有之一。Pycharm的老爸（老妈）是一个著名的IDE开发公司，在程序语言方面浸淫了十几年。能够帮你自动的提示和补全Python的函数，变量名。帮你自动查出不好的写法，并提出更改意见。

![](https://www.jetbrains.com/pycharm/img/screenshots/simpleLook@2x.jpg)

Pycharm有社区版和商业版之分，一般我们就用社区版就可以了，商业版对有特殊开发需求的人有用，对于初学者来说，用社区版第一是支持正版，第二免去了安装时的很多麻烦。如果你第一次使用这个软件，肯定有诸多的不熟悉，下面这些教程可以帮到你。

* [Pycharm 官方教程](https://www.youtube.com/watch?v=5rSBPGGLkW0) 这个是pycharm官方出品的视频教程，每个教程5分钟左右介绍了Pycharm的基本特性，可以下到手机里慢慢观看。
* [Pycharm 教程系列](http://blog.csdn.net/chenggong2dm/article/details/9365437) 国内的Pycharm教程使用的版本相对比较老，不过大体上的功能没怎么变，因此老教程依然适用。

# Cmder

使用Python的时候，避免不了和命令行打交道。如果你在windows平台下，CMD的使用体验会让你痛不欲生，幸运的是，有一些windows程序员开发出了一些十分漂亮的命令行，让你的开发过程轻松愉快。[CMDer](http://cmder.net/)是基于ConEmu的一款软件，它为你提供了相当漂亮的初始设置，并且你能够对很多部分进行微调。支持多窗口，左右分屏等等功能。简单来说，如果你想要你的命令行从这样：

![CMD.PNG]({{site.baseurl}}/imgs/CMD.PNG)

变成这样

![Cmder.PNG]({{site.baseurl}}/imgs/Cmder.PNG)

那么Cmder是你的绝佳选择，相关教程在[这里](http://bg.biedalian.com/2014/09/11/cmder.html)

# VS Code

如果你对Pycharm的速度不满意，或者你不满足使用ide，想用高大上的编辑器的话，VS Code是你比较好的选择。VS Code是微软~~被三哥占领后~~开发的一款强大的编辑器，拥有讨人喜欢的外观和不错的初始配置，适合各个熟练程度的开发者使用。其他的选项有Textmate和ultraedit，但是这两个编辑器都要钱，如果不购买的话会弹窗，比较影响体验。

![Demo](https://raw.githubusercontent.com/DonJayamanne/pythonVSCode/master/images/general.gif)

安装VS Code之后需要你安装Python插件，教程[在这里](https://code.visualstudio.com/docs/languages/python)，很可惜的，没有很好的VS Code中文教程，要学习的话只能通过官网的教程进行学习。这里有一些英文的资料

* [Getting Started with Visual Studio Code](https://johnpapa.net/getting-started-with-visual-studio-code/)
* [微软官方的教程](https://code.visualstudio.com/Docs)

# Git

在写文档的时候，你有没有过因为不小心覆盖丢掉了几周的成果的经历，有没有想找出几周之前的版本看一看的经历。写程序的时候，几乎所有人都会遇到类似的事情：你想实验一个功能的不同写法，你想比对几周之前的程序和现在比有什么长进，更重要的是，你不希望你的程序因为系统故障而让你几个月的努力小时（活生生的例子在[这里]()）Git以及其他的版本控制工具是解决这种问题的良方。

要说Git的身世真的不一般，它的老爸是Linus Torvalds。全世界80%的手机系统，70%以上的服务器，以及你现在在刷的s1，都是基于他的Linux系统。他在写Linux的时候使用的版本控制软件叫做BitKeeper，由于Linux内核的一个开发者逆向了这个工具，BitKeeper的开发商决定收回给Linus的免费使用权。Linus一怒之下在10天之内写出了git（不愧是大牛）。经过10年的发展，目前绝大部分的开源软件都是用git作为版本控制软件。著名的~~同性交友~~开源社区Github也得名于git。

Git做的事情很简单，就是给你的代码一个快照，称为一个commit。当你提交代码之后，你的代码就会变为Git系统里的一个快照，你可以通过一个命令回到过去，也可以从过去跳到现在。

除此之外，Git能让你对任何时候的快照进行分支，并让你能够尝试不同选择带来的不同结果。Git的特性使得开启一个分支几乎不用任何代价，你可以从容的从一个~~世界线~~分支跳转到另一个分支，尝试不同代码方式带来的结果，当你觉得这个分支的结果让你满意的时候，你可以把一个分支合并到另一个分支里面


http://www.codingpy.com/
