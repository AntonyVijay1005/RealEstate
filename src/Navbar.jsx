import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  return (
    // <div className='navbar-fixed d-flex justify-content-between align-items-center '>
    //     <div className='d-flex ' > 
    //         <i className=" mx-3 bi bi-house-door-fill" ></i>
    //         <p >Rently & Co</p>
    //         <div className='d-flex gap-5 ms-5' style={{"fontSize":"20px","backgroundColor":"white"}}>
    //                 <p  onClick={()=>navigate('/')}>Home</p>
    //                 <p onClick={()=>navigate('/buy')} >Buy</p>
    //                 <p >Rent</p>
    //                 <p >Sell</p>
    //         </div>
    //     </div>
    // </div>


    <nav className="navbar navbar-expand-md bg-body-tertiary" style={{position:"sticky",zIndex:100,marginTop:"0px",width:"100%"}}>
 
  <div className="container-fluid p-3 rounded shadow" >

    <a className="navbar-brand" href="#"><i className=" mx-3 bi bi-house-door-fill" ></i> Rently & Co </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/buy">Buy</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/admin">Admin</a>
        </li>

        <li >
      
      

        </li>
        
      </ul>
      <div className='d-flex ms-auto'>
      <i class="bi bi-person-circle fs-4 "></i>
      <p className='text-success ms-3 mt-1'>Antony Vijay S</p>
      </div>

      


    </div>
    
  </div>
</nav>
  )
}

export default Navbar