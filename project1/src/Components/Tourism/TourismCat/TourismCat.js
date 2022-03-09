import React from 'react'
import { Link } from 'react-router-dom';
import tourData from '../tourism.json';
import './TourismCat.css'
import { Card,Row,Col } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
const TourismCat = () => {
  return (
    <div>
         
           
           <div className='tcat1'>
             
           <h2 className='tcat'>Different Tourist places in WestBengal</h2>
         
           
           <Row xs={1} md={3} >
  { tourData.Tourism.map((tour)=>

    <Col>
     <br/> <br/> 
      <Card>
        <Card.Img variant="top" src={tour.tour_image} />
        <Card.Body> 
          <Card.Title className='title-name'>{tour.tour_type}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <button><Link to={`/sub_tourism/${tour.tour_id}`}>{tour.tour_type}</Link></button>
      </Card>
    </Col>
   )}
</Row>

</div>
<Footer/>
    </div>
  )

           }
export default TourismCat

