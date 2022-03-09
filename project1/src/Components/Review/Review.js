import React from 'react'
import './Review.css'
import {Col,Row,Card} from 'react-bootstrap'

function Review() {
  return (
    <div>
      <p className="client">Clients Review</p>

      <Row xs={1} md={3} className="g-6">
  
    <Col>
      <Card className='cl1'>
        <img src='https://th.bing.com/th/id/R.d3efee862056d6e7b10a05c027587d64?rik=h25AM7vHDqUs3g&riu=http%3a%2f%2fnews.stanford.edu%2fthedish%2fwp-content%2fuploads%2fsites%2f2%2f2016%2f10%2fDecker.jpg&ehk=1St5Mcep2OD%2bBW4yszPwfpQpgEbFZ4g%2fdyIA64t5ghU%3d&risl=&pid=ImgRaw&r=0 'className='client-img'/>
        <Card.Body>
          <Card.Title>Johne Doe</Card.Title>
          <Card.Text className='ctext'>
          Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quam Voluptates Nisi Dolores Aperiam Sit Quod Aliquid Dolorem Velit Quasi Pariatur Nemo Dolore, Vel Quidem Incidunt Qui Quibusdam Cumque Voluptatum Reiciendis?
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card className='cl1'>
      <img src='https://th.bing.com/th/id/R.d3efee862056d6e7b10a05c027587d64?rik=h25AM7vHDqUs3g&riu=http%3a%2f%2fnews.stanford.edu%2fthedish%2fwp-content%2fuploads%2fsites%2f2%2f2016%2f10%2fDecker.jpg&ehk=1St5Mcep2OD%2bBW4yszPwfpQpgEbFZ4g%2fdyIA64t5ghU%3d&risl=&pid=ImgRaw&r=0' className='client-img'/>
        <Card.Body>
          <Card.Title>Johne Doe</Card.Title>
          <Card.Text className='ctext'>
          Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quam Voluptates Nisi Dolores Aperiam Sit Quod Aliquid Dolorem Velit Quasi Pariatur Nemo Dolore, Vel Quidem Incidunt Qui Quibusdam Cumque Voluptatum Reiciendis?
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <br/>
    <Col>
      <Card className='cl1'>
      <img src='https://th.bing.com/th/id/R.d3efee862056d6e7b10a05c027587d64?rik=h25AM7vHDqUs3g&riu=http%3a%2f%2fnews.stanford.edu%2fthedish%2fwp-content%2fuploads%2fsites%2f2%2f2016%2f10%2fDecker.jpg&ehk=1St5Mcep2OD%2bBW4yszPwfpQpgEbFZ4g%2fdyIA64t5ghU%3d&risl=&pid=ImgRaw&r=0'className='client-img'/>
        <Card.Body>
          <Card.Title>Johne Doe</Card.Title>
          <Card.Text className='ctext'>
          Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quam Voluptates Nisi Dolores Aperiam Sit Quod Aliquid Dolorem Velit Quasi Pariatur Nemo Dolore, Vel Quidem Incidunt Qui Quibusdam Cumque Voluptatum Reiciendis?
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    {/* <Col>
      <Card className='cl1'>
      <img src='client1.jpg'className='client-img'/>
        <Card.Body>
          <Card.Title>Johne Doe</Card.Title>
          <Card.Text className='ctext'>
          Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quam Voluptates Nisi Dolores Aperiam Sit Quod Aliquid Dolorem Velit Quasi Pariatur Nemo Dolore, Vel Quidem Incidunt Qui Quibusdam Cumque Voluptatum Reiciendis?
          </Card.Text>
        </Card.Body>
      </Card>
    </Col> */}
 
</Row>
{/* <Footer/> */}
    </div>
  )
}

export default Review