import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import style from "./Navbar.module.css"


export default function Header() {
    return (
        <Navbar expand="lg" className={`${style.navbarstyling} p-3 fw-bold text-uppercase`} >
            <Container>
                <Navbar.Brand className='fs-3'> <Link className='text-decoration-none text-white' to="react-project-1/home">Start Framework</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {/* <Nav.Link className='mx-3' href="#home">About</Nav.Link> */}
                        {/* <Nav.Link className='mx-3' href="#link">Portofolio</Nav.Link> */}
                        {/* <Nav.Link className='mx-3' href="#link">Contact</Nav.Link> */}
                        {/* <li><Link to="portfolio">Portfolio</Link></li> */}
                        {/* <li><Link to="about">Portfolio</Link></li> */}
                        {/* <li><Link to="contact">Portfolio</Link></li> */}
                        {/* <li><Link to="home">Portfolio</Link></li> */}

                        <Nav.Link className='mx-4'> <NavLink className='text-decoration-none text-white' to="react-project-1/about" >About</NavLink>  </Nav.Link>
                        <Nav.Link className='mx-4'> <NavLink className='text-decoration-none text-white ' to="react-project-1/portfolio" >Portfolio</NavLink>  </Nav.Link>
                        <Nav.Link className='mx-4'> <NavLink className='text-decoration-none text-white ' to="react-project-1/contact" >Contact</NavLink>  </Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
