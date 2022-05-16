
import React,{useState,useContext} from 'react';
import styled  from "styled-components";
import {Search} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import {SearchContext} from "../context/Searchcontext"

const Container=styled.div`
width: 100%;
height: 50px;
 background-color:black; 
color: white;
display:flex;
justify-content:space-between;
align-items:center;
position:sticky;top:0;
cursor:pointer;
`
const Logo=styled.h1`
padding:10px;
`
const Input=styled.input`
width:30vw;
height:auto;
padding:8px;
border-radius:5px;
font-size:20px;
color:black;
`

const RightContainer=styled.div`

 margin-right:15px;


`;

const Login=styled.span`
 margin:5px 20px;
 font-weight:bold;
 color:white;
 text-decoration:none;
`;


const Signup=styled.span`
 margin:5px 20px;
 font-weight:bold;
 color:white;
 text-decoration:none;
`;

const Profile=styled.span`
margin:5px 20px;
 font-weight:bold;
 color:white;
 text-decoration:none;

`;



const Navbar = () => {
   const[querystring,setQuerystring]=useState("");


const{query,handlequery}=useContext(SearchContext)

  
  
 


const inputevent=(e)=>{
    setQuerystring(e.target.value)
    handlequery(querystring)
}
console.log(query)










  return (
   
    <Container>
       <div>
           <Logo><em>MyBook </em></Logo>
       </div>
        <div>
        <Input type="text" placeholder="search Books ..." onChange={inputevent} />
        <Search />
    
       </div>


       <RightContainer>
      
    
        <Link to="signin">
        <Login>SignIn</Login>
        </Link>
         
             <Link to="signup">
             <Signup>SignUp</Signup>
             </Link>
        
          
             <Link to="/profile">
   <Profile>Profile</Profile>
          </Link>
       


       </RightContainer>
    </Container>
    



  )
};

export default Navbar;