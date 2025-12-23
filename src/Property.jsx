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

  
  
      const [property,setProperty] = useState({
          title: "",
    beds: "",
    baths: "",
    location: "",
    price: "",
    area: "",
    image: ""
      });
  
      useEffect(()=>{
  
          fetch(`http://localhost:3000/properties/${id}`)
          .then((res)=>{return res.json()})
          .then((data)=>setProperty(data))
          .catch((error)=>console.log(error.message))
      },[id])

  {/* predictedPrice = currentPrice + (currentPrice × growthRate × years) */}
  
  const [rate,setRate] = useState(0);

  const handleChange = (e)=>{

    setRate(Number(e.target.value)/100)
  }
  

  
  const currentPrice = Number(property.price);
  const [predicted_price , setPredicted_price]  = useState(0);
  const price = currentPrice + (currentPrice * rate * 5);
  
  const predict =()=>
  {
      
      setPredicted_price(price);
  }
   

  return (
    <div>

        <Navbar />

        <div className='container mt-5 '>
             
            <div className='row d-flex justify-content-center'>

            <div className='col-12 col-md-6 col-lg-6 d-flex'>
              <img src={room3} className='prop-img w-100 h-100 p-3' />
            </div>
            
            <div className='col-12 col-md-6 col-lg-5 prop-details '>

                <h4 >{apartment.ApartmentName}</h4>
                <h5><i className="bi bi-geo-alt-fill"></i>{apartment.location}</h5>
                <h5><i className="bi bi-lamp"></i>Room Count:  {apartment.RoomCount}</h5>
                <h5><i className="bi bi-buildings"></i>Unit Sizes : {apartment.UnitSizes}</h5>
                <h5><i className="bi bi-house"></i>Total Area:  {apartment.TotalArea} </h5>
                <button className='btn btn-primary'  data-bs-toggle="modal"
                 data-bs-target="#contactSellerModal">Contact Details</button><Contact/>

                
            </div>
            </div>
            
        

      <div className='row mt-5 d-flex justify-content-center'>

      <div className='col-12 col-md-6 col-lg-5 p-5 border border-2 shadow rounded d-flex flex-column'>

      <h3>About Property </h3>

      <p>Spacious modern villas located in a premium residential area, featuring contemporary architecture, private parking, landscaped gardens, and excellent connectivity to schools and IT hubs.Compact and affordable flats perfect for working professionals and small families, located close to public transport, shopping centers, and business districts.</p>
     
       <h5>Features</h5>

        <div className='container'>

          <div className='d-flex flex-row justify-content-around gap-4'>

            <i className="bi bi-lamp fs-1"></i>
            <i className="bi bi-droplet fs-1"></i>  
            <i class="bi bi-building-fill-gear fs-1"></i>
          </div>

          <div className='d-flex flex-row justify-content-around gap-4'>

            <p>2 beds</p>
            <p>3 rooms</p>
            <p>4 years</p>

          </div>

        </div>
      </div>
        
        
        
        
        <div className='col-12 col-md-6 col-lg-6 predict p-5 border border-2 shadow d-flex  rounded d-flex flex-column  justify-content-center align-item-center' style={{backgroundColor:"white",height:"300px" ,width:"600px"}}>

              <h2>Estimated <span className='text-success'>Price</span>    </h2>
               <input className='mt-4' type="number" placeholder='Enter Number of Years to find the predicted price' name="rate" onChange={handleChange} />
              <h4 className='mt-4 text-primary d-flex justify-content-center' ><i className="bi bi-currency-rupee"></i>{predicted_price}</h4>
              <button className='btn btn-primary mt-4' onClick={()=>predict()}>Predict now</button>
        </div>

        </div>

        <div className='row'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur fugit maiores repudiandae neque deserunt velit quod corrupti ducimus at tempora dolor, dolorum saepe, veniam est accusantium ea laboriosam autem?

        </div>
        </div>
      
    </div>
  )
}

export default Property