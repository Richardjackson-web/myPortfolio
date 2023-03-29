import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../Image/Logo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {AiOutlineMail, AiFillTwitterCircle} from 'react-icons/ai';
import {FaHtml5} from 'react-icons/fa';
import {FaCss3} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {RiWhatsappFill, RiInstagramFill, RiFacebookCircleFill} from 'react-icons/ri'; 
import Scroll from '../../Image/scroll.png';


function Home() {

  return (
    <div id="myP">
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img src={Logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="top-nav me">
                  <Nav.Link href="#action1" className="con">Home</Nav.Link>
                  <Nav.Link href="#action2" className="con">Portfolio</Nav.Link>
                  <Nav.Link href="#action2" className="con">Services</Nav.Link>
                  <Nav.Link href="#action2" className="con">About</Nav.Link>
                  <Nav.Link href="#action2" className="con">Contact</Nav.Link>
                </Nav>
                <Form className="d-flex connect">
                <Nav.Link href="https://www.linkedin.com/in/richard-jackson-802897190/" className="con box">LinkedIn</Nav.Link> &nbsp;&nbsp;
                  <Nav.Link href="https://github.com/Richardjackson-web" className="con box">GitHub</Nav.Link>&nbsp;&nbsp;
                  <Nav.Link href="#action2" className="top mail"><AiOutlineMail className="main-mail"/></Nav.Link>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    <Container>
        <Row className="row-home">
            <Col sm={5} className="boxOne">
                <div className="hold">
                    <h1 className="home-text">Hi There!<br/> I'm Richard.</h1>
                    <p className="home-front">Frontend Web Developer.</p>
                    <Button className="home-button">Learn More</Button>
                    <div className="icon-holder">
                      <FaHtml5 className="icons" />&nbsp;&nbsp;
                      <FaCss3 className="icons" />&nbsp;&nbsp;
                      <SiJavascript className="icons" />&nbsp;&nbsp;
                      <FaReact className="icons" />
                    </div>
                </div>
            </Col>
            <Col sm={5} className="boxTwo">
            <div>

            </div>
            </Col>
            <div>
              <img className="scroll" src={Scroll}/>
            </div>
        </Row>
        <div className="home-social-holder">
        <RiWhatsappFill className="home-social-icons" />&nbsp;&nbsp;
        <RiInstagramFill className="home-social-icons" />&nbsp;&nbsp;
        <RiFacebookCircleFill className="home-social-icons" />&nbsp;&nbsp;
        <AiFillTwitterCircle className="home-social-icons" />&nbsp;&nbsp;
        </div>
    </Container>
    </div>
  )
}

export default Home