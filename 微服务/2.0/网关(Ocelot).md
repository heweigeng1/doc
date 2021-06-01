# 网关(Ocelot)

## 环境

.netcore 3.1

ocelot 16.0.1

[demo地址](https://github.com/heweigeng1/Consul_Demo)

* 注意版本,现在搜索的是旧版本.配置文件中的配置项会有不一样的名称.

## 搭建一个网关服务

新建一个 webapi 项目并添加 **ocelot 16.0.1** 依赖包.

修改Starup.cs 文件

```c#
// This method gets called by theruntime. Use this method to addservices to the container.
public void ConfigureService(IServiceCollection services)
{
    services.AddOcelot();
}
// This method gets called by theruntime. Use this method to configurethe HTTP request pipeline.
public void Configur(IApplicationBuilder app,IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }
    app.UseOcelot().Wait();
}
```

添加 ocelot.json 配置文件,用于配置我们的转发规则.

```json
{
  "Routes": [
    {
      "UpstreamPathTemplate": "/T/{url}",
      "UpstreamHttpMethod": [ "Get", "Post" ],
      "UseServiceDiscovery": false,
      "DownstreamPathTemplate": "/api/{url}",
      "DownstreamScheme": "http",
      "DownstreamHostAndPorts": [
        {
          "Host": "192.168.3.13",
          "Port": 22022
        }
      ]
    }
  ],
  "GlobalConfiguration": {
    "BaseUrl": "192.168.3.13",
    "Port": 9306
  }
}
```

这个转发规则是将全局地址http://192.168.3.13:9306/T/books/getall 转发到http://192.168.3.13:22022/api/books/getall .

* GlobalConfiguration配置的BaseUrl可以是你的域名.并且要注意9306这个端口是项目启动时的端口,如果是域名则不需要指定端口了.

修改Main函数,启动时读取刚刚配置好的配置文件

```c#
public class Program
{
    public static void Main(string[] args)
    {
        CreateHostBuilder(args).Build().Run();
    }
    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
        .ConfigureAppConfiguration(conf => {
            conf.AddJsonFile("ocelot.json", optional: false, reloadOnChange: true);
        })
        .ConfigureWebHostDefaults(webBuilder =>
        {
            webBuilder.UseStartup<Startup>();
        });
}
```

运行项目并访问http://192.168.3.13:9306/T/books/getall 看有没有正常获取数据.

到这里,最简单的网关就完成了.

然后就是使用ocelot实现负载均衡

修改ocelot.json代码

```json
{
  "Routes": [
    {
      "UpstreamPathTemplate": "/T/{url}",
      "UpstreamHttpMethod": [ "Get", "Post" ],
      "LoadBalancerOptions": {
        "Type": "RoundRobin"
      },
      "DownstreamPathTemplate": "/api/{url}",
      "DownstreamScheme": "http",
      "DownstreamHostAndPorts": [
        {
          "Host": "192.168.3.13",
          "Port": 22022
        },
        {
          "Host": "192.168.3.13",
          "Port": 23023
        },
        {
          "Host": "192.168.3.13",
          "Port": 24024
        }
      ]
    }
  ],
  "GlobalConfiguration": {
    "BaseUrl": "192.168.3.13",
    "Port": 9306
  }
}
```

上面的代码就使用了RoundRobin(轮询策略).

还有几种策略可以选择.
1. LeastConnection
> 跟踪哪些服务正在处理请求，并将新请求发送到目前空闲的服务器.使用这个策略注意请求不会均匀分布到集群服务器中.

2. RoundRobin
>  轮询

3. NoLoadBalancer 
> 从配置中使用第一个可用服务.

4. CookieStickySessions 
> 使用cookie将所有请求粘贴到特定服务器。使用这个配置请详细阅读官网