
const express=require('express');

const router=express.Router();
const Book=require('../modals/book.model')

router.get('/',(req,res)=>{
    res.send("hello all books")
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
        const book = await Book.findById({"id":({$eq:req.params.id})})
    //   const book = await Book.findByIdAndUpdate({id:req.params.id,
    //   name:req.body.name,
    //   author:req.body.author,
     
    // })

    res.send({"idbook":book}).status(201)
  }catch(err) {
        res.status(404).json({err:"something went wrong"})
    }


})










module.exports =router;