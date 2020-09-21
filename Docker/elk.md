# ELK

镜像版本sebp/elk:740 

[教程地址](https://www.cnblogs.com/zhengyazhao/p/12517966.html)

## 运行容器
docker run -tid -p 5601:5601 -p 5044:5044 -p 9200:9200 -p 9300:9300 \
 -v /root/data/es/conf/kibana.yml:/opt/kibana/config/kibana.yml \
 -v /root/data/es/data:/var/lib/elasticsearch \
 -v /root/data/logstash/config:/opt/logstash/config \
 --restart=always --name elk sebp/elk:740