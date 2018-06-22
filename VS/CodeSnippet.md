# 1. 自定义VS代码段

## 1.1. 目录

<!-- TOC -->

- [1. 自定义VS代码段](#1-自定义vs代码段)
    - [1.1. 目录](#11-目录)
    - [1.2. 准备工作](#12-准备工作)
    - [1.3. 一些重要的关键字](#13-一些重要的关键字)
        - [1.3.1. Header](#131-header)
        - [1.3.2. Snippet](#132-snippet)
            - [1.3.2.1. 命名空间](#1321-命名空间)
            - [1.3.2.2. 自定义字段](#1322-自定义字段)
            - [1.3.2.3. 代码块](#1323-代码块)
        - [1.3.3. 关键字](#133-关键字)

<!-- /TOC -->

## 1.2. 准备工作

1. 一个XML编辑器,虽然XML可以用文本编辑器打开,但是好的编辑器写起来还是得心应手.我个人使用的是vscode
2. 阅读官方的demo
    1. 下面以VS2017为例子,在菜单栏=>工具=>代码片段管理器,或者快捷键**ctrl k,b** .打开管理界面.如下图
    ![图片](https://github.com//heweigeng1/doc/blob/master/VS/img/%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5%E7%AE%A1%E7%90%86%E7%AA%97%E5%8F%A3.png?raw=true")
    2. 用编辑器打开目录下的**testclass.snippet**,花半小时阅读几个关键字,观察VS里的实际效果.就可以开始编辑自己的自定义代码段了.

## 1.3. 一些重要的关键字

### 1.3.1. Header

代码段的信息,包括快捷键、代码段的描述、名称等等</br>
**Title** 名称</br>
**Shortcut** 快捷键</br>
**Description** 描述</br>
**Author**  签名</br>
**SnippetTypes**  代码段的类型</br>

```xml
<SnippetTypes>
    <SnippetType>Expansion</SnippetType>
    <SnippetType>SurroundsWith</SnippetType>
</SnippetTypes>
```

> Expansion 允许将代码段插入到光标处。</br>
> SurroundsWith 允许将此代码段放置在一段选定的代码周围。

### 1.3.2. Snippet

代码段的主体,定义代码段的主要内容,例如命名空间、变量、代码段

#### 1.3.2.1. 命名空间

```xml
<Imports>
        <Import>
          <Namespace>Microsoft.VisualStudio.TestTools.UnitTesting</Namespace>
        </Import>
</Imports>
```

#### 1.3.2.2. 自定义字段

```xml
<Declarations>
    <Literal>
        <ID>name</ID>
        <ToolTip>替换为该测试类的名称</ToolTip>
        <Default>MyTestClass</Default>
    </Literal>
    <Literal Editable="false">
        <ID>TestClass</ID>
        <Function>SimpleTypeName(global::Microsoft.VisualStudio.TestTools.UnitTesting.TestClass)</Function>
    </Literal>
</Declarations>
```

> 声明了字段后就可以在代码块里使用

#### 1.3.2.3. 代码块

```xml
<Code Language="csharp"><![CDATA[[$TestClass$]
      public class $name$
      {
          $end$
      }]]></Code>
```

### 1.3.3. 关键字

**end** 光标位置
**selected** 选中的文本
