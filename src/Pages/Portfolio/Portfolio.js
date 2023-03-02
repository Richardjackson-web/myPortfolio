import React from 'react';
import './Portfolio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Icevolt from '../../Image/icevolt.png';
import Winters from '../../Image/wintersbetting.png';
import MyPortfolio from '../../Image/portfolio.png';
import Linktree from '../../Image/linktree.png';
import Weather from '../../Image/weatherapp.png';
import Volunteer from '../../Image/volunteer.png';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {RiWhatsappFill, RiInstagramFill, RiFacebookCircleFill} from 'react-icons/ri'; 
import Scroll from '../../Image/scroll.png';

function Portfolio() {
  return (
    <div className="port">
      <Container>
        <Row>
          <Col sm={12}>
            <div>
              <hr className="portfolio-line"/>
              <h2 className="portfolio-head">Portfolio</h2>
              <p className="portfolio-text">
                Check out some my works here.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="port-row">
          <Col className="port-move" sm={4}>
          <Card className="port-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Icevolt} />
            <Card.Body>
            <Card.Title>Icevolt</Card.Title>
            <a href="https://practical-pare-e86f1b.netlify.app/"><button className="port-btn">Click here to visit site.</button></a>
            </Card.Body>
          </Card>
          </Col>
          
          <Col className="port-col port-move" sm={4}>
          <Card className="port-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Winters} />
            <Card.Body>
            <Card.Title>Winters Betting</Card.Title>
            <a href="https://bet-site.vercel.app/"><button className="port-btn">Click here to visit site.</button></a>
            </Card.Body>
          </Card>
          </Col>
          
          
          <Col className="port-col port-move" sm={4}>
          <Card className="port-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={MyPortfolio} />
            <Card.Body>
            <Card.Title>My Portfolio</Card.Title>
            <a href="https://my-portfolio-richard.vercel.app/"><button className="port-btn">Click here to visit site.</button></a>
            </Card.Body>
          </Card>
          </Col>
        </Row>
          <br/>
        <Row>
          
          <Col className="port-move" sm={4}>
          <Card className="port-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Linktree} />
            <Card.Body>
            <Card.Title>Linktree</Card.Title>
            <a href="https://linktree-profile.vercel.app/"><button className="port-btn">Click here to visit site.</button></a>
            </Card.Body>
          </Card>
          </Col>
          
          
          <Col className="port-col port-move" sm={4}>
          <Card className="port-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Weather} />
            <Card.Body>
            <Card.Title>A Weather App</Card.Title>
            <a href="https://myweathermap.netlify.app/"><button className="port-btn">Click here to visit site.</button></a>
            </Card.Body>
          </Card>
          </Col>
          
          
          <Col className="port-col port-move" sm={4}>
          <Card className="port-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Volunteer} />
            <Card.Body>
            <Card.Title>Volunteer Organization</Card.Title>
            <a href="https://becomeavolunteer.netlify.app/"><button className="port-btn">Click here to visit site.</button></a>
            </Card.Body>
          </Card>
          </Col>
          <div>
              <img className="scroll" src={Scroll}/>
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

export default Portfolio