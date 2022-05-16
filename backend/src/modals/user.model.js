
const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    createdby:{type:"string",required:"true"},
 username:{type:String,required:"true"},
 email:{type:"string",required:"true"},
 password:{type:"string",required:"true"}

},{
    versionKey:false,
    timestamps:true
})


  const User=mongoose.modal("User",UserSchema);
  module.exports = User;
