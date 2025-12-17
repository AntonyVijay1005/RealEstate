import React from 'react'
import apartment3 from './assets/apartment3.jpeg'
import Navbar from './Navbar'
function Property() {
  return (
    <div>
        <div className='navbar'><Navbar /></div>

        <div className=' d-flex p-5'>
            <img src={apartment3} className='prop-img p-5' />

            <div className='prop-details mx-5'>

                <h5>Apartment Name</h5>
                <h6><i class="bi bi-geo-alt-fill"></i>Mannivakkam, Chennai</h6>
                <h6><i className="bi bi-lamp"></i>  3 bhk</h6>
                <h6><i className="bi bi-buildings"></i>Unit Sizes : 2000sq ft</h6>
                <h6><i class="bi bi-house"></i>Total Area:0.5 acres </h6>
                <button className='btn btn-primary'>Contact Details</button>

                
            </div>
        </div>
    </div>
  )
}

export default Property