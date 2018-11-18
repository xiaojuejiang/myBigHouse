var http=require("http");
var fs=require("fs");
var url=require('url');
var server=http.createServer();
server.on('request',function(req,res){
    var parse=url.parse(req.url);
    var pathname=parse.pathname;
    if(pathname==="/"){
        fs.readFile("./helloword.html",function(err,data){
            if(err){
                res.setHeader("content-type","text/plain;charset=utf-8");
                res.end("文件读取失败,请稍后再试!")
            }else{
                res.setHeader("content-type","text/html;charset=utf-8");
                res.end(data);
            }
        })
    }
    if(pathname==="/style.css"){
        fs.readFile("./style.css",function(err,data){
            if(err){
                res.setHeader("content-type","text/plain;charset=utf-8");
                res.end("文件读取失败,请稍后再试!")
            }else{
                res.setHeader("content-type","text/css;charset=utf-8");
                res.end(data);
            }
        })
    }
    console.log(req.socket.remoteAddress,":",req.socket.remotePort);
})
server.listen(5000,function(res,req){
    console.log('server is running...');

})