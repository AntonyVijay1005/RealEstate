import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className='navbar-fixed d-flex justify-content-between align-items-center '>
        <div className='d-flex ' > 
            <i className=" mx-3 bi bi-house-door-fill" ></i>
            <p >Rently & Co</p>
            <div className='d-flex gap-5 ms-5' style={{"fontSize":"20px","backgroundColor":"white"}}>
                    <p  onClick={()=>navigate('/')}>Home</p>
                    <p onClick={()=>navigate('/buy')} >Buy</p>
                    <p >Rent</p>
                    <p >Sell</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar