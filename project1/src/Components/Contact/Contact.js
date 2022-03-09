import React from 'react'
import Footer from '../Footer/Footer'
import { Col, Row } from 'react-bootstrap'
import './Contact.css'
const Contact = () => {
  return (
    <div className='outercon'>
      <h1 className='contact2'>Contact Us</h1>
      <br/>
    <div className='contact1'>
    <br/>
        
        <form >
        <input type="text" name="username" placeholder="Username" className='inputCon'></input> <br/><br/>
          <input type="email" name="email" placeholder="email"className='inputCon'></input> <br/><br/>
        <input type="text" name='message' placeholder='Enter any message'className='inputCon'></input><br/><br/>
        

        
        
        <button type="submit" className='submitC'>Submit</button>
        
        </form>
        <br/>    <br/><br/>
        </div>


       
        <br/><br/>
        <Footer />
        </div>
  )
}

export default Contact