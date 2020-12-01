# linux安装nginx

## 安装必备库

yum install -y gcc-c++ pcre pcre-devel zlib zlib-devel openssl openssl-devel

## 下载安装包

先创建存放安装包的文件夹

```shell
mkdir /soft

cd soft
```

到http://nginx.org/en/download.html 选择适合的版本下载

下载并解压

```shell
wget http://nginx.org/download/nginx-1.18.0.tar.gz

tar -zxvf nginx-1.18.0.tar.gz -C /soft/
```

## 配置

```shell
./configure --prefix=/apps/nginx \
--with-http_gzip_static_module \
--http-client-body-temp-path=/apps/nginx/client \
--http-proxy-temp-path=/apps/nginx/proxy \
--http-fastcgi-temp-path=/apps/nginx/fastcgi \
--http-uwsgi-temp-path=/apps/nginx/uwsgi \
--http-scgi-temp-path=/apps/nginx/scgi  \
--with-http_ssl_module
```

## 编译与安装

```shell
make & make install
```


