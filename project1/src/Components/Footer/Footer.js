import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faYoutube,faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div>
        <footer className='f1'>
          <Container>
              
            <Row md={4}>
             <Col>
           
				<div className="widget"><br/>
					<h5 className="widgetheading3">Quick Links</h5>
					<ul className="link-list">
          <Link to="review"className='link1'>Reviews</Link> <br/>
          <Link to ="/book"className='link1'>Bookings</Link>  <br/>
          
          <Link to="/about_page"className='link1'>About</Link>  <br/>
					 <Link to="/contact_page"className='link1'>Contact</Link> <br/>
					</ul>
         
          </div>
          
          <br></br>
          </Col>
          <Col>
          <div className="widget"><br/>
					<h5 className="widgetheading3">Contact us</h5>
					<ul className="link-list">
          <p><h5 className='Con'><FontAwesomeIcon icon={faHome} color="white"></FontAwesomeIcon>India,WestBengal,Kolkata</h5>
          <h5 className='Con'><FontAwesomeIcon icon={faPhone} color="white"></FontAwesomeIcon>+ 01 234 567 88</h5>
          </p>
					
                     
					</ul>
         
          </div>
          
          </Col>
          <Col>
          <div className="widget"><br/>
					<h5 className="widgetheading3">About us</h5>
					{/* <ul className="link-list">
         <Link to="/about_page"className='link1'>About</Link>  <br/> 
					 	</ul> */}
             <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 2000s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         </div>

           </Col>
            {/* <Col>
                  <h5 className='copyright'>
                 <FontAwesomeIcon icon={faCopyright} color="aliceblue"></FontAwesomeIcon>
                 Tourism 2022 All right reserved. By Dipanwita</h5>
                  </Col> */}
                  <br/>
                  <Col>
                  <h5 className='social'>Social
                  
                  
                  <h5><FontAwesomeIcon icon={faInstagram}color="pink"></FontAwesomeIcon></h5>
                  {/* <h5><i class="fa-brands fa-instagram">Instagram</i></h5> */}
                  <h5><FontAwesomeIcon icon={faYoutube}color="red"></FontAwesomeIcon></h5>
                  <h5><FontAwesomeIcon icon={faFacebook} color="blue"></FontAwesomeIcon></h5> 
                  <h5><FontAwesomeIcon icon={faWhatsapp} color="green"></FontAwesomeIcon></h5> 
                  </h5>
                  
                  </Col>
           
            </Row>
          </Container>
          
        </footer>
        <div className='footerid'>
        <Container>
            
           
            <Col>
            <h5 className='copyright'>
           <FontAwesomeIcon icon={faCopyright} color="aliceblue"></FontAwesomeIcon>
           Tourism 2022 All right reserved. By Dipanwita Sarker..</h5>
            </Col>
            <br/>
            <Col>
           
            
            </Col>
 
    </Container>
        </div>
    </div>
  )
}
