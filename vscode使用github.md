# 用vscode连接github

1. 如果你本机已经有git客户端，或者已经使用了Visual Studio的github插件。
2. 注册你的github账号
3. 打开git bach
4. 再命令窗口输入 $ ssh-keygen -t rsa -C “xxx@163.com” 把邮箱地址替换为你的github注册邮箱。
5. 添加完密钥后测试链接 输入命令 ssh git@github.com ，如果出现下面字样或者让你确认选项则已经链接成功    

* ![github2](http://images2015.cnblogs.com/blog/775345/201707/775345-20170703230852144-25936733.png)

6. 从第3步命令获取的密钥目录里有2个文件 id_rsa.pub，id_rsa 如果不知道这个目录在哪里，使用windows的搜索功能搜索.ssh 即可 一般在默认的本机用户目录下的.ssh文件夹下。
7. 打开id_rsa.pub 复制里面的密钥，注意 不要复制了最末尾的邮箱地址
8. 登陆github网站=>setting=>ssh and gpg key


* ![github](http://images2015.cnblogs.com/blog/775345/201707/775345-20170703230421878-30958653.png)


9. 添加完钥匙为绿色就是生效。

10. vs code 源代码管理器里包含了git的命令。剩下的可以慢慢摸索了。

11. 推荐vs code插件 
    * Open in GitHub，可以让你右键跳转到github地址上.

> 最后希望你能在这篇文章学到东西。   
> [更多学习内容](https://github.com/heweigeng1/doc) 我的学习交流群:517186785
