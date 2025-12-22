import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function EditProperty() {

    const {id} = useParams();

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

    const handleChange=(e)=>{

        setProperty((prev)=>
            
            (
            {
            ...prev,
            [e.target.name]:e.target.value
                }
            )
        )
        
        }

    const handleUpdate= async ()=>{

    axios.put(`http://localhost:3000/properties/${id}`,property)
    .then(alert('property edited successfully'))
    .catch((error)=>console.log(error.message))

  }

  const handleImage = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    setProperty((prev) => ({
      ...prev,
      image: reader.result
    }));
  };

  if (file) {
    reader.readAsDataURL(file);
  }
};


  return (
    
    <div>

        <form  className="my-5" style={{width:"40%", margin:"auto"}}>
           <h4 className='ms-5 mb-4'>Add Property</h4>
           <label htmlFor="">Title :</label> <input value={property.title} onChange={handleChange} name="title" type="text" className='form-control my-3' placeholder='Enter Property Name' />
           <label htmlFor="">Beds Count :</label> <input value={property.beds} onChange={handleChange} name="beds" type="text" className='form-control my-3' placeholder='Enter Number of bedrooms' />
           <label htmlFor="">Baths Count :</label> <input value={property.baths} onChange={handleChange}  name="baths" type="text" className='form-control my-3' placeholder='Enter Number of bathrooms' />
           <label htmlFor="">Location :</label> <input value={property.location}  onChange={handleChange} name="location" type="text" className='form-control my-3'placeholder='Enter Location of property' />
           <label htmlFor="">Price :</label><input value={property.price}  onChange={handleChange} name="price" type="text" className='form-control my-3' placeholder='Enter Price of property'/>
           <label htmlFor="">Area :</label> <input value={property.area}  onChange={handleChange} name="area" type="text" className='form-control my-3' placeholder='Enter Total Area of property'/>
           <label htmlFor="">Image :</label> 
           {/*  */}
            <input type="file" accept="image/*"className="form-control my-3"onChange={handleImage}/>


           <button type='submit' onClick={()=>{handleUpdate()}} className='btn btn-primary w-100'>Submit</button>
        </form>
        </div>
  )
}

export default EditProperty