import React from 'react'
import Footer from '../Footer/Footer'
import { Row,Col } from 'react-bootstrap'
import './About.css'
const About = () => {

  return (
    <div className='about'>
        <h1 className='about1'>About Us</h1> <br/> <br/>
        <Row md={2}>
        <Col md={6} className='pdiv'>
          <div>
       <img src="about.jpg" className='imgdiv'></img>
          </div>
          </Col>
          <Col md={6} className='pdiv'>
        <div >
        <br/><br/><br/><br/>
          <h3 className='team'>Our Team</h3>

        <p className='pabout'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> 
        Lorem Ipsum has been the industry's standard dummy text ever since the 2000s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/> </p>
         <p className='pabout'>
         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          </Col>
          
          </Row>
          {/* <p className="client">Our Clients</p> */}
       <br/> <br/> 
        <Footer/>
        </div>
  )
}

export default About