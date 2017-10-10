# WebApi-Basic基础认证
## 目录
<!-- TOC -->

- [WebApi-Basic基础认证](#webapi-basic%E5%9F%BA%E7%A1%80%E8%AE%A4%E8%AF%81)
    - [目录](#%E7%9B%AE%E5%BD%95)
    - [基本步骤](#%E5%9F%BA%E6%9C%AC%E6%AD%A5%E9%AA%A4)

<!-- /TOC -->
## 基本步骤

1. 通过登录校验,返回登录票据.
2. 前端接收到成功登录的信息和票据(ticket).
3. 前端把票据保存在请求头里,每次请求都把票据(ticket)一起发送到服务器.

