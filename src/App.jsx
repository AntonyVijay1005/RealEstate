import React from 'react'
import Navbar from './Navbar'
import Login from './Login'

function App() {
  return (
    <div>
      <div className='navbar'><Navbar /></div>
      <div className='login'><Login/></div>
    </div>
  )
}

export default App