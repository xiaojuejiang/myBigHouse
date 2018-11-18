var express=require('express');
var app=express();
//接受get请求并响应
app.get('/',function(req,res){
    res.send('hello word!')
})
app.listen(3000,function(){
    console.log('server is running...');
})