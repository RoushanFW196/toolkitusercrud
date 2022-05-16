
const express= require('express');
const app= express();
const connect= require('./configs/db');
const Usercontroller= require("./controllers/user.controller")
const Bookcontroller=require("./controllers/book.controller.js")

app.use(express.json());


app.use("/user",Usercontroller)

app.use("/book",Bookcontroller)






console.log("hello");
app.listen(1200, async(req,res)=>{
    await connect();
    console.log("listening on port 1200");
});