# 1. 网关Ocelot+Consul

## 1.1. 目录

<!-- TOC -->

- [1. 网关Ocelot+Consul](#1-网关ocelotconsul)
  - [1.1. 目录](#11-目录)
  - [1.2. 环境](#12-环境)
  - [1.3. 添加依赖](#13-添加依赖)
  - [1.4. 配置ocelot](#14-配置ocelot)
  - [1.5. 加载配置](#15-加载配置)

<!-- /TOC -->

## 1.2. 环境
.netcore 3.1

ocelot 16.0.1

[demo地址](https://github.com/heweigeng1/Consul_Demo)

## 1.3. 添加依赖

如果对Ocelot不了解,可以先看看<<[网关(Ocelot).md](网关(Ocelot).md)>>这篇文章 .

安装 <code>Install-Package Ocelot.Provider.Consul</code> 依赖包,也可以从NuGet上直接安装.

修改Startup.cs 的ConfigureServices方法.

```c#
public void ConfigureService(IServiceCollection services)
{
    services.AddOcelot().AddConsul();
}
```

## 1.4. 配置ocelot

添加 consul.json文件.

```json
{
  "Routes": [
    {
      "DownstreamPathTemplate": "/api/{url}",
      "DownstreamScheme": "http",
      "UpstreamPathTemplate": "/T/{url}",
      "UpstreamHttpMethod": [ "Get", "Put" ],
      "ServiceName": "Test-Service",
      "LoadBalancerOptions": {
        "Type": "RoundRobin"
      },
      "ServiceDiscoveryProvider": {
        "Host": "192.168.3.13",
        "Port": 8500,
        "Type": "PollConsul",
        "PollingInterval": 100
      }
    }
  ],
  "GlobalConfiguration": {
    "BaseUrl": "192.168.3.13",
    "Port": 9306
  }
}
```
* 注意这个配置为每100毫秒查询最新的服务.如果在更新服务前有服务器异常或者关闭,使用这个策略会获得更好的性能.因为不需要每次查询都获取最新的服务列表.

```json
"Service": {
  "ID": "service-1",
  "Service": "AService",
  "Address": "192.168.3.13",
  "Port": 8500
},
```

如果使用上面的配置,则是每次访问都获取最新的服务列表.

## 1.5. 加载配置

修改 Main 函数加载 consul.json文件

```c#
public class Program
{
    public static void Main(string[] args)
    {
        CreateHostBuilder(args).Build().Run();
    }    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
        .ConfigureAppConfiguration(conf => {
            conf.AddJsonFile("consul.json", optional: false, reloadOnChange: true);
        })
        .ConfigureWebHostDefaults(webBuilder =>
        {
            webBuilder.UseStartup<Startup>();
        });
}
```

到这里就完成了consul的搭配,ocelot真的是十分强大并且方便!