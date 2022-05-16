
const express=require('express');

const router=express.Router();
const User=require('../modals/user.model')

router.get('/', async(req,res)=>{
    try{
    const allusers= await User.find().lean().exec();

    res.status(201).send({users:allusers})
    }catch(err) {
        res.status(401).send("something went wrong")
    }
})

router.post("/register", async(req,res)=>{
    const newuser= await User.create(req.body);
    res.status(201).json({user:newuser});
})













module.exports =router;