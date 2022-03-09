import React from 'react'
import { Container,Row,Col,Card,CardGroup } from 'react-bootstrap';
import { Carousel,CarouselItem } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../../Footer/Footer';
import tourData from '../tourism.json';
import './TourismDetails.css'

const TourismDetails = () => {
  const navigate=useNavigate()
  const details=()=>{
 navigate("/book")
  }
    const val=useParams()
    console.log("Details:",val)
    let subTourism=tourData.Tourism.find((data1)=>data1.tour_id===val.sid)
    console.log("Subtourism:",subTourism)

    let singleTourism=subTourism.tour_destination.find((data)=>data.t_id===val.tid)
    console.log("Single Tour:",singleTourism)
  return (
    <div >
      <div className='back-img' >
        {/* <Container className='back-img' > */}
        {/* <h2>{singleTourism.t_id}</h2> */}
        <br/><br/>
        <h1 className='heading'>{singleTourism.t_des}</h1>
        <button onClick={details} className="db">Book Now</button>
        {/* <h2>{singleTourism.t_package}</h2> */}
        

            {/* <Row xs={2} md={2}>
            <Col>
            <Card >
            <img src={singleTourism.t_image1} className="img1"></img>
           
</Card>
</Col>

           <Col>
            <Card  className="detail2">
            <img src={singleTourism.t_image2} className="img2"></img>
            <h5></h5>
            
          </Card>
        </Col>
</Row> 

 */}
 <h5 className='descrip'>{singleTourism.t_description}</h5>
<CardGroup>
  <Card className='img1'>
  
    <Card.Img variant="top" src={singleTourism.t_image1} />
    <Card.Body>
   
   
    </Card.Body>
    
  </Card>
  <Card className='img1'>
    <Card.Img variant="top" src={singleTourism.t_image2} />
    <Card.Body>
   
    {/* <button onClick={details} className="db">Book Now</button> */}
    </Card.Body>
  </Card>
 
</CardGroup>
















{/* <br/><br/>
<h5 className='descrip'>{singleTourism.t_description}</h5> */}


{/* </Container> */}
{/* <button onClick={details} className="db">Book Now</button> */}
</div>
<Footer/>


    </div>
  )
}

export default TourismDetails


{/* <h2>{singleTourism.t_id}</h2> */}
