import React from 'react'
import Navbar from './Navbar'

function Login() {
  return (

<>
    <div className='navbar'><Navbar /></div> 
    
    <div className='bg'>
        
        <div className='login shadow p-2' style={{width:"30%"}}>
       
        <form className="my-5" style={{width:"50%", margin:"auto"}}>
            <h3 style={{"color":"green","margin-left":"70px"}}>login</h3>
            <label>Email :</label><input placeholder="Enter Valid Email"type="text" className='form-control my-3 border border-secondary' />
            <label>Password :</label><input placeholder="Enter Password "type="password" className='form-control my-3 border border-secondary' />
            <button className='btn btn-primary mx-5 my-3 px-5'> Login</button>
        </form>

         </div>
    </div>
  </>
  )
}

export default Login