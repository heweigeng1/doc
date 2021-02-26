# 创建cli工具

https://docs.microsoft.com/zh-cn/dotnet/core/tools/global-tools-how-to-create

https://docs.microsoft.com/zh-cn/dotnet/core/tools/global-tools-how-to-use

## 命令

将控制台打包成nupkg
```shell
dotnet pack
```

添加全局命令
```shell
dotnet tool install -g --add-source ./nupkg HtmlFilesToIndex
```

卸载全局命令
```shell
dotnet tool uninstall -g HtmlFilesToIndex
```