# 1. 解坑

## 1.1. 目录

<!-- TOC -->

- [1. 解坑](#1-解坑)
    - [1.1. 目录](#11-目录)
    - [1.2. 结果拦截器](#12-结果拦截器)

<!-- /TOC -->

## 1.2. 结果拦截器

在ABP有时候需要直接输出Stream,譬如微信的回调.

[DontWrapResult]

在控制器 或者动态api的方法上加上这个拦截器.

```c#
[DontWrapResult]
public void Test2()
{
    var respbyte = Encoding.UTF8.GetByt("<xml>abccccc</xml>");
    //contextAccessor.HttpContext.Response.Body.EndWri(stream.WriteAsync(respbyte, 0, respbyte.Length));
    Response.Body.Write(respbyte, 0, respbyte.Length);
}
```

```qq
只要 abp module能够启动，一切都可以
宁波-冂人山(2444969246) 2018/6/12 11:17:36
应该可以，要自己分离源码吧
诸葛小亮(1260825783) 2018/6/12 11:19:05
不用
诸葛小亮(1260825783) 2018/6/12 11:19:14
nuget  引入即可
诸葛小亮(1260825783) 2018/6/12 11:19:42
启动abp的类是 AbpBootstrappr.Create<T>  这个
诸葛小亮(1260825783) 2018/6/12 11:20:13
在 program中调用这个方法，在 执行对象的  init...  方法即可
宁波-冂人山(2444969246) 2018/6/12 11:20:23
启动类引入
宁波-冂人山(2444969246) 2018/6/12 11:20:41
别的模块也有引入
诸葛小亮(1260825783) 2018/6/12 11:22:54

诸葛小亮(1260825783) 2018/6/12 11:23:06
关键的几句话，其他的模块，使用方式和  web一样
诸葛小亮(1260825783) 2018/6/12 11:23:10
添加 module依赖即可
```
