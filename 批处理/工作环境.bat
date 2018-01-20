@echo off
title 战斗吧大神!
%改变颜色. 这个自己百度一下吧%
%文档需要保存为ANSI%
COLOR f1
echo.
echo ">>>>>>>>>>>>>>>>>>>>>>>>>>'我尊敬的大神'<<<<<<<<<<<<<<<<<<<<<<<<<<"
echo.
echo 今天是 %date%%time%
echo.
echo 大佬你可以去泡茶了,现在进入装B模式 
echo.
echo 正在打开你的工作环境......

echo 正在启动VS Studio...
%start后面的两个双引号不能少, 再后面接要启动程序的路径%
start "" "D:\Microsoft Visual Studio\2017\Enterprise\Common7\IDE\devenv.exe"
%这个5就是延迟5秒的意思,自己改吧.%
choice /t 10 /d y /n >nul

echo 正在启动vscode...
start "" "D:\Program Files\Microsoft VS Code\Code.exe"
choice /t 5 /d y /n >nul

%输出一个点, 就是换行%
echo.

echo 正在启动QQ...
start "" "D:\Program Files (x86)\Tencent\QQ\Bin\QQScLauncher.exe"
choice /t 5 /d y /n >nul 

echo.

echo 正在启动[UC浏览器,先看一波博客园]
start "" "D:\UCBrowser\Application\UCBrowser.exe"
choice /t 5 /d y /n >nul 


echo 行了, 插上耳机准备开干!
choice /t 10 /d y /n >nul 
##pause