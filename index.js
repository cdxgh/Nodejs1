const express = require("express");
const users = require("./TEST.json");
const app = express();
const fs = require("fs");
const PORT = 8000; 
const mongoose = require("mongoose");
//connection
mongoose
.connect("mongodb://127.0.0.1:27017/Learning-mongo-1")
.then(() => console.log("MONGODB CONNECTED"))
.catch((err) => console.log("Mongo Error", err));

// Schema
const userSchema = new mongoose.Schema({
  FirstName:{
    type:String,
    require: true,
  },
  LastName: {
    type:String,
    require:false,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  jobTitle:{
    type: String,

  },
  gender:{
    type:String,
  },
});
const User = mongoose.model("user", userSchema);
app.use(express.urlencoded({extended: false}));
app.get('/api/users',(req,res)=>{
  // return res.json(users);
  res.setHeader("myName", "Arshu")
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
// app.get("/api/users/:id",(req,res)=>{
//   const id = Number(req.params.id);
// const user = users.find((user)=> user.id === id);
// return res.json(user);
// });
app
.route("/api/users/:id")
.get((req,res)=>{
  const id = Number(req.params.id);
  const user = users.find((user)=> user.id === id);
  return res.json(user);
})
.patch((req, res)=>{
   // Editing new user
  return res.json({status:"pending..."});
})
.delete((req,res)=>{
  // delete a users
  return res.json({status:"pending..."});
});
app.post('/api/users', (req,res)=>{
  // creating new user
  // return res.json({status:"pending..."});
  const body = req.body;
  users.push({ ...body, id: users.length +1});
  fs.writeFile('./TEST.json', JSON.stringify(users),(err,data)=>{
    return res.json({status:"sucess", id: users.length});
  }); 
});


// app.patch("/api/users/id:", (req,res)=>{
//   // Editing new user
//   return res.json({status:"pending..."});
// });
// app.delete("/api/users/id:", (req,res)=>{
//   // delete a users
//   return res.json({status:"pending..."});
// });

app.get('/', (req, res)=>{
  return res.send('Hello From Homepage !');
});
// app.get("/about",(req, res)=>{
//   return res.send(`Hello! ${req.query.name}`);
// });
// app.get('/profile',(req,res)=>{
//   return res.send(`This is my profile page`);
// });
app.listen(PORT,()=> console.log(`Server Started at PORT:${PORT}`));
// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log("Server Started"));
