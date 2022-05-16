
const express=require('express');

const router=express.Router();
const Book=require('../modals/book.model')

router.get('/', async(req,res)=>{
    const books =await Book.find().lean().exec();
    res.send({allbooks: books})
})

router.post("/add", async (req,res)=>{
      try{
    const newbook= await Book.create(req.body)
   res.status(201).json({data:newbook})
      }catch(err){
        res.status(404).json({err:"something went wrong"})
    }
})


router.put("/:id" ,async(req, res)=>{

    try{
       
      const book = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true} )

    res.send({"idbook":book}).status(201)
  }catch(err) {
        res.status(404).json({err:"something went wrong"})
    }


})


router.delete("/:id", async(req,res)=>{
    const removebook= await Book.findByIdAndDelete({_id:req.params.id});
    res.send({"idbook":removebook})
})



router.get("/:author", async(req,res)=>{
    const findbookbyauthor= await Book.findOne({author:req.params.author}).lean().exec();
    res.status(201).send({bookbyauthor:findbookbyauthor})
})





module.exports =router;