import React, { useState } from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react';
import axios from 'axios';

function Signup() {

   const [user,setUser] = useState([
    {
        email:"",
        pwd:""
    }
   ]);

   

   const handleChange = (e)=>{

        setUser({
            ...prev,
            [e.target.name]:e.target.value
        })

   }
  
   const onSubmit = async(e)=>{

    axios.post("http:localhost:3000/signup",user)
    .then(alert('user created successfully....'))
    .catch((error)=>console.log(error.message))
   }

   

  return (
    
    <>
    <div className='navbar'><Navbar /></div> 
    
    <div className='bg'>
        
        <div className='login shadow p-2' style={{width:"30%"}}>
       
        <form className="my-5" style={{width:"50%", margin:"auto"}}>
            <h3 style={{"color":"green","margin-left":"60px"}}>Sign Up</h3>
            <label>Email :</label>   <input name="Email" onChange={handleChange} placeholder="Enter Valid Email"type="text" className='form-control my-3 border border-secondary' />
            <label>Password :</label><input name="pwd"   onChange={handleChange} placeholder="Enter Password "type="password" className='form-control my-3 border border-secondary' />
            <button  onClick={onSubmit}className='btn btn-primary mx-5 my-3 px-5'> Create</button>
        </form>

         </div>
    </div>
  </>

  )
}

export default Signup