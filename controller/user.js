const User = require("../models/user");
async function handleGetAllUsers(req, res){
    const allDbUsers = await User.find({});
return res.json(allDbUsers);
}
async function handleGetUserById(req, res){
     const user = await User.findById(req.param.id);
  if(!user) return res.status(404).json({error: "user not found"});
  return res.json(user);
}
async function handleUpdateById(req, res){
  await User.findByIdAndUpdate(req.param.id, {lastName: "changed"});
  return res.json({status:"sucess"});
}
async function handleCreateUser(req, res){
    if(
        !body ||
        !body.first_name ||
        !body.Last_name ||
        !body.email||
        !body.gender||
        !body.job_title
    ){
        return res.status(404).json({msg:"ALL FIELDS ARE REQ TO FILL..."});

    }
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email:body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });
    return res.status(201).json({msg:"Sucess", id: result._id});
}
module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateById,
    handleCreateUser,
};
