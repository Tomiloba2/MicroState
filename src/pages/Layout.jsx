import {Link,Outlet} from 'react-router-dom'
import {
    Container,
    Navbar,
    Nav
} from 'react-bootstrap'
import './Styles/Style.css'
import { motion } from 'framer-motion';

const Layout = () => {
    return ( 
        <motion.div className="Layout">
            <Navbar bg='dark' variant='dark' expand='lg'>
                <Container>
                    <Navbar.Brand className='logobrand'>Micro<span className='text-warning'>State</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='mr-auto nav'>
                            <Nav.Link className='nav-link'>
                                <Link to='/' className='text-light h5 link'>
                                    Home
                                </Link>
                            </Nav.Link>
                            <Nav.Link className='nav-link'>
                                <Link to='/about' className='text-light h5 link'>
                                    About
                                </Link>
                            </Nav.Link>
                            <Nav.Link className='nav-link'>
                                <Link to='/search' className='text-light h5 link'>
                                    Search
                                </Link>
                            </Nav.Link>
                            <Nav.Link className='nav-link'>
                                <Link to='/blogs' className='text-light h5 link'>
                                    Blogs
                                </Link>
                            </Nav.Link>
                            <Nav.Link className='nav-link'>
                                <Link to='/contact' className='text-light h5 link'>
                                    Contact
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </motion.div>
     );
}
 
export default Layout;