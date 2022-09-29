import {
    Row,
    Col,
    Card,
    Container,
} from 'react-bootstrap'
import Form from './ContactForm'
import Maps from './Maps'
import './Styles/Style.css'

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
                                <Col xs={12} sm={12} md={4} key={index}>
                                   <Card className='shadow text-center m-2 bg-light hoverable'>
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
                    <Col className='card shadow bg-secondary m-1' xs={12} sm={12} md={5}>
                     <Container>
                           <Form/>
                      </Container>
                    </Col>
                    <Col  className='m-1' xs={12} sm={12} md={6}>
                    <Maps/>
                    </Col>
                </Row>
                </Container>
            </section>
        </div>
     );
}
 
export default Contacts;