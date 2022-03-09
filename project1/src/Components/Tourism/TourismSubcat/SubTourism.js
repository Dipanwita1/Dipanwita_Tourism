import React from 'react'
import { useParams } from 'react-router-dom'
import tourData from '../tourism.json';
import { Link } from 'react-router-dom';
import {Card,Row,Col, Container} from 'react-bootstrap';
import './SubTourism.css'
import Footer from '../../Footer/Footer';

function SubTourism ()  {
    const value=useParams();
    console.log("Received:",value)
    let subTourism=tourData.Tourism.find((data1)=>data1.tour_id===value.sid)
    console.log("Subtourism:",subTourism)
  return (
    <div>
      <div className='stp'>
        <h2 className='sub'>Sub Tourist Places</h2>
        
        <Container>
        <Row>
        {
          subTourism.tour_destination.map((subt)=>
          <React.Fragment keys={subt.t_des}>
          <Col sm>
            <Card style={{ width: '18rem' }} className="cardS" width="300px">
              <p><Card.Img src={subt.t_image1} alt="" className='imgs'/></p>
  
  <Card.Body>
    <Card.Title><h2>{subt.t_des}</h2></Card.Title>
    <Card.Text>
      <h5>{subt.t_package}</h5>
    </Card.Text>
    <button  className='b1'><Link to ={`/details/${value.sid}/${subt.t_id}`}>Details</Link></button>
  </Card.Body>
</Card>
</Col>

          
 
          </React.Fragment>
          )
        }
        </Row>
        </Container>
        </div>
        <Footer />
    </div>
  )
}

export default SubTourism