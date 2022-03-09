import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Logout.css'
const Logout=()=> {
  const navigate=useNavigate()
  const logOut =()=>{
navigate("/")
  }
   return (
    <div className='out'>

        <h1 className='lout'>Thank You for visiting our Website </h1>
        <p><button onClick={logOut} className="btn-log">Logout</button></p>
        
    </div>
  )
}

export default Logout