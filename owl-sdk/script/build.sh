
read -p "请输入版本修改内容，最少20字。系统自动加入readme.md:" inputText

len=${#inputText}
maxlen=20
if [[ $len -gt $maxlen ]];then
    echo "更新版本号....."
    npm version patch


    echo "build项目......"
    echo $1
    npm run build


    echo "更新版本......"
    node ./updateVersion.js $inputText


    echo "开始发布"
    node ./publish.js
    echo "成功！！！！！！！！！！！！"
else
    echo $inputText
    echo "没有输入合适文案"
fi

