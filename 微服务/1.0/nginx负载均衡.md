# nginx 容器配置负载均衡
使用本机多个容器模拟负载均衡场景

## step1 发布容器服务
发布容器服务
```shell
docker run -d -p 22022:80 --name 容器名 镜像名称
```
查看服务ipaddress
```shell
docker inspect 容器名
```

## step2 发布容器nginx
拉取镜像
```shell
docker pull nginx
```

创建本地配置文件映射地址

```shell
mkdir /app/nginx/conf.d
```

启动nginx容器服务.
```shell
docker run -d -p 8080:80 -p 8081:8081 -v /app/nginx/conf.d:/etc/nginx/conf.d --name nginx nginx:latest
```

运行后在浏览器输入http://localhost:8080 ,可以看见Welcome to nginx!,说明 nginx服务已经启动成功.
接下来我们就使用预留的8081端口来负载均衡我们的容器服务.

## step3 配置nginx

添加自己的配置文件.
```shell
vim consul.conf
```
内容如下:
```shell
upstream serverlist {
        server 172.17.0.2:80;
        server 172.17.0.4:80;
        server 172.17.0.5:80;

}

server {
    listen       8081;
    server_name  localhost;

    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        proxy_pass http://serverlist;
    }
}
```

在文件内添加配置内容.


```shell
upstream serverlist {
        server 172.17.0.2:80;#容器服务,ip使用docker inspect 容器名称 . 查看
        server 172.17.0.4:80;
        server 172.17.0.5:80;

}

server {
    listen       8081;#这里监听我们上面预留的8081端口
    server_name  localhost;

    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        proxy_pass http://serverlist;
    }
}
```



