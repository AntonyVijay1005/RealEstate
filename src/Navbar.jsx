import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className='d-flex justify-content-around ms-3'>
        <div className='d-flex gap-1 ' style={{"backgroundColor":"white"}}> 
            <i className="bi bi-house-door-fill" style={{"backgroundColor":"white"}}></i>
            <p style={{"backgroundColor":"white"}}>Rently & Co</p>
            <div className='d-flex gap-5 ms-5' style={{"fontSize":"20px","backgroundColor":"white"}}>
                    <p style={{"backgroundColor":"white"}}>Home</p>
                    <p onClick={()=>navigate('/buy')}style={{"backgroundColor":"white"}} >Buy</p>
                    <p style={{"backgroundColor":"white"}}>Rent</p>
                    <p style={{"backgroundColor":"white"}}>Sell</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar