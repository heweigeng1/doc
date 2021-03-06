# 1. 目录

<!-- TOC -->

- [1. 目录](#1-目录)
  - [1.1. 优点](#11-优点)
  - [1.2. 语法规则](#12-语法规则)
    - [1.2.1. 标题](#121-标题)
    - [1.2.2. 列表](#122-列表)
    - [1.2.3. 引用](#123-引用)
    - [1.2.4. 连接与图片](#124-连接与图片)
    - [1.2.5. 锚点](#125-锚点)
    - [1.2.6. 缩进](#126-缩进)
    - [1.2.7. 转义符](#127-转义符)
    - [1.2.8. 表格](#128-表格)
    - [1.2.9. 华丽的分割](#129-华丽的分割)
  - [***](#)
    - [1.2.10. 代码块](#1210-代码块)
    - [1.2.11. 使用html](#1211-使用html)
    - [1.2.12. 目录](#1212-目录)

<!-- /TOC -->

## 1.1. 优点

1. 可以导出html,pdf与md文件
2. 学习成本低
3. 专注内容.降低考虑样式

## 1.2. 语法规则

### 1.2.1. 标题

```md
# 一级标题  
## 二级标题  
### 三级标题
```
以此类推，一共6级

### 1.2.2. 列表

```md
* 无序列表
```

* 无序列表

```md
1. 我是第一列  
2. 我是的二列  
```

1. 我是第一列  
2. 我是的二列 


### 1.2.3. 引用

```md
> 这是引用
>> 引用好看吗?
>>> 我还是引用哦
>>>> 1. 引用里有其他东东
```

> 这是引用
>> 引用好看吗?
>>> 我还是引用哦
>>>> 1. 引用里有其他东东

### 1.2.4. 连接与图片

```md
[www.baidu.com](http://www.baidu.com)  
<http://www.baidu.com>

[google][1],[baidu][2]就是码农最常用的工具.

[1]:http://www.google.com "Google"  
[2]:http://www.google.com "baidu"  

![img](https://cn.vuejs.org/images/logo.png)
```

[www.baidu.com](http://www.baidu.com)  
<http://www.baidu.com>

[google][1],[baidu][2]就是码农最常用的工具.

[1]:http://www.google.com "Google"  
[2]:http://www.google.com "baidu"  

![img](https://cn.vuejs.org/images/logo.png)

### 1.2.5. 锚点

跳转到[目录](#目录)  
跳转到[优点](#优点)  
跳转到[语法规则](#语法规则)

### 1.2.6. 缩进

```md
1. 我是普通列表
    1. 缩进-我按了tab按键
    1. 第三次
1. 第二行
    1. 我缩进
    1. 我缩进

* 无需列表的缩进
    >我按了tab  
    >我也缩进了
```

1. 我是普通列表
    1. 缩进-我按了tab按键
    1. 第三次
1. 第二行
    1. 我缩进
    1. 我缩进

* 无需列表的缩进
    >我按了tab  
    >我也缩进了

### 1.2.7. 转义符

```md
1. \[]()
```

1. \\\[]()

### 1.2.8. 表格

```md
| 商品 | 价格  | 数量 |
|------|-------|------|
| 苹果 | 10.00 | 100  |
```

| 商品 | 价格  | 数量 |
|------|-------|------|
| 苹果 | 10.00 | 100  |

### 1.2.9. 华丽的分割

```md
三个连续的*
三个连续的-
```

*** 
---  

### 1.2.10. 代码块

* 默认代码块

```
#include <stdio.h>
int main(void)
{
    printf("Hello world\n");
}

```

* 指定代码块语法  
``` javascript 
var a = "才子一生平安" 
function test（）{
    console.log("ok");
}
```

### 1.2.11. 使用html

* 代码

``` html 
<div class="footer">
   © 2004 Foo Corporation
</div>
```

<div class="footer">
   © 2004 Foo Corporation
</div>

* 代码

``` html 
<table>
    <tr>
        <th rowspan="2">日期</th>
        <th>星期一</th>
        <th>星期二</th>
        <th>星期三</th>
    </tr>
    <tr>
        <td>曼玉</td>
        <td>楚红</td>
        <td>青霞</td>
    </tr>
</table>
```

<table>
    <tr>
        <th rowspan="2">日期</th>
        <th>星期一</th>
        <th>星期二</th>
        <th>星期三</th>
    </tr>
    <tr>
        <td>曼玉</td>
        <td>楚红</td>
        <td>青霞</td>
    </tr>
</table>

### 1.2.12. 目录

1. 安装 Markdown TOC 插件
    * 会根据标题生成目录.   
    * 右键菜单会多出几个选项，可以逐一测试效果
    * 生产时跳转锚点会有问题
    * 可以手动把生成的代码调整一下,让自动生成的代码不重新生成
    * 具体效果可以参考[目录](#目录)

2. 目录如果出现格式化错误.可以在设置搜索到eol配置项,把auto修改为另外合适的行尾符号

* 推荐去我的[github](https://github.com/heweigeng1/doc/blob/master/markdown-doc.md)下载看源代码更直观.
* 希望这篇博客能帮到你.