
import React,{useState} from 'react';
import  {useNavigate}  from "react-router-dom";

const init={
    name:"",
    email:"",
    mobile:"",
    password:"",
    cpassword:"",
    city:"",
    state:"",
    pincode:"",
   country:""
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
        const{name,email,mobile,password,cpassword,city,state,pincode,country}=user;
      
      let res= await fetch("/register",{
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify( {name,email,mobile,password,cpassword,city,state,pincode,country})
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
     onChange={HandleInputs} name="name" placeholder=" enter name"/><br/>
     <input type="text" 
     onChange={HandleInputs} name="email" placeholder="Enter email"/><br/>
     <input type="number" 
     onChange={HandleInputs}  name="mobile" placeholder="Enter mobile"/><br/>
      <input type="password" 
      onChange={HandleInputs} name="password" placeholder="Enter password"/><br/>
      <input type="password" 
      onChange={HandleInputs} name="cpassword" placeholder=" confirm password"/><br/>
      <input type="text" 
      onChange={HandleInputs} name="city" placeholder=" enter city"/><br/>
      <input type="text" 
      onChange={HandleInputs} name="state" placeholder="Enter state"/><br/>
       <input type="number" 
       onChange={HandleInputs} name="pincode" placeholder="Enter pincode"/><br/>
       <input type="text" 
       onChange={HandleInputs} name="country" placeholder="Enter your country"/><br/> 
        <button type="submit" onClick={handleSubmit}>Signup</button><br/>
    </form>
  )
}

export default Signup;

