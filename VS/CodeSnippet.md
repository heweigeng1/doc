# 自定义VS代码段
## 准备工作
1. 一个XML编辑器,虽然XML可以用文本编辑器打开,但是好的编辑器写起来还是得心应手.我个人使用的是vscode
1. 阅读官方的demo    
    1. 下面以VS2017为例子,在菜单栏=>工具=>代码片段管理器,或者快捷键**ctrl k,b** .打开管理界面.如下图     
    ![图片](https://github.com//heweigeng1/doc/blob/master/VS/img/%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5%E7%AE%A1%E7%90%86%E7%AA%97%E5%8F%A3.png?raw=true")         
    2. 用编辑器打开目录下的**testclass.snippet**,花半小时阅读几个关键字,观察VS里的实际效果.就可以开始编辑自己的自定义代码段了.
## 一些重要的关键字
### 1.Header   
代码段的信息,包括快捷键、代码段的描述、名称等等.    
**Title** 名称     
**Shortcut** 快捷键        
**Description** 描述   
**Author**  签名      
**SnippetTypes**  代码段的类型
```
<SnippetTypes>
	<SnippetType>Expansion</SnippetType>
	<SnippetType>SurroundsWith</SnippetType>
</SnippetTypes> 
```
> Expansion 允许将代码段插入到光标处。       
> SurroundsWith 允许将此代码段放置在一段选定的代码周围。
### 2.Snippet
代码段的主体,定义代码段的主要内容,例如命名空间、变量、代码段    
#### 2.1命名空间 
```代码
<Imports> 
        <Import>    
          <Namespace>Microsoft.VisualStudio.TestTools.UnitTesting</Namespace>
        </Import>
</Imports>     
```
#### 2.2自定义字段
```
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

#### 2.3代码块
```
<Code Language="csharp"><![CDATA[[$TestClass$]
      public class $name$
      {
          $end$
      }]]></Code>
```

### 关键字
**end** 光标位置    
**selected** 选中的文本

