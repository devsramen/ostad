/*
//Creating Server using Node JS
var http = require('http');
var server = http.createServer(function(req, res){
    res.end('Hello World for 2nd time');
    
});
server.listen(7000);
console.log("Server Running Successfully..");
console.log("http://localhost:7000");
*/
// ==============================================================================================================================

/*
//Read File using File System (FS) Module.
var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req, res){
    
    if(req.url="/"){
        fs.readFile('home.html',function(error, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    
    
    
    // res.end('Hello World for 3rd time');
    
});
server.listen(7000);
console.log("Server Running Successfully....");
console.log("http://localhost:7000");
*/
// ==============================================================================================================================

//Write File using File System (FS) Module.
var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req, res){
    


    res.end("Helow World for 4th Time");
});
server.listen(9000);
console.log("Server Running Successfully....");
console.log("http://localhost:9000");


















































































