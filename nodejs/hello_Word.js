var fs= require("fs");
fs.readFile("hello word.txt",function(error,data){
    console.log(data.toString());
})