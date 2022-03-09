import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Unauthorised.css'
const Unauthorised = () => {
    const navigate=useNavigate()
    const logiN =()=>{
 navigate('/login_pg')
    }
  return(
      
      <div className='unauth'>
          <h2 className='headingU'>Please login first before booking</h2>
          <button onClick={logiN} className="unlogout" >Go to login</button>
      </div>
  )
  ;
};

export default Unauthorised;