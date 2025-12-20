import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';


function Buy() {

const navigate = useNavigate();

const [type,setType]=useState("");
const [locations,setLocations] = useState("");

const [details,setDetails] = useState([]);



  useEffect(()=>{

    fetch("http://localhost:3000/properties")
    .then((res)=>{return res.json()})
    .then((data)=>setDetails(data))
    .catch((error)=>console.log(error.message));
  },[]);


  const filters = details.filter((detail)=>


    detail.title.toLowerCase().includes(type.toLowerCase()) &&
    detail.location.toLowerCase().includes(locations.toLowerCase())
    


)



  return (
    <>

    <Navbar />


    <div className="container mt-5">
  <div className="row bg-light  rounded align-items-end">

    <div className="col-12 col-md-6 col-lg-3 mb-3">
      <p className="mb-1">Location</p>
      <input
        type="text"p-4
        placeholder="e.g, 'Chennai' '623501'"
        className="form-control border-2 border-secondary"
        onChange={(e)=>setLocations(e.target.value)}
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
        onChange={(e)=>setType(e.target.value)}
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

{filters.length > 0 ? (


  filters.map((detail)=>(

  

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
        <p><i class="bi bi-geo-alt-fill"></i> {detail.location}</p>
        <p><i class="bi bi-currency-rupee"></i> {detail.price}</p>
      <button onClick={()=>navigate('/property/'+ detail.id)} className="btn btn-primary" >View Property</button>
    </div>

  </div>

</div>

  ))

    

              ) : (

                <div>No Data Found...</div>
              
              )}
                  



</div>
                  </>
                )
              }

export default Buy