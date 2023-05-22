# 清理linux版本mssql日志文件

## 步骤

1. 如果服务器文件已经使用100%,此时先要先清理部分无用文件.我这里选择删除项目生产时产生的日志文件.
一般使用如下命令:
<code>cd /目录A/</code>
<code>rm -rf 文件夹</code>
注意使用删除命令一定要谨慎.上面命令是先进入目录A,然后删除指定文件夹下所有内容

2. 重新启动mssql 容器,并进入容器内

<code>docker start mssql1</code>
<code>docker exec -it mssql1 /bin/bash</code>

3. 查找并删除mssql日志文件

<code>cd /</code> 
<code>du -h</code> 
<code>cd /var/opt/mssql</code> 
<code>rm -rf log</code> 
<code>mkdir log</code>