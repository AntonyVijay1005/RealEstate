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


    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid p-2 rounded shadow ">

    <a class="navbar-brand" href="#"><i className=" mx-3 bi bi-house-door-fill" ></i> Rently & Co </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      
      <ul class="navbar-nav">
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" onClick={()=>navigate('/')}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={()=>navigate('/buy')} >Buy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Rent</a>
        </li>
        
      </ul>


    </div>
  </div>
</nav>
  )
}

export default Navbar