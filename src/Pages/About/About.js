import React from 'react';
import './About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {RiWhatsappFill, RiInstagramFill, RiFacebookCircleFill} from 'react-icons/ri'; 
// import Scroll from '../../Image/scroll.png';
import Index from '../../Image/index.png';

function About() {
  return (
    <div>
      <Container className="about-main">
        <Row className="row-about">
          <div>
          <hr className="about-line"/>
          <h2 className="about-head">About me</h2>
          </div>
            <Col sm={5} className="about-boxOne">
                <h1 className="richard">I'm <span className="richard-span">Richard.</span><br/> Web Developer.</h1>
                <p className="richard-text">
                A front-end developer and tutor with over 3 years of experience that deals with the client-side of the web, building responsive, scalable, and aesthetic websites and web applications. JavaScript is my core  programming language with React.js as the area of specialty.
                </p>
                <div className="btn-div">
                <button className="about-button-resume">Resume</button>&nbsp;&nbsp;
                <button className="about-button-testimonials">Testimonials</button>
                </div>
            </Col>
            <Col sm={7} className="about-boxTwo">
            <div className="about-image">

            </div>
            <img className="index-img" src={Index}/>
            </Col>
            <div>
              {/* <img className="about-scroll" src={Scroll}/> */}
            </div>
        </Row>
        <div className="social-holder">
        <RiWhatsappFill className="social-icons" />&nbsp;&nbsp;
        <RiInstagramFill className="social-icons" />&nbsp;&nbsp;
        <RiFacebookCircleFill className="social-icons" />&nbsp;&nbsp;
        <AiFillTwitterCircle className="social-icons" />&nbsp;&nbsp;
        </div>
    </Container>
    </div>
  )
}

export default About