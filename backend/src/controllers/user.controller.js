
const express=require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

// router.post("/register", async(req,res)=>{
//     const newuser= await User.create(req.body);
//     res.status(201).json({user:newuser});
// })


router.post("/register",async(req,res)=>{
    console.log(req.body)


  try{

 const userExist= await  User.findOne({email:email});

 
 if(userExist){
    return res.status(404).json({err:"user already registered"})

 }else{

const newuser=new User({username,email,password})
    
 
await newuser.save();
res.status(201).json({message:"user successfully registered"})

 }

  }catch(err){
      res.status(404).json({err:"something went wrong"})
  }
});





router.post("/login",async (req,res)=>{
   const {email,password}=req.body
  
   try{

    if(!email || !password){
     return res.status(404).json({err:"please filled the data"})
    }
     
    const userlogin= await User.findOne({email:email});

    if(userlogin){

        const ismatch =await bcrypt.compare(password,userlogin.password)
    
        let token = await userlogin.generateAuthToken();

 console.log(token)

    res.cookie("jwtoken",token,{
        expires: new Date(Date.now()+2500000451),
        httpOnly: true
    });



        if(!ismatch){
            res.status(404).json({err:"invalid credentials"})
        }
       else{
           res.status(200).json({message:"signin succesfull"})
       }

    }else{
        res.status(404).json({err:"invalid credentials"})
    }
      console.log(userlogin)
   }catch(err){
       res.status(404).json({err:"something went wrong"})
   }



})























module.exports =router;