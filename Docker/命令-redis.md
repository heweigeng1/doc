

//--restart=always redis 总是启动
docker run  -p 6379:6379 --name rds --restart=always redis