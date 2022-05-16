
const express=require('express');

const router=express.Router();
const User=require('../modals/user.model')

router.get('/',(req,res)=>{
    res.send("hello user")
})

router.post("/register", async(req,res)=>{
    const newuser= await User.create(req.body);
    res.status(201).json({user:newuser});
})













module.exports =router;