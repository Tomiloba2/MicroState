import { useState } from 'react';
import {
    Row,
    Col,
    Container,
    Card,
    Carousel,
    Button
} from 'react-bootstrap'
import './Styles/Style.css'

const NewList = () => {
    const list=[
        {
            'imgs':'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2VzJTIwZXh0ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            "imgs2":"https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1373329869?b=1&k=20&m=1373329869&s=170667a&w=0&h=qAbThiOb5vvkl4MmI_hjJ6DXL9I21t1m4nNikEllLdc=",
            "imgs3":'https://media.istockphoto.com/photos/empty-bathroom-picture-id1346631479?b=1&k=20&m=1346631479&s=170667a&w=0&h=hCD0hsci_RxrDSdmSNwYwuAUt5iphxaCs2_P4ecCxD0=',
            'h4':'Modern Apartment',
            'price':'$125000/mo',
            'bed':'5',
            'bath':'7',
            'living':'4'

        },
        {
            'imgs':'https://media.istockphoto.com/photos/idyllic-home-with-covered-porch-picture-id479767332?b=1&k=20&m=479767332&s=170667a&w=0&h=n82FpX80ba4gf7YhkHB_rP8H__TiejXkzy5bQiSATuk=',
            "imgs2":"https://media.istockphoto.com/photos/modern-kitchen-with-smart-speaker-picture-id1314168855?b=1&k=20&m=1314168855&s=170667a&w=0&h=vScVlYNWNGNckCjUJ2-HW7n-8bCphJvy0_l-xWiO6yc=",
            "imgs3":'https://media.istockphoto.com/photos/green-sofa-in-modern-apartment-interior-with-empty-wall-and-wooden-picture-id1326191354?b=1&k=20&m=1326191354&s=170667a&w=0&h=Uhy5cSKNEBWjBDU6lfwFsNctHsYN9VudFEQJMLEHSWc=',
            'h4':'Modern Apartment',
            'price':'$25000/mo',
            'bed':'3',
            'bath':'4',
            'living':'2'
        },
        {
            'imgs':'https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?b=1&k=20&m=1026205392&s=170667a&w=0&h=irJbWQMnxDmaIE78tEAY6dTzmLCbQrGs2J844kjd5Nw=',
            "imgs2":"https://media.istockphoto.com/photos/scandinavian-domestic-dining-room-interior-picture-id1329937916?b=1&k=20&m=1329937916&s=170667a&w=0&h=ivgCtwgzoeQ_OQIT6vLXvidqzWgiigZHpV0H3CwxF-A=",
            "imgs3":'https://media.istockphoto.com/photos/we-all-deserve-a-fresh-break-from-the-city-picture-id1326994520?b=1&k=20&m=1326994520&s=170667a&w=0&h=h9h0d6bcN0Mrr2S7iVzS331BM7U8G3XyCWiVeVjh-AI=',
            'h4':'Modern Apartment',
            'price':'$75000/mo',
            'bed':'5',
            'bath':'6',
            'living':'3'
        },
        {
            'imgs':'https://media.istockphoto.com/photos/modern-real-estate-front-exterior-blue-and-white-color-scheme-with-picture-id1303750117?b=1&k=20&m=1303750117&s=170667a&w=0&h=PbH5ycQValDv7_V4hGW7HD1nLZfRmikfWNfrp97OZTc=',
            "imgs2":"https://media.istockphoto.com/photos/cozy-patio-with-entrance-to-the-house-picture-id1344026356?b=1&k=20&m=1344026356&s=170667a&w=0&h=4zT9-RWNxboTsPTRX4tew93n6SYlwISm5uzmXOIpZow=",
            "imgs3":'https://media.istockphoto.com/photos/modern-luxury-home-interior-picture-id1311356176?b=1&k=20&m=1311356176&s=170667a&w=0&h=qBWA2Tf3PzXV8MlClXYYGzZV1kelXzI2EDc41mInMo0=',
            'h4':'Modern Apartment',
            'price':'$55000/mo',
            'bed':'3',
            'bath':'4',
            'living':'2'
        }
    ]
    const [index,setIndex]=useState(0)
    const HandleSelect=(selectedIndex,e)=>{
        setIndex(selectedIndex)
    }
    return ( 
        <div className="NewList">
            <Container>
                <h1 className='text-center'>New <span className="text-success"> Listings</span></h1>
                <h6 className='text-center'>CheckOut  our new listings</h6>
                <Row>
                    {list.map((lis,indx)=>{
                        return(
                          <Col key={indx}  xs={12} md={6} xl={3} className='mt-2 mt-2'>
                              <Card className='shadow text-center bs mt-3 mb-3'>
                                <Carousel fade activeIndex={index} onSelect={HandleSelect}>
                                    <Carousel.Item><Card.Img  src={lis.imgs} alt="img" className='bs'/></Carousel.Item>
                                    <Carousel.Item><Card.Img  src={lis.imgs2} alt="img" className='bs'/></Carousel.Item>
                                    <Carousel.Item><Card.Img  src={lis.imgs3} alt="img" className='bs'/></Carousel.Item>
                                </Carousel>
                                  <Card.Body>
                                  <Row>
                                        <Col xs={6} className='text-danger h5'>{lis.price}</Col>
                                        <Col xs={6}>
                                            <Row>
                                                <Col xs={3}>
                                                    <i className="material-icons text-secondary">
                                                      link
                                                   </i>
                                                </Col>
                                                <Col  xs={3}>
                                                    <i className="material-icons text-secondary">
                                                        email
                                                    </i>
                                                </Col>
                                                <Col  xs={3}>
                                                    <i className="material-icons text-secondary">
                                                        phone
                                                    </i>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <h4>{lis.h4} </h4>
                                    <Row>
                                        <Col xs={4} className='mb-1'>
                                            <i className="material-icons">
                                                 house
                                            </i> <br />
                                            <span className="text-center">{lis.living} sitting</span>
                                        </Col>
                                        <Col xs={4}>
                                            <i className="material-icons">
                                                bed
                                            </i><br />
                                            <span className="text-center">{lis.bed} Beds</span>
                                        </Col>
                                        <Col xs={4}>
                                            <i className="material-icons">
                                                class
                                            </i> <br />
                                            <span className="text-center">{lis.bath} Baths</span>
                                        </Col>
                                    </Row>
                                    <Row className='mt-1'>
                                        <Col><Button variant='secondary' className='hoverable'>Request info</Button></Col>
                                        <Col><Button className='hoverable'>view details</Button></Col>
                                    </Row>
                                  </Card.Body>
                              </Card>
                          </Col>  
                        )
                    })}
                </Row>
            </Container>
        </div>
     );
}
 
export default NewList;