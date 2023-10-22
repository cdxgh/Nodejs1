const express = require("express");
const {connectMongoDb} = require('./connection');
const {logReqRes} = require('./middleware');
const userRouter = require("./routes/user");
// const users = require("./TEST.json");
const app = express();
const PORT = 8000; 



//connection
connectMongoDb('mongodb://127.0.0.1:27017/Learning-mongo-1').then(()=>
console.log("Mongodb CONNECTED")
);

// middleware
app.use(express.urlencoded({extended: false}));
app.use(logReqRes("test.txt"));

// app.get('/api/users',(req,res)=>{
//   // return res.json(users);
//   res.setHeader("myName", "Arshu")
//   return res.json(users);
// });


// app.post('/api/users', (req,res)=>{
//   // creating new user
//   // return res.json({status:"pending..."});
//   const body = req.body;
//   users.push({ ...body, id: users.length +1});
//   fs.writeFile('./TEST.json', JSON.stringify(users),(err,data)=>{
//     return res.json({status:"sucess", id: users.length});
//   }); 
// });


// app.patch("/api/users/id:", (req,res)=>{
//   // Editing new user
//   return res.json({status:"pending..."});
// });
// app.delete("/api/users/id:", (req,res)=>{
//   // delete a users
//   return res.json({status:"pending..."});
// });

// app.get('/', (req, res)=>{
//   return res.send('Hello From Homepage !');
// });
// app.get("/about",(req, res)=>{
//   return res.send(`Hello! ${req.query.name}`);
// });
// app.get('/profile',(req,res)=>{
//   return res.send(`This is my profile page`);
// });
app.use("/user", userRouter);
app.listen(PORT,()=> console.log(`Server Started at PORT:${PORT}`));
// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log("Server Started"));
