
const express=require('express');

const router=express.Router();
const Book=require('../modals/book.model')

router.get('/', async(req,res)=>{
    const page=+req.query.page ||1;
    const size=+req.query.size||10;
    // console.log(page )
    // console.log(size)
    const offset=(page-1)*size;
    const books =await Book.find({}).skip(offset).limit(size).lean().exec();
    //res.status(201).send({allbooks: books});

    const totalpages=Math.ceil((await Book.find({}).countDocuments().lean().exec())/size)

  console.log(+totalpages,"total")
  res.status(201).send({allbooks: books,totalpages});
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
    const page=+req.query.page ||1;
    const size=+req.query.size||3;
    // console.log(page )
    // console.log(size)
    const offset=(page-1)*size;
    const findbookbyauthor= await Book.findOne({author:req.params.author}).skip(offset).limit(size).lean().exec();
    res.status(201).send({bookbyauthor:findbookbyauthor})
})





module.exports =router;