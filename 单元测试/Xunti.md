# 关键字

* Fact

```c#
[Fact]
public void SaveToTxtTest()
{
    var result = SaveFile.SaveToTxt("asdf12313", @"D:\abc.txt");
    Assert.True(result != "error");
}
```

* Theory,InlineData

这两个关键字配合使用可以多种情况测试

* DisplayName

可以改变测试名称,使代码可读性更高

```c#
[Theory(DisplayName ="多测试数据")]
[InlineData("adfasfaf",@"d:\obj.txt","error")]//true
[InlineData("my love csharp",@"d:efg.txt","error")]//参数2 路径不正确
[InlineData("love java",@"d:\xyz.txt","afdf")]//返回值异常
public void SaveToTxtTest2(string data,string path,string result)
{
    var str = SaveFile.SaveToTxt(data, path);
    Assert.True(str == result);
}
```