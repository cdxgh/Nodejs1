const mongoose = require("mongoose");
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
module.exports = User;
