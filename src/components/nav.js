import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserCircle } from "react-icons/fa";

function NavScrollExample() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <a className="navbar-brand " href="#">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFdD2Boi3jt_XLBGesRN0inV-tOVDhy9N1OPJL_DK-lF_Q81-nEk1-FDrZR6bBcapsoI0&usqp=CAU"
                            alt="Bootstrap"
                            style={{ height: "38px", width: "53px", borderRadius: "50%" }} />
                    </a>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">                             
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}navbar >                                                         {/* navbarScroll*/}
                        <Nav.Link href="#action1">Number</Nav.Link>
                        <Nav.Link href="#action2">Email</Nav.Link>
                        <NavDropdown title={<FaUserCircle/>} id="navbarDropdown" style={{width: "145px", marginLeft:"39%"}}>  
                        
                            <NavDropdown.Item href="#action3" >Login</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Profile
                            </NavDropdown.Item>
                           
                            
                        </NavDropdown>    
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;

{/* <FaUserCircle style={{ height: "29px", width: "39px" }} /> */}
//navbarScrollingDropdown