# nginx小记

* [安装nginx](https://www.cnblogs.com/zhanghaoyong/p/7737536.html)

* linux查找nginx是以哪个config启动的

```shell
ps -ef|grep nginx
cd /usr/local/nginx/sbin
./nginx -V
```

最后会车来这个结果

```shell
nginx version: nginx/1.13.2
built by gcc 4.4.7 20120313 (Red Hat 4.4.7-16) (GCC)
built with OpenSSL 1.0.1e-fips 11 Feb 2013
TLS SNI support enabled
configure arguments: --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module
```

* 重启nginx

进入nginx可执行目录sbin下，输入命令

```shell
./nginx -s reload
```

wget http://nginx.org/download/nginx-1.17.10.tar.gz