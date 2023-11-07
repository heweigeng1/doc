# gitea+drone 的CI/CD

## 安装gitea
[安装](https://blog.csdn.net/kevinmeng0509/article/details/96864288)

[安装2](https://blog.csdn.net/shuai8624/article/details/107564659/)

## 安装docker-compose
> * 注: 新版docker已经内置了docker-compose,不需要安装,直接使用
docker-compose用于执行docker-compose.yml文件,安装方法如下:

```bash
yum install -y epel-release //安装epel源
yum install -y docker-compose //安装docker-compose
```

如果报下面的错误:
```bash
Error: Failed to download metadata for repo 'appstream': Cannot prepare internal mirrorlist: No URLs in mirrorlist
```

则使用下面的命令安装:
```bash
curl -SL https://github.com/docker/compose/releases/download/v2.23.0/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose 
```

创建软连接
```bash
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose //创建软连接
```

查看安装版本
```bash
docker-compose -v
```

## 启动gitea
    
```bash
docker run -d --privileged=true --restart=always --name=gitea -p 10022:22 -p 10080:3000 -v /data/gitea:/data gitea/gitea:latest
```

## 配置nginx

```
    server {
    listen       8081;
    server_name  gitea.yunshanghub.com;
    location / {
            proxy_pass http://localhost:10080;
            proxy_http_version 1.1;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }
    }
```

nginx上传文件大小限制

nginx默认上传文件大小限制为1M,如果需要上传大文件,请修改nginx配置文件

```
http {
        sendfile            on;
        tcp_nopush          on;
        tcp_nodelay         on;
        keepalive_timeout   65;
        types_hash_max_size 2048;
        client_max_body_size 200m;//这里设置上传文件大小
    }

```

## 安装drone
    
```bash
docker run \
  --volume=/var/lib/drone:/data \
  --env=DRONE_GITEA_SERVER=http://gitea.yunshanghub.com:8081 \
  --env=DRONE_GITEA_CLIENT_ID=117556cf-ff1e-4ef5-8be3-e49798954dca \
  --env=DRONE_GITEA_CLIENT_SECRET=SyfRUqw9sYdAS8mTN5jL79ICIq9vPmYcQKe29MdNRdQg \
  --env=DRONE_SERVER_HOST=drone.yunshanghub.com:8083 \
  --env=DRONE_SERVER_PROTO=http \
  --publish=8082:80 \
  --restart=always \
  --detach=true \
  --name=drone \
  drone/drone:latest
```


## 注意防火墙与云平台的端口限制
```bash
firewall-cmd --zone=public --add-port=8081/tcp --permanent //添加端口
firewall-cmd --reload //重启防火墙
firewall-cmd --list-ports //查看开放的端口
```

[参考地址](https://www.cnblogs.com/Gitea/p/drone.html)

