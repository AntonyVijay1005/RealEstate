import React from 'react'
import Navbar from './Navbar'
import Login from './Login'
import Buy from './Buy'
import apartment1 from './assets/room3.jpeg'
import apartment2 from './assets/room7.jpeg'
import apartment3 from './assets/room4.jpeg';
function App() {
  return (
    <div className='app-bg'>
      <div className='navbar '><Navbar /></div>

<div
      id="carouselExampleInterval"
      className="carousel slide "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src={apartment1}
            className="d-block w-100 vh-100"
            alt="Apartment 1"
          />
        </div>

        <div className="carousel-item" data-bs-interval="2000">
          <img
            src={apartment2}
            className="d-block w-100 vh-100"
            alt="Apartment 2"
          />
        </div>

        <div className="carousel-item">
          <img
            src={apartment3}
            className="d-block w-100 vh-100"
            alt="Apartment 3"
          />
        </div>
      </div>

      {/* Previous Button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    </div>
  )
}

export default App