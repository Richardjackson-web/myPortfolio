import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {FaHtml5} from 'react-icons/fa';
import {FaCss3} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {RiWhatsappFill, RiInstagramFill, RiFacebookCircleFill} from 'react-icons/ri'; 
// import Scroll from '../../Image/scroll.png';


function Home() {

  return (
    <div id="myP">
    <Container>
        <Row className="row-home">
            <Col sm={6} className="boxOne">
                <div className="hold">
                    <h1 className="home-text">Hi There!<br/> I'm Richard.</h1>
                    <p className="home-front">Frontend Web Developer.</p>
                    <Button href="https://my-portfolio-richard.vercel.app/about" className="home-button">Click here to know me...</Button>
                    <div className="icon-holder">
                      <FaHtml5 className="icons" />&nbsp;&nbsp;
                      <FaCss3 className="icons" />&nbsp;&nbsp;
                      <SiJavascript className="icons" />&nbsp;&nbsp;
                      <FaReact className="icons" />
                    </div>
                </div>
            </Col>
            <Col sm={6} className="boxTwo">
            <div>

            </div>
            </Col>
            <div>
              {/* <img className="scroll" src={Scroll}/> */}
            </div>
        </Row>
        <div className="home-social-holder">
        <RiWhatsappFill href="https://wa.link/dsyz46" className="home-social-icons" />&nbsp;&nbsp;
        <RiInstagramFill href="https://www.instagram.com/i_am_richaard/" className="home-social-icons" />&nbsp;&nbsp;
        <RiFacebookCircleFill href="https://web.facebook.com/Richard.jackson1010" className="home-social-icons" />&nbsp;&nbsp;
        <AiFillTwitterCircle href="https://twitter.com/i_am_richaard?s=08" className="home-social-icons" />&nbsp;&nbsp;
        </div>
    </Container>
    </div>
  )
}

export default Home