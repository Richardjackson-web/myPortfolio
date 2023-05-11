import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../Image/Logo.png';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {AiOutlineMail} from 'react-icons/ai';
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <div>
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
                  <Link to="/" href="#action1" className="con">Home</Link>
                  {/* <Link href="#action2" className="con">Services</Link> */}
                  <Link to="/about" href="#action2" className="con">About</Link>
                  <Link to="/portfolio" href="#action2" className="con">Portfolio</Link>
                  <Link to="/contact" href="#action2" className="con">Contact</Link>
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
      <Outlet />
    </div>
  )
}

export default Header