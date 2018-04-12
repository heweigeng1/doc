# 解坑

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