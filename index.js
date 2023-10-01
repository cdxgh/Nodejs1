const express = require("express");
const users = require("./TEST.json");
const app = express();
const PORT = 8000; 
app.get('/api/users',(req,res)=>{
  return res.json(users);
});

app.get("/users", (req, res) =>{
      const html = `
      <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
      </ul>
      `;
      res.send(html);
      
});
app.get("/api/users/:id",(req,res)=>{
  const id = Number(req.params.id);
const user = users.find((user)=> user.id === id);
return res.json(user);
});
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
