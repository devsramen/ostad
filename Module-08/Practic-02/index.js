//Working with URL Module
/*
const url = require("url");
const myUrl = "http://localhost:8080/api/v1product/delete?userID=1&productID-2" // base+Path+Query

const u = url.parse(myUrl,true)
console.log(u.host);
console.log(u.pathname);
console.log(u.search);
*/

//Read File

const http = require('http');
const fs = require('fs');
http.createServer(function(req,res){
    fs.readFile('topic.txt',function(error,data){
        res.write(data);
        res.end();
    })
    
    
}).listen(4040, function(){
    console.log("Server Is Running...");
});
