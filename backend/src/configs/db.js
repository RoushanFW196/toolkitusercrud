
const mongoose = require('mongoose');
const dotenv=require('dotenv');
const path = require('path');

dotenv.config({path:path.join(__dirname, '../config.env')});
const DB=process.env.MONGOURI;


module.exports=async()=>{
    return mongoose.connect("mongodb+srv://roushan6338:ULdshEjZVUac07D1@cluster0.y0xw1.mongodb.net/a2dstore",{
        useNewUrlParser:true,
         useUnifiedTopology:true,  
    })
};


