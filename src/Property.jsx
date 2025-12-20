import React, { useEffect, useState } from 'react'
import room3 from './assets/room3.jpeg'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import Contact from './Contact'

function Property() {

  const {id} = useParams();

  const [apartment,setApartment] = useState([]);

  useEffect(()=>{

    fetch("http://localhost:3000/apartments/"+id)
    .then((res)=>{return res.json()})
    .then((data)=>setApartment(data))
    .catch((error)=>console.log(error.message))

  },[]);


  return (
    <div>

        <Navbar />

        <div className='container mt-5'>
             
            <div className='row'>

            <div className='col-12 col-md-6 col-lg-6 d-flex'>
              <img src={room3} className='prop-img w-100 h-100 rounded p-3' />
            </div>
            
            <div className='col-12 col-md-6 col-lg-6 prop-details '>

                <h4>{apartment.ApartmentName}</h4>
                <h5><i className="bi bi-geo-alt-fill"></i>{apartment.location}</h5>
                <h5><i className="bi bi-lamp"></i>Room Count:  {apartment.RoomCount}</h5>
                <h5><i className="bi bi-buildings"></i>Unit Sizes : {apartment.UnitSizes}</h5>
                <h5><i className="bi bi-house"></i>Total Area:  {apartment.TotalArea} </h5>
                <button className='btn btn-primary'  data-bs-toggle="modal"
                 data-bs-target="#contactSellerModal">Contact Details</button><Contact/>

                
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Property