import React from 'react'
import './Home.css'
import {Carousel,Card,Button,Col,Row, Container} from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Home.css'
import { Link } from 'react-router-dom'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Review from '../Review/Review'

const Home = () => {
  return (
    <>
    <div className='home1'>
        <br/>
        <Carousel> 
 <Carousel.Item>
    <img
      className="hi1"
      src="https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Science-City.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='tms1'>Tourism Management System</h3>
     
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="hi1"
      src="img1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className='tms2'>Make Your Tour Worthwhile</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  
  
</Carousel> 
<br/>
<Container>
 <h2 className='home2'>Top tourist places in West Bengal</h2>
<Row  md={3}>
     <Col>
        <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="hills.jpg"  className='card-img'/>
 
  <Card.Body>
   <Card.Title>Hill stations</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> 
    <Button variant="primary">Learn more</Button>
  </Card.Body>
</Card>
</Col>
<Col >
<Card style={{ width: '20rem' }} >
  <Card.Img variant="top" src="sea.jpg"  className='card-img'/>
  <Card.Body>
   <Card.Title>Sea Shores</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> 
    <Button variant="primary">Learn more</Button>
  </Card.Body>
</Card>
</Col>
 <Col>
<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="forest.jpg"  className='card-img'/>
  <Card.Body>
   <Card.Title>Forest</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> 
    <Button variant="primary">Learn more</Button>
  </Card.Body>
</Card>
</Col> 


</Row>
</Container>

</div>  
<br/>
{/* <About/><br/> */}
{/* <Contact/><br/> */}
<Review/>
<Footer />
</>
    
  )
}

export default Home