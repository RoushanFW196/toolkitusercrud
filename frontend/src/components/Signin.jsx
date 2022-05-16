
import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";


const init={
  email: '',
  password: '',
}
const Signin = () => {

  const[logindata,setLogindata]=useState(init);
   
  const navigate = useNavigate();


  const inputevent=(e)=>{
    const{name,value}=e.target;
    setLogindata({...logindata,[name]:value})
  }

  const handleLogin= async (e)=>{
    e.preventDefault();
    console.log(logindata);

   const res= await fetch("/signin",{
      method:"POST",
     headers: {'Content-Type': 'application/json'},
     body:JSON.stringify(logindata)
   })
    
   const data= await res.json();
   console.log(data);

   if(data.status ===404 || !data){
     alert("invalid credentials");
   }
   else{
     alert("login successful");
     navigate("/")
   }



  }





  return (
     <form>

<input type="text" onChange={inputevent} name="email" placeholder="Enter email"/><br/>
   
      <input type="password" onChange={inputevent} name="password" placeholder="Enter password"/><br/>
      <button type="submit" value="SignIn" onClick={handleLogin}>Signin</button><br/>
     </form>
  )
}

export default Signin