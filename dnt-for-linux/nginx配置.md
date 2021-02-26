# NGINX配置

映射到打包好的node静态文件
```
    server {
    listen       80;
    server_name  www.xxxx.com;
    location / {
            root /project/demob/NewRetailWeb/build/;
            index index.html;
        }
    }

```

代理到运行的端口
```
    server {
    listen       80;
    server_name  www.xxxx.com;
    location / {
            proxy_pass http://localhost:3001;
            proxy_http_version 1.1;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }
    }
```

使用https

```
    server {
        listen       443 ssl;
        server_name  www.xxxx.com;
        ssl_certificate crs/cabbage/3892525_cabbage.pem;
        ssl_certificate_key crs/cabbage/3892525_cabbage.key;
        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;
        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ecdh_curve X25519:P-256:P-384;
        location / {
            proxy_pass http://localhost:10082;
            proxy_http_version 1.1;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
    }

```
