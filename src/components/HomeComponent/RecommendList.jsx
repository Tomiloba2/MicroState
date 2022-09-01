import { useState } from 'react';
import {
    Row,
    Col,
    Container,
    Card,
    Button,Carousel
} from 'react-bootstrap'
import './Styles/Style.css'
const RecommendList = () => {
    const [list,setList]=useState([
        {
            'imgs':'https://media.istockphoto.com/photos/3d-rendering-of-modern-cozy-chalet-in-night-picture-id1319018056?b=1&k=20&m=1319018056&s=170667a&w=0&h=3p6rd_ZedAlhll5QQ5Mv0LOeg542vimKV-YJTRGuzUk=',
            'imgs2':'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            "imgs3":'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            "imgs4":"https://media.istockphoto.com/photos/black-living-room-interior-with-leather-sofa-minimalist-industrial-picture-id1344243415?b=1&k=20&m=1344243415&s=170667a&w=0&h=JE0Y9iyBBwIPadsAf_P9VbYWxe1tdCuRvu0l6isU9FQ=",
            'h4':'Modern Apartment',
            'price':'$75000/mo',
            'bed':'2',
            'bath':'4',
            'living':'2'
        },
        {
            'imgs':'https://media.istockphoto.com/photos/stunning-luxury-home-exterior-at-sunset-picture-id682432560?b=1&k=20&m=682432560&s=170667a&w=0&h=enNCCfExisl1OCOCzDRPo7lkUYrQVIbP5TNKhLBEwuI=',
            "imgs2":'https://media.istockphoto.com/photos/modern-kitchen-with-smart-speaker-picture-id1314168855?b=1&k=20&m=1314168855&s=170667a&w=0&h=vScVlYNWNGNckCjUJ2-HW7n-8bCphJvy0_l-xWiO6yc=',
            "imgs3":'https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1373329869?b=1&k=20&m=1373329869&s=170667a&w=0&h=qAbThiOb5vvkl4MmI_hjJ6DXL9I21t1m4nNikEllLdc=',
            "imgs4":"https://media.istockphoto.com/photos/we-all-deserve-a-fresh-break-from-the-city-picture-id1326994520?b=1&k=20&m=1326994520&s=170667a&w=0&h=h9h0d6bcN0Mrr2S7iVzS331BM7U8G3XyCWiVeVjh-AI=",
            'h4':'Modern Apartment',
            'price':'$5000/mo',
            'bed':'3',
            'bath':'2',
            'living':'1'
        },
        {
            'imgs':'https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            "imgs2":'https://media.istockphoto.com/photos/modern-luxury-home-interior-picture-id1311356176?b=1&k=20&m=1311356176&s=170667a&w=0&h=qBWA2Tf3PzXV8MlClXYYGzZV1kelXzI2EDc41mInMo0=',
            "imgs3":'https://media.istockphoto.com/photos/triangular-modern-lake-house-at-fall-picture-id1327080125?b=1&k=20&m=1327080125&s=170667a&w=0&h=MElJJ3dR0Ng3J1ux-384q4K5JC9WNJjLv6d2ttrsZlw=',
            "imgs4":"https://media.istockphoto.com/photos/cozy-patio-with-entrance-to-the-house-picture-id1344026356?b=1&k=20&m=1344026356&s=170667a&w=0&h=4zT9-RWNxboTsPTRX4tew93n6SYlwISm5uzmXOIpZow=",
            'h4':'Modern Apartment',
            'price':'$175000/mo',
            'bed':'8',
            'bath':'6',
            'living':'4'
        },
        {
            'imgs':'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            "imgs2":'https://media.istockphoto.com/photos/modern-luxury-bathroom-interior-with-hot-tub-and-beautiful-sea-view-picture-id1355726436?b=1&k=20&m=1355726436&s=170667a&w=0&h=QEKrDy9CCriiRaCqZCJIcxJUIGMeItOgztt6bI-NKsg=',
            "imgs3":'https://media.istockphoto.com/photos/modern-luxurious-walkin-closet-interior-picture-id1327481911?b=1&k=20&m=1327481911&s=170667a&w=0&h=GJMu9Tq2BzKNTRxwerGXvbUN-btatf0qyOM6R-EcGyM=',
            "imgs4":"https://media.istockphoto.com/photos/green-sofa-in-modern-apartment-interior-with-empty-wall-and-wooden-picture-id1326191354?b=1&k=20&m=1326191354&s=170667a&w=0&h=Uhy5cSKNEBWjBDU6lfwFsNctHsYN9VudFEQJMLEHSWc=",
            'h4':'Modern Apartment',
            'price':'$35000/mo',
            'bed':'3',
            'bath':'4',
            'living':'2'
        }
    ])
    const [index,setIndex]=useState(0);
    const handleSelect=(selectedIndex,e)=>{
        setIndex(selectedIndex)
    }
    return ( 
        <div className="Recommended">
            <Container>
                <h1 className='text-center'>Recommended <span className="text-success"> Listings</span></h1>
                <h6 className='text-center'>CheckOut  our Recommended listings</h6>
                <Row>
                    {list.map((lis,inx)=>{
                        return(
                          <Col key={inx}  xs={12} sm={6} md={3} className='mt-2 mb-2'>
                            <Card className='shadow'>
                            <Carousel fade activeIndex={index} onSelect={handleSelect}>
                                <Carousel.Item>
                                  <Card.Img  src={lis.imgs} alt="recommended listings"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                  <Card.Img  src={lis.imgs2} alt="recommended listings"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                  <Card.Img  src={lis.imgs3} alt="recommended listings"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                  <Card.Img  src={lis.imgs4} alt="recommended listings"/>
                                </Carousel.Item>
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
                                        <Col><Button variant='secondary'>Request info</Button></Col>
                                        <Col><Button>view details</Button></Col>
                                    </Row>
                                 
                            </Card.Body>
                            </Card>
                          </Col>  
                        )
                    })}
                </Row>
            </Container>
            <div className="Latest">
                <div className='latest-child'>
                    <h1 className='text-center'>
                    Want To Know The latest Trends?
                </h1>
                <p className='h4 text-center'>Get to know more about the world of real Estate</p>
                <Button className='bg-primary learnMore'>Learn More</Button>
            </div>
                </div>    
        </div>
     );
}
 
export default RecommendList;