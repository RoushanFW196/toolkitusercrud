
import React,{useState} from 'react';
import  {useNavigate}  from "react-router-dom";

const init={
    username:"",
    email:"",
   
    password:"",
   
}

const Signup = () => {
 const[user,setUser]=useState(init)

 const navigate = useNavigate();
  const HandleInputs=(e)=>{
      const{name,value}=e.target
     
      setUser({...user,[name]:value})
  }
 //   console.log(user)

    const handleSubmit= async (e)=>{
        e.preventDefault();
        //console.log(user);
        const{username,email,password}=user;
      
      let res= await fetch("/register",{
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify( {username,email,password})
         })
        //.then((d)=>d.json()).then((res)=>{
        //     if(res.status !==201){
        //         alert("invalid registration")
        //         console.log("invalid registeration")
        //     }
        //     else{
        //         alert("registeration successful");
        //         navigate("/signin")
        //     }
        // })
        
      const data=await res.json();
       console.log("data",data);
      if(data.status===404 || !data){
          alert("invalid registration");
          console.log("invalid registration");
      }
     else{
         alert("registeration successful");
         navigate("/signin");
     }
        
    }








  return (
    <form  method="POST">
     <input type="text" 
     onChange={HandleInputs} name="username" placeholder=" enter name"/><br/>
     <input type="text" 
     onChange={HandleInputs} name="email" placeholder="Enter email"/><br/>
    
   
      <input type="password" 
      onChange={HandleInputs} name="password" placeholder="Enter password"/><br/>
    
     
        <button type="submit" onClick={handleSubmit}>Signup</button><br/>
    </form>
  )
}

export default Signup;

