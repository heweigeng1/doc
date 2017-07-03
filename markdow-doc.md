# 目录
 - [目录](#目录)
    - [优点](#优点)
    - [语法规则](#语法规则)
        - [标题](#标题)
        - [列表](#列表)
        - [引用](#引用)
        - [连接与图片](#连接与图片)
        - [锚点](#锚点)
        - [缩进](#缩进)
        - [转义符](#转义符)
        - [表格](#表格)
        - [华丽的分割](#华丽的分割)
        - [代码块](#代码块)
        - [使用html](#使用html)
## 优点
1. 可以导出html,pdf与md文件
2. 学习成本低
3. 专注内容.降低考虑样式

## 语法规则

### 标题

\# 一级标题  
\## 二级标题  
\### 三级标题

以此类推，一共6级

### 列表
* 无序列表

1. 我是第一列  
2. 我是的二列  

### 引用
> 这是引用
>> 引用好看吗?
>>> 我还是引用哦
>>>> 1. 引用里有其他东东

### 连接与图片

[www.baidu.com](http://www.baidu.com)  
<http://www.baidu.com>

[google][1],[baidu][2]就是码农最常用的工具.

[1]:http://www.google.com "Google"  
[2]:http://www.google.com "baidu"  

![img](https://cn.vuejs.org/images/logo.png)

### 锚点

跳转到[入门](#入门)  
跳转到[优点](#优点)  
跳转到[语法规则](#语法规则)


### 缩进

1. 我是普通列表
    1. 缩进-我按了tab按键
    1. 第三次
1. 第二行
    1. 我缩进
    1. 我缩进

* 无需列表的缩进
    >我按了tab  
    >我也缩进了

### 转义符
1. \[]()

### 表格

| 商品  | 价格    | 数量  |
| --- | ----- | --- |
| 苹果  | 10.00 | 100 |

### 华丽的分割

*** 
---  

### 代码块

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

### 使用html
* 例1

<div class="footer">
   © 2004 Foo Corporation
</div>

* 例2
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



