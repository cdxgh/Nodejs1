const express = require("express");
const app = express();
const PORT = 8000; 
app.get('/', (req, res)=>{
  return res.send('Hello From Homepage !');
});
app.get("/about",(req, res)=>{
  return res.send(`Hello! ${req.query.name}`);
});
app.get('/profile',(req,res)=>{
  return res.send(`This is my profile page`);
});
app.listen(PORT,()=> console.log("Server Started"));
// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log("Server Started"));
