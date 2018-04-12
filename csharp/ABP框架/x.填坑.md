# 解坑

## 目录

<!-- TOC -->

- [解坑](#%E8%A7%A3%E5%9D%91)
    - [目录](#%E7%9B%AE%E5%BD%95)
    - [结果拦截器](#%E7%BB%93%E6%9E%9C%E6%8B%A6%E6%88%AA%E5%99%A8)

<!-- /TOC -->

## 结果拦截器

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