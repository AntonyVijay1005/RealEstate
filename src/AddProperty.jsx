import React, { useEffect, useState } from 'react'
import axios from 'axios';

function AddProperty() {


    const [property,setProperty] = useState({

       "title":"",
       "beds":"",
       "baths":"",
       "location":"",
       "price":"",
       "area":"",
       "image":"",
       "id":""


});


const [array,setArray]= useState([]);

useEffect(()=>{
  fetch("http://localhost:3000/properties")
  .then((res)=> res.json())
  .then((data)=>setArray(data))
  .catch((error)=>console.log(error.message))
},[])



useEffect(() => {
  if (array.length > 0) {
    setProperty(prev => ({
      ...prev,
      id: String(array.length + 1)
    }));
  }
}, [array]);


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

const handleSubmit = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:3000/properties",property)
        .then(alert('property added successfully'))
        .catch((error)=>console.log(error.message))

}

// logic to handle image while submitting

const handleImage = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    setProperty(prev => ({
      ...prev,
      image: reader.result   // base64 string
    }));
  };

  if (file) {
    reader.readAsDataURL(file);
  }
};


  return (
    <div>

        <form className="my-5" style={{width:"40%", margin:"auto"}}>
           <h4 className='ms-5 mb-4'>Add Property</h4>
           <label htmlFor="">Title :</label> <input onChange={handleChange} name="title" type="text" className='form-control my-3' placeholder='Enter Property Name' />
           <label htmlFor="">Beds Count :</label> <input  onChange={handleChange} name="beds" type="text" className='form-control my-3' placeholder='Enter Number of bedrooms' />
           <label htmlFor="">Baths Count :</label> <input  onChange={handleChange}  name="baths" type="text" className='form-control my-3' placeholder='Enter Number of bathrooms' />
           <label htmlFor="">Location :</label> <input  onChange={handleChange} name="location" type="text" className='form-control my-3'placeholder='Enter Location of property' />
           <label htmlFor="">Price :</label><input  onChange={handleChange} name="price" type="text" className='form-control my-3' placeholder='Enter Price of property'/>
           <label htmlFor="">Area :</label> <input  onChange={handleChange} name="area" type="text" className='form-control my-3' placeholder='Enter Total Area of property'/>
           <label htmlFor="">Image :</label> 
           {/*  */}
            <input type="file" accept="image/*"className="form-control my-3"onChange={handleImage}/>

           <button onClick={handleSubmit}  className='btn btn-primary w-100'>Submit</button>
        </form>

    </div>
  )
}

export default AddProperty