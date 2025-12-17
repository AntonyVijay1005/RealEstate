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
    <div className='navbar'><Navbar /></div>
    
    <div className='d-flex my-3 justify-content-around' style={{"backgroundColor":"whitesmoke","width":"80%","margin-left":"180px","border-radius":"10px"}}>
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

<div className='d-flex flex-wrap justify-content-center gap-4'>

{details.length > 0 ? (


  details.map((detail)=>(

  

  <div className="card" key={detail.id} style={{"width": "18rem"}}>
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