const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res)=>{
    const log = `${Date.now()}: New request received\n`;
    fs.appendFile("log.txt",log, (err,data)=>{
        res.end("Hello from Server Again");
    });
  
});
myServer.listen(8000, ()=> console.log("Server Started"));


