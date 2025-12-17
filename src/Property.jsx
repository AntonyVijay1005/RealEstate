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

        <div className=' d-flex flex-wrap p-5 my-5'>
            <img src={room3} className='prop-img p-5' />

            <div className='prop-details mx-5 my-3 '>

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
  )
}

export default Property