import { useState } from 'react';
import {
    Row,
    Col,
    Container,
    Card
} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Styles/Style.css'

const Blog = () => {
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
            'imgs':'https://media.istockphoto.com/photos/couple-and-builder-picture-id125142280?b=1&k=20&m=125142280&s=170667a&w=0&h=J1jbxjh_WQgFREnXL_cenZv1YV-hT_Ku-dPhu39K0gc=',
            'h4':'Designing the interior frame of your house '
        }
    ])
    return ( 
        <div className="Blog">
            <Container>
                <h2 className='text-info' >Read our blogs</h2>
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
                <h5>
                    <Link to='/blogs'>Read More</Link>
                </h5>
            </Container>
        </div>
     );
}
 
export default Blog;