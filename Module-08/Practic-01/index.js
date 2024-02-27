/*
var a = 20;
var b = 10;
var sum = a + b;
console.log(sum);
*/
// Request responds  

const http = require('http');

http.createServer(function(req, res){

    //Basic 3 Staps of Responds
    
    res.writeHead(201,{'Content-Type':"text/html"});
    res.write("I am form Server");
    res.end();
    

    /*
    res.writeHead(201,{'Content-Type':"text/html"});
    res.end("I am form Server");
    */




}).listen(8080, function(){
    console.log("Server is running....");
})











