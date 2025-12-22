import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Admin() {

  const navigate = useNavigate();

  const [properties,setProperties] = useState([]);

  useEffect(()=>{

    fetch("http://localhost:3000/properties")
    .then((res)=>{return res.json()})
    .then((data)=>setProperties(data))
    .catch((error)=>console.log(error.message));

  },[properties])

  

  const handleDelete=(id)=>{

    axios.delete(`http://localhost:3000/properties/${id}`)
    .then(alert('property deleted successfully'))
    .catch((error)=>console.log(error.message))
  }

  

  return (
    <>
  
    <Navbar/>


    {/* Displaying Table data from json db */}

    <div>

     <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Title</th>
      <th scope="col">Beds</th>
      <th scope="col">Baths</th>
      <th scope="col">Locations</th>
      <th scope="col">Price</th>
      <th scope="col">Area</th>
      <th scope="col">Delete</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>

  <tbody>

    { properties && properties.map((property,index) => (



      <tr key={index+1}>
      <th scope="row">{index}</th>
       <td>{property.title}</td>
       <td>{property.beds}</td>
       <td>{property.baths}</td>
       <td>{property.location}</td>
       <td>{property.price}</td>
       <td>{property.area}</td>
       <td><span onClick={()=>handleDelete(property.id)}><i className="bi bi-trash3"></i></span></td>
       <td><span onClick={()=>navigate("/edit/"+property.id)}><i className="bi bi-pencil-square"></i></span></td>
       
    </tr>
    ))
  }
    
    
  </tbody>
</table>

    </div>





    <div className='d-flex justify-content-end flex-column'>
      <button onClick={()=>navigate("/add")} className='btn btn-success my-3 ms-auto'style={{width:"200px"}}> Add New Property</button>
      <button className='btn btn-danger ms-auto'style={{width:"200px"}}> Delete Property</button>
    </div>

    </>
  )
}

export default Admin