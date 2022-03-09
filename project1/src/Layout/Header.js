import { faHome,  faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';

import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
  // const navigate=useNavigate();
  // const loggingOut=()=>{    
  //   window.sessionStorage.clear(); 
  //   // navigate('/login')
  //   // navigate('/reg_page')
  //   navigate('/book')
  // }
  return (
    <div>
       
        
         <Navbar  className='nav-color'>
    {/* <Container> */}
    
    <Navbar.Brand href="/"><h5>Travel Tourism</h5></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    {/* <Navbar.Collapse id="basic-navbar-nav"> */}
    <Nav className="me-auto">
     <Nav.Link as={Link} to="/"> <h5><FontAwesomeIcon icon={faHome}color="black"></FontAwesomeIcon></h5>
     </Nav.Link> 
      <Nav.Link as={Link} to="/contact_page" color='white'><h5 className='nav-head'>Contact</h5></Nav.Link>
      <Nav.Link as={Link} to="/about_page"><h5 className='nav-head'>About</h5></Nav.Link>
     <Nav.Link as ={Link} to="/review"><h5 className='nav-head'>Reviews</h5></Nav.Link>
     <Nav.Link as ={Link} to="/book"><h5 className='nav-head'>Book</h5></Nav.Link>
     <Nav.Link as ={Link} to="/reg_pg"> <h5 className='nav-head'><FontAwesomeIcon icon={faUser}color="black"></FontAwesomeIcon></h5></Nav.Link>
     <Nav.Link as={Link} to="/tourism"><h5 className='nav-head'>Tours</h5></Nav.Link>
    
        {/* <button onClick={loggingOut} className="lg">Log out</button>   */}
    </Nav>
    {/* </Navbar.Collapse> */}
    {/* </Container> */}
  </Navbar>
    </div>
  )
}

export default Header

