
import React from 'react';
import BookList from './BookList';
import Signin from './Signin';
import Signup from './Signup';
 
import {Routes,Route} from 'react-router-dom'
import Profile from './Profile';

 const Home = () => {
   return (
     <div>
         <Routes>
            <Route path="/" element={<BookList/>}/>
             <Route path="/Signup" element={<Signup/>}/>
             <Route path="/Signin" element={<Signin/>}/>
             <Route path="/profile" element={<Profile/>}/>
         </Routes>
     </div>
   )
 }
 
 export default Home;
