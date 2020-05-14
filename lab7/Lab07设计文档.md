# Lab7设计文档


## 整体思路

根据css文件中的标签名与类名，使用`document.createElement(TagName)`创建元素对象,并用`className`属性设置相应的类名。

使用`xxx.appendChild()`将节点添加到各自的父类element,构成最终的html文档。

## 困难与解决方法

1.works数组的使用：

一开始以为需要手动将四个板块的内容添加进去，然而实际上可以化简为使用循环重复一个相同的操作。works为对象数组，每一个对象都有各自的author / lifetime / tips / photos属性。

2.同行显示问题：

`xxx.style.display = "inline";`使得author和lifetime在同一行

3.button上的文字设置：

`button.textContent`设置button上的文字内容



