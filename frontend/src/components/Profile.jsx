
import React,{useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const Profile = () => {

    const navigate=useNavigate();

    useEffect(()=>{

      getuser();
        // setTimeout(()=>{
        //     navigate("/")
        // },3000)
      

    },[])


    const getuser= async ()=>{

        try{

        
        const result = await fetch("/profile",{
            method: "GET",
         headers: {
             Accept: "application/json",
            "Content-Type":"application/json"
        },
        credentials:"include"
        });

          const data= await result.json();
        
          console.log("data",data);
      
          if(data.status !==200){
               const err=new Error(data.error);
               throw err;
          }
      
          navigate("/signup")


    } catch(err){
        navigate("/signin");
        console.log(err)
    }

    }






  return (
    <div>
        <h1>hello user</h1>
        <h2>helo- name</h2>
        <p>email</p>
    </div>
  )
}

export default Profile