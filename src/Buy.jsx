import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';


function Buy() {

const navigate = useNavigate();

const [details,setDetails] = useState([]);

  useEffect(()=>{

    fetch("http://localhost:3000/properties")
    .then((res)=>{return res.json()})
    .then((data)=>setDetails(data))
    .catch((error)=>console.log(error.message));
  },[]);



  return (
    <>
    <Navbar />
    
    {/* <div className='container d-flex justify-content-around' style={{"backgroundColor":"whitesmoke","width":"80%","margin-left":"180px","margin-top":"100px","border-radius":"10px"}}>
        <div>
            <p>Location</p>
            <input type="text" placeholder="e.g, 'chennai' '623501'" name="" id="" className='form-control  border-gray-400 border-2' />
        </div>

        <div>
            <p>Price Range</p>
            <input type="text" placeholder='e.g, $200 - $400' className='form-control border-gray-400 border-2'/>
        </div>

        <div>
            <p>Property-Type</p>
            <input type="text" placeholder='e.g, Apartment' className='form-control border-gray-400 border-2'/>
        </div>

        <button className='btn btn-primary px-5 my-3' style={{"height":"50px"}}>Search</button>
    </div>


    <div className='container  m-2 ' style={{"backgroundColor":"whitesmoke"}}>

        <div className='row'>
            
            <p className='col-lg-1 col-sm-3 m-1'>Location</p>
            <p className='col-lg-1 col-sm-3 m-1'>Location</p>
            <p className='col-lg-1 col-sm-3 m-1'>Location</p>
            
        </div>

        <div className='row d-flex'>
            
            
            <input type="text" placeholder="e.g, 'chennai' '623501'" name="" id="" className='col-lg-3 col-sm-3 m-2 form-control  border-gray-400 border-2' />
            <input type="text" placeholder="e.g, 'chennai' '623501'" name="" id="" className='col-lg-3 col-sm-3 m-2 form-control  border-gray-400 border-2' />
            <input type="text" placeholder="e.g, 'chennai' '623501'" name="" id="" className='col-lg-3 col-sm-3 m-2 form-control  border-gray-400 border-2' />
            
        </div>

    </div> */}

    <div className="container mt-5">
  <div className="row bg-light p-4 rounded align-items-end">

    <div className="col-12 col-md-6 col-lg-3 mb-3">
      <p className="mb-1">Location</p>
      <input
        type="text"
        placeholder="e.g, 'Chennai' '623501'"
        className="form-control border-2 border-secondary"
      />
    </div>

    <div className="col-12 col-md-6 col-lg-3 mb-3">
      <p className="mb-1">Price Range</p>
      <input
        type="text"
        placeholder="e.g, ₹20L - ₹40L"
        className="form-control border-2 border-secondary"
      />
    </div>

    <div className="col-12 col-md-6 col-lg-3 mb-3">
      <p className="mb-1">Property Type</p>
      <input
        type="text"
        placeholder="e.g, Apartment"
        className="form-control border-2 border-secondary"
      />
    </div>

    <div className="col-12 col-md-6 col-lg-3 mb-3 d-grid">
      <button className="btn btn-primary py-2">
        Search
      </button>
    </div>

  </div>
</div>


<div className='d-flex flex-wrap justify-content-center gap-4'>

{details.length > 0 ? (


  details.map((detail)=>(

  

  <div className="card my-5" key={detail.id} style={{"width": "18rem"}}>
  <img src={detail.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    
    <div>
      <p>{detail.title}</p>
      
    </div>

    <div className='d-flex justify-content-around'>
        <i className="bi bi-lamp"></i>       <p>{detail.beds}</p>
        <i className="bi bi-droplet"></i>    <p>{detail.baths}</p>
        <i className="bi bi-buildings"></i>  <p>{detail.area}</p>
    </div>

    <div>
      <button onClick={()=>navigate('/property/'+detail.id)} className="btn btn-primary" >View Property</button>
    </div>

  </div>

</div>

  ))

    

              ) : (

                <div>Loading...</div>
              
              )}
                  



</div>
                  </>
                )
              }

export default Buy