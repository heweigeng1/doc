# Dockerfile

## 文件内容

```Dockerfile
#基于那个镜像
FROM microsoft/dotnet:2.2.2-aspnetcore-runtime
#工作文件夹
WORKDIR /app
#复制当前文件夹到容器内工作文件夹
COPY . .
# 端口
EXPOSE 80
#启动
ENTRYPOINT ["dotnet", "NewRetail.Web.Host.dll"]
```

## 开始使用

1. 拉取基础镜像,要注意版本.

```Shell
docker pull microsoft/dotnet:2.1-aspnetcore-runtime
```

2. 编译Dockerfile

```Shell
docker build -t newimage .
```
这里解释一下"."的意思是指将当前文件夹的Dockerfile,所以整段命令的意思是根据当前文件夹的Dockerfile生成一个新的镜像名为newimage


```shell
docker build -t newimage -f Dockerfilepath .
```
这个-f 就可以指定Dockerfile路径

3. 最后运行这个镜像

```Shell
docker run -p 21021:80 -d newimage
```
