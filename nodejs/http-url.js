var http=require("http");
var fs=require("fs");
var server=http.createServer();
server.on('request',function(req,res){
    console.log('收到请求,路径是:',req.url);
    console.log('收到请求,路径是:',req.socket.remotePort);
    console.log('收到请求,路径是:',req.socket.remoteAddress);
    res.setHeader("Content-type","text/plain;charset=utf-8");
    res.end('你的访问路径是:'+req.socket.remoteAddress+":"+req.socket.remotePort);
})
server.listen(3000,function(res,req){
    console.log('服务器已经启动了');

})