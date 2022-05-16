
const mongoose = require('mongoose');

const BookSchema=new mongoose.Schema({
    id:{type:"number",required:"true"},
 name:{type:"string",required:"true"},
 price:{type:"number",required:"true"},
 author:{type:"string",required:"true"},
 createdby:{type:"string",required:"true"},
},{
    versionKey:false,
    timestamps:true
});


const Book=mongoose.model("book",BookSchema);
module.exports = Book;