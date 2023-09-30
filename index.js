const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.method} ${req.url} New request received\n`;
  const myUrl = url.parse(req.url);

  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
       if(req.method === "GET") res.end("HomePage");
        break;
      case "/about":
        res.end("HEY! I am Abdul Quadir");
        break;
        case "/signup":
          if(req.method === 'GET') res.end('This is a signup form');
          else if(req.method==='POST'){
            res.end("Sucess");
          }
      default:
        res.end("404 Not Found!");
    }
  });
});
myServer.listen(8000, () => console.log("Server Started"));
