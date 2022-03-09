import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Book.css'
export default function Book() {
  const navigate=useNavigate()
 const booking=()=>{
   navigate("/logout")

 }
 
    // navigate("/unauth")
  
  return (
    <div className='main'>
          <h1 className='head1'>Booking Details</h1>
      <div className='form-box1'>
      
       <form  >
      

<input type="text" name="fname" placeholder="Firstname" className='field'
  ></input><br />
 

<input type="text" name="lname" placeholder="Lastname" className='field'
  ></input><br />
<label>Source</label>
<input type="text" name="source" placeholder="Kolkata" className='field'
 ></input><br />

<label>Destination</label>
<select name="Destination">
  <option>Darjeeling</option>
  <option>Gangtok</option>
  <option>Sikkim</option>
  <option>Digha</option>
  <option>Tajpur</option>
  <option>Mandarmoni</option>
  <option>Chilapata</option>
  <option>Sundarban</option>
  <option>Gorumara</option>
  </select><br />
<input type="email" name="email" placeholder="Email" className='field'
 ></input><br />



<input type="password" name="password" placeholder="Password"  className='field'
></input><br />

<button type='button'>Submit</button>




</form>
     
</div>

<p> <button onClick={booking}  className='submitB'>Go to log out</button></p>

</div>
    
  )
}
