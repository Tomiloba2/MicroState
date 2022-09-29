import {
    Row,Col,FormControl, Button, Container
} from 'react-bootstrap'
import './Styles/Style.css'

const Footer = () => {
    return ( 
        <div>
            <Row className='bg-dark text-light mr-2 ml-2 '>
                <Col xs={12} md={6} lg={3} className='container footer-col mt-2 mb-2'>
                <Container>
                    <h4 className='text-primary'>About Us</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Delectus nobis vel deleniti omnis, vero provident iure 
                        harum! Dolore doloremque sit distinctio, obcaecati inc
                        idunt quiaeveniet cupiditate illo quibusdam quod commodi!
                    </p>
                    </Container>
                </Col>
                <Col xs={12} md={6} lg={3}  className='text-center footer-col'>
                <Container>
                    <h4 className='text-primary'>Menu</h4>
                    <ul>
                        <li className='text-center footer-li mt-2 mb-2'>
                            <a className='text-light' href="/">Home</a>
                        </li>
                        <li className='text-center footer-li '>
                            <a className='text-light' href="/search">Search</a>
                        </li>
                        <li className='text-center footer-li '>
                            <a className='text-light' href="/blogs">Blogs</a>
                        </li>
                        <li className='text-center footer-li '>
                            <a className='text-light' href="/contact">Contact</a>
                        </li>
                    </ul>
                    </Container>
                </Col>
                <Col xs={12} md={6} lg={3} className='text-center footer-col mt-2 mb-2'>
                    <h4 className='text-primary'>Follow us</h4>
                    <ul>
                        <li className='fa-icons'>
                                <a href="#">
                                <i className='fa fa-facebook fa-2x text-light'></i></a></li>
                        <li className='fa-icons'>
                                <a href="#">
                                <i className='fa fa-twitter fa-2x text-light'></i></a></li>
                        <li className='fa-icons'>
                                <a href="#">
                                <i className='fa fa-instagram fa-2x text-light'></i></a></li>
                        <li className='fa-icons'>
                                <a href="#">
                                <i className='fa fa-linkedin fa-2x text-light'></i></a></li>
                    </ul>
                </Col>
                <Col xs={12} md={6} lg={3}  className='footer-col mt-2 mb-2'>
                <Container>
                    <h4 className='text-primary'>News letter</h4>
                    <form action="#">
                        <FormControl placeholder='Name' type='text' required/><br />
                        <FormControl placeholder='Email' type='email' required/>
                        <Button value='submit' type='submit' className='submit-button'>
                            Submit
                        </Button>
                    </form>
                    </Container>
                </Col>
            </Row>
        </div>
     );
}
 
export default Footer;