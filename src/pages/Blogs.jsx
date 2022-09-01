import { useState } from 'react';
import {
    Row,
    Col,
    Container,
    Card
} from 'react-bootstrap'



const Blogs = () => {
    const [list,setList]=useState([
        {
            'imgs':'https://media.istockphoto.com/photos/housing-development-under-construction-picture-id157284152?k=20&m=157284152&s=612x612&w=0&h=alOupcvMGyPlt3LjDazL6FA9BXvGstREbRGNjJG_aD0=',
            'h4':'How to avoid wastages when building'
        },
        {
            'imgs':'https://media.istockphoto.com/photos/professional-engineer-architect-worker-with-protective-helmet-and-picture-id1041465228?k=20&m=1041465228&s=612x612&w=0&h=0lbYwwD2R35MRUzDw7IKZyTVEs7CDxLxdlb8fs3EQmM=',
            'h4':'Real eastate agent and you'
        },
        {
            'imgs':'https://media.istockphoto.com/photos/aerial-view-of-new-build-housing-construction-site-in-england-uk-picture-id1326930013?b=1&k=20&m=1326930013&s=170667a&w=0&h=y8Uv-jTVInw5XFwI5yFb3x53Z_5bDK8xLlbimKEZyIc=',
            'h4':'Picking Quality materials for your house'
        },
        {
            'imgs':'https://media.istockphoto.com/photos/successful-partnership-picture-id1365436662?b=1&k=20&m=1365436662&s=170667a&w=0&h=TTTy5tNN_VJEP6ZPpY1u5vo2L5fV7HxR4Oty-ofGBkc=',
            'h4':'Designing the interior frame of your house '
        },
        {
            'imgs':'https://media.istockphoto.com/photos/for-sale-sign-with-sold-sticker-in-front-of-house-picture-id505685790?b=1&k=20&m=505685790&s=170667a&w=0&h=gBB0_ZDz3bLZ9XN6CxTE8W_0wAfNR_zBW5eyr_vGt-w=',
            'h4':'Why Should you invest in Real estate'
        },
        {
            'imgs':'https://media.istockphoto.com/photos/estate-agent-showround-picture-id1326353127?b=1&k=20&m=1326353127&s=170667a&w=0&h=U133nysVsV_ouGhH61iZAnuaa3bivWUGsjs8q8u-JJo=',
            'h4':'Real eastate agent and you'
        },
        {
            'imgs':'https://media.istockphoto.com/photos/real-estate-agent-leading-client-through-modern-office-building-lobby-picture-id1333137273?b=1&k=20&m=1333137273&s=170667a&w=0&h=YjHymziRBworgtvQGmSUXSC-U5hy7gkJU2UMpslZTFo=',
            'h4':'Picking Quality materials for your house'
        },
        {
            'imgs':'https://media.istockphoto.com/photos/aerial-view-of-residential-houses-at-autumn-american-neighborhood-picture-id1181134074?b=1&k=20&m=1181134074&s=170667a&w=0&h=BK9HTd2nX0gKYz1wRHiWrQHE0MTXxAW6yHENhIecJWo=',
            'h4':'Designing the interior frame of your house '
        },
        {
            'imgs':'https://media.istockphoto.com/photos/businessman-using-a-computer-for-property-sales-listings-real-estate-picture-id1335050734?b=1&k=20&m=1335050734&s=170667a&w=0&h=tnK2OCgBSt9UDtAUBuN452cwaUh1_HGdcc2QU5wi2FQ=',
            'h4':'How to avoid wastages when building'
        },
        {
            'imgs':'https://media.istockphoto.com/photos/white-kitchen-design-picture-id1266498393?b=1&k=20&m=1266498393&s=170667a&w=0&h=rlHQQOKCOXCuXU4j9E5oiNxq8v4uijVX520dxfZ4Hv8=',
            'h4':'Real eastate agent and you'
        },
        {
            'imgs':'https://media.istockphoto.com/photos/house-model-and-key-in-home-insurance-broker-agent-hand-or-in-person-picture-id1076671916?b=1&k=20&m=1076671916&s=170667a&w=0&h=q1PeFUHix0sUYkxLJRqpwPdOK-y0NdxECeUMOkX_c7s=',
            'h4':'Picking Quality materials for your house'
        },
        {
            'imgs':'https://media.istockphoto.com/photos/house-placed-on-coins-mens-hand-is-planning-savings-money-of-coins-to-picture-id1057067420?b=1&k=20&m=1057067420&s=170667a&w=0&h=Bc57an0dEouvrnMwed35TfGaC8pObmNA4Q9SOSK0Z3o=',
            'h4':'Picking The right color for you house '
        }
    ])
    return ( 
        <div className="Blogs" style={{
            margin:'2vw'
        }}>
            <Container>
                <h2 className='text-info text-center' >Our <span className='text-warning'>Blogs</span></h2>
                <Row>
                    {list.map((lis,index)=>{
                        return(
                          <Col key={index}  xs={12} sm={6} md={3}>
                              <Card className='shadow'>
                                  <Card.Img  src={lis.imgs} alt=""/>
                                  <Card.Body>
                                    <h4>{lis.h4} </h4>
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
 
export default Blogs;