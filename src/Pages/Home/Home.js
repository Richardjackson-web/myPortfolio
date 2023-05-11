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
              {/* <img className="scroll" src={Scroll}/> */}
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