# ELK

镜像版本sebp/elk:740 

[教程地址](https://www.cnblogs.com/zhengyazhao/p/12517966.html)

## 运行容器
docker run -tid -p 5601:5601 -p 5044:5044 -p 9200:9200 -p 9300:9300 \
 -v /root/data/es/conf/kibana.yml:/opt/kibana/config/kibana.yml \
 -v /root/data/es/data:/var/lib/elasticsearch \
 -v /root/data/logstash/config:/opt/logstash/config \
 --restart=always --name elk sebp/elk:740

 ## log4stash

通过nuget安装logstash

修改log4net.conf配置文件
```xml
  <appender name="ElasticSearchAppender" type="log4stash.ElasticSearchAppender, log4stash">
    <Servers>
      <Server>
        <Address>ip</Address>
        <Port>9200</Port>
      </Server>
    </Servers>
    <IndexName>log</IndexName>
    <IndexType>LogEvent</IndexType>
    <Bulksize>2000</Bulksize>
    <BulkIdleTimeout>5000</BulkIdleTimeout>
    <IndexAsync>True</IndexAsync>
  </appender>
  <root>
    <level value="DEBUG" />
    <appender-ref ref="RollingFileAppender" />
    <appender-ref ref="ElasticSearchAppender"/>
  </root>
```