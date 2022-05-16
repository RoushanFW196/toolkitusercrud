
import React,{useState,useEffect,useContext} from 'react';

import {SearchContext} from "../context/Searchcontext";
import "./booklist.css";



const BookList = () => {
  const {query}=useContext(SearchContext)
  
  
  console.log("Query",query)


 const[books,setBooks]=useState([])
 
 console.log(books)
 
 useEffect(() => {
    setTimeout(() =>{
      getbooks();
    },2000)
 
 }, [query])



     const getbooks=()=>{
     fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&lang=en&key=AIzaSyAPDZC5P_B99sxHCgGvymzBDa5QhwoL0Uw`)
     .then((d)=>d.json())
     .then((res)=>setBooks([...res.items]))
     .catch((err)=>console.log(err))

     }





  return (
       <div className="books-container">
       
       {books.map((book)=>{
        
        return(
            <div key={book.id} className="book">
              <img src={book.volumeInfo.imageLinks.smallThumbnail}/> 
               <h3> {book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.subtitle}</p>
                    <p>₹{book.saleInfo?.listPrice?.amount}</p>
                     
            </div>
        )

       })}
       
       </div>
  )
}

export default BookList;