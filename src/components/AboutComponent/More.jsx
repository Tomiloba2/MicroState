import { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Carousel,
    Button
} from 'react-bootstrap'

const More = () => {
    const list=[
        {
            "Name":"Gary Swem",
            "Number":'080657878234',
            'img':'https://media.istockphoto.com/photos/portrait-of-nigerian-man-with-beard-looking-at-camera-picture-id517302398?b=1&k=20&m=517302398&s=170667a&w=0&h=2f6Q5Xdk49kdH963_3Zcj5b0gtHXXoatiz-kIJVxkEI='
        },
        {
            "Name":"Richard Zorto",
            "Number":'080656678234',
            'img':'https://media.istockphoto.com/photos/african-stylish-and-handsome-man-in-traditional-outfit-and-cap-picture-id1396433324?b=1&k=20&m=1396433324&s=170667a&w=0&h=YFmpeFOnqXzud0v9rpSZBI1Lo25LERY-y8g9jKCBJFI='
        },
        {
            "Name":"David Lavida",
            "Number":'080650078234',
            'img':'https://media.istockphoto.com/photos/smiling-african-man-in-a-park-picture-id485854429?b=1&k=20&m=485854429&s=170667a&w=0&h=IdnjMuaS1WMgU6UVmlK2meJ1zScY6_gA5VFL1kqhB5Q='
        },
        {
            "Name":"John John",
            "Number":'080656670004',
            'img':'https://media.istockphoto.com/photos/black-guy-showing-thumbs-up-over-yellow-studio-background-picture-id1252686866?b=1&k=20&m=1252686866&s=170667a&w=0&h=IMnVKyXfxKJTQOJ61PDb-iuOqM030FJU8a0cQZ1gwCI='
        }
    ]
    const [index,setIndex]=useState(0)
    const handleSelect=(selectedIndex,e)=>{
        setIndex(selectedIndex)
    }
    return ( 
        <div className="More">
            <Container>
                <section className='mt-5 mb-5'>
                    <Row>
                        <Col xs={12} sm={6}>
                           <img src="https://media.istockphoto.com/photos/a-young-aspiring-africanamerican-investor-works-at-a-computer-the-picture-id1307561130?b=1&k=20&m=1307561130&s=170667a&w=0&h=5MngLEWxVpQeJhU9m0VrfxO66mLVs_EgFWlY1XUzsS8=" alt="director" />
                        </Col>
                        <Col xs={12} sm={6}>
                          <Card className='shadow'>
                             <Card.Header className='p-3'>
                                 <h1>Who we are ?</h1>
                             </Card.Header>
                             <Card.Body>
                                      <h5>We are the best when it comes to real estate investment</h5><br /><br />
                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                          delectus voluptatum et maiores porro aut eligendi? Dignum
                                         temporibus velit. Officia minus impedit suscipit qua autem.
                                     </p>
                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                          delectus voluptatum et maiores porro aut eligendi? Dignum
                                         temporibus velit. Officia minus impedit suscipit qua autem.
                                     </p>
                             </Card.Body>
                          </Card>
                        </Col>
                    </Row>
                </section>
                {/*next section*/}
                <section className='mt-5 mb-5'>
                    <Row>
                        <Col xs={12} sm={6}>
                          <Card className='shadow'>
                             <Card.Header>
                                 <h1>Why Choose Us ?</h1>
                             </Card.Header>
                             <Card.Body>
                                      <h5>We offer Quality at Affordable Prices</h5><br /><br />
                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                          delectus voluptatum et maiores porro aut eligendi? Dignum
                                         temporibus velit. Officia minus impedit suscipit qua autem.
                                     </p>
                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                          delectus voluptatum et maiores porro aut eligendi? Dignum
                                         temporibus velit. Officia minus impedit suscipit qua autem.
                                     </p>
                             </Card.Body>
                          </Card>
                        </Col>
                        <Col xs={12} sm={5}>
                           <img src="https://media.istockphoto.com/photos/home-for-sale-real-estate-sign-picture-id1135238224?b=1&k=20&m=1135238224&s=170667a&w=0&h=xRFFC5YgP_UaW3BjePC4zreSJbev977c240FmxewC7w="
                             className='shadow-lg'
                             alt="director" />
                        </Col>
                    </Row>
                </section>
                <section>
                    <h1>Get To know Our Team</h1>
                     <Row>
                        {list.map((lis,index)=>{
                            return(
                                <Col xs={12} sm={6} md={3} key={index}>
                            <Card className='shadow mt-1 mb-4'>
                                <Card.Header>
                                    <Row>
                                        <Col xs={9}><i className="material-icons text-primary h4">email</i></Col>
                                        <Col xs={3} className=''><i className="material-icons text-primary h4">email</i></Col>
                                    </Row>
                                    <Card.Img src={lis.img} alt="agent" className='center agent' style={{
                                        borderRadius:'50%'
                                    }}/>
                                    <Card.Title className='text-center'>
                                        <h4>{lis.Name} </h4>
                                        <Row className='mt-5'>
                                            <Col><i className="fa fa-facebook text-primary fa-2x"></i></Col>
                                            <Col><i className="fa fa-twitter text-primary fa-2x"></i></Col>
                                            <Col><i className="fa fa-instagram text-primary fa-2x"></i></Col>
                                            <Col><i className="fa fa-linkedin text-primary fa-2x"></i></Col>
                                        </Row>
                                    </Card.Title>
                                </Card.Header>
                            </Card>
                        </Col>
                            )
                        })}
                     </Row>
                </section>
                {/*next section*/}
            </Container>
            <section className='bg-light'>
                <div className='container text-center h4 text-dark'>
                    What are you waiting for ? <br />Whatsapp us &nbsp;
                      <a href="#">
                          <i className='fa fa-whatsapp fa-2x whatsapp-icon'></i>
                      </a>&nbsp;&nbsp;<span className='text-dark'>08077899765</span>
                </div>
            </section>
            <Container>
                <section>
                   <section className='mt-5 mb-5'>
                       <Row>
                           <Col xs={12} sm={6}>
                             <Card className='shadow'>
                                <Card.Header>
                                   <Card.Title>
                                       <h1>Our Estate</h1>
                                         <h4>Get to know the Latest</h4>
                                   </Card.Title>
                             </Card.Header>
                                <Card.Body>
                                      <h5>We offer Quality at Affordable Prices</h5>
                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                          delectus voluptatum et maiores porro aut eligendi? Dignum
                                         temporibus velit. Officia minus impedit suscipit qua autem.
                                     </p>
                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                          delectus voluptatum et maiores porro aut eligendi? Dignum
                                         temporibus velit. Officia minus impedit suscipit qua autem.
                                     </p>
                                     <Button>Learn More</Button>
                             </Card.Body>
                          </Card>
                        </Col>
                        <Col xs={12} sm={5}>
                        <Card className='shadow'>
                            <Carousel fade activeIndex={index} onSelect={handleSelect}>
                                <Carousel.Item className='shadow'>
                                  <Card.Img  src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                                    alt="our latest"/>
                                </Carousel.Item>
                                <Carousel.Item className='shadow'>
                                  <Card.Img  src="https://media.istockphoto.com/photos/modern-luxury-home-interior-picture-id1311356176?b=1&k=20&m=1311356176&s=170667a&w=0&h=qBWA2Tf3PzXV8MlClXYYGzZV1kelXzI2EDc41mInMo0=" alt="our latest"/>
                                </Carousel.Item>
                                <Carousel.Item className='shadow'>
                                  <Card.Img  src="https://media.istockphoto.com/photos/empty-bathroom-picture-id1346631479?b=1&k=20&m=1346631479&s=170667a&w=0&h=hCD0hsci_RxrDSdmSNwYwuAUt5iphxaCs2_P4ecCxD0=" alt="our latest"/>
                                </Carousel.Item>
                                <Carousel.Item className='shadow'>
                                  <Card.Img  src="https://media.istockphoto.com/photos/scandinavian-domestic-dining-room-interior-picture-id1329937916?b=1&k=20&m=1329937916&s=170667a&w=0&h=ivgCtwgzoeQ_OQIT6vLXvidqzWgiigZHpV0H3CwxF-A=" alt="our latest"/>
                                </Carousel.Item>
                            </Carousel>
                        </Card>
                        </Col>
                    </Row>
                </section>
                </section>
            </Container>
        </div>
     );
}
 
export default More;