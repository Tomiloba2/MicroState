import {
    Row,
    Col,
    Card,
    Container,
    FormControl,
    Button
} from 'react-bootstrap'

const Contacts = () => {
    const list=[
        {
            "h1":'Phone Number',
            "h6":'06789087654, 07089654231',
            'icon':'call'
        },
        {
            "h1":'Email Address',
            "h6":'MicroState@gmail.com',
            'icon':'email'
        },
        {
            "h1":'Office Address',
            "h6":'17 Harmony estate Bodija Ibadan',
            'icon':'room '
        },
    ]
    return ( 
        <div className="contact">
            <section>
                <Container>
                <Row>
                    {list.map((li,index)=>{
                        return(
                                <Col xs={12} sm={4} md={4} key={index}>
                                   <Card className='shadow text-center m-3 bg-light'>
                                       <Card.Title>
                                          <i className="material-icons text-primary m-3 h1">{li.icon} </i>
                                       </Card.Title>
                                       <Card.Body>
                                            <h1 className='text-success mb-3'>{li.h1}</h1>
                                            <h5 className='h4'>{li.h6}</h5>
                                       </Card.Body>
                                   </Card>
                                </Col>
                        )
                    })}
                </Row>
                </Container>
            </section>
            {/*next*/}
            <section className='mt-5 mb-5'>
                <Container>
                <Row className='mt-5 mb-5'>
                    <Col className='card shadow bg-secondary' xs={12} sm={6} md={6}>
                     <Container>
                        <h1 className="text-center text-warning">Get in Touch</h1>
                      <form action="#">
                          <Row className='mt-5 mb-5'>
                            <Col><FormControl placeholder='Name' type='text'/></Col>
                            <Col><FormControl placeholder='Email Address' type='email'/></Col>
                          </Row>
                          <Row className='mt-5 mb-5'>
                            <Col><FormControl placeholder='Phone Number' type='number'/></Col>
                            <Col><FormControl placeholder='Subject' type='text'/></Col>
                          </Row>
                          <Row className='mt-5 mb-3'>
                            <textarea rows={5} placeholder='Type in Your Comment'/>
                          </Row>
                          <Row>
                            <Col xs={4}></Col>
                            <Col xs={4} className='mt-3 mb-3'>
                               <Button>
                                  <i className="material-icons">send</i>
                                  <span>send</span>
                               </Button>
                            </Col>
                            <Col xs={4}></Col>
                          </Row>
                      </form>
                      </Container>
                    </Col>
                    <Col>
                    map
                    </Col>
                </Row>
                </Container>
            </section>
        </div>
     );
}
 
export default Contacts;