import React from 'react'

function Login() {
  return (

    <div>
        
        <div className='shadow' style={{width:"30%", margin:"auto"}}>
       
        <form className="my-5" style={{width:"50%", margin:"auto"}}>
            <h4 style={{"color":"green"}} className='ms-5 my-5'>Login</h4>
            <label>Email :</label><input type="text" className='form-control my-3' />
            <label>Password :</label><input type="password" className='form-control my-3' />
            <button className='btn btn-primary mx-5 my-3 px-3'> Login</button>
        </form>

         </div>
    </div>
  )
}

export default Login