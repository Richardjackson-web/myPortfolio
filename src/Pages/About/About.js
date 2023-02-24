import React from 'react';
import './About.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {RiWhatsappFill, RiInstagramFill, RiFacebookCircleFill} from 'react-icons/ri'; 
import Test from '../../Image/test.png';
import Index from '../../Image/index.png';
import Stars from '../../Image/stars.png';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <div>
          <hr className="about-line"/>
          <h2 className="about-head">Resume</h2>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Container>
      <Row className="resume-row">
            <Col sm={7} className="about-experience">
            <h4 className="about-edu">Experience</h4>
                <h4 className="about-title">Wedigraf Technologies &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="month">Aug. 2022 - Nov. 2022</span></h4>
                <h4 className="about-content">Frontend Developer Tutor</h4>
                <p className="about-content">I taught and mentored beginners on HTML, CSS, JavaScript, Git/GitHub and Reactjs to help them become better developers and build responsive and great looking websites and web applications.</p><br/>

                <h4 className="about-title">Zuri Chat &nbsp;&nbsp;&nbsp;&nbsp;Sep. 2021 - Dec. 2021</h4>
                <h4 className="about-content">Frontend Developer</h4>
                <p className="about-content">I lead a team of 100 developers across different continents to build a company holiday calendar plugin to be integrated into Zuri Chat (a slack clone but embedded with great futures).</p><br/>

                <h4 className="about-title">Icevolt &nbsp;&nbsp;&nbsp;&nbsp;Oct. 2021 - Nov. 2021</h4>
                <h4 className="about-content">Frontend Developer</h4>
                <p className="about-content">I built a responsive user interface for a web application where one can order solar equipment and tailoring it a specific specifications of need.</p><br/>
            </Col>
            <Col sm={5} className="about-education">
            <h4 className="about-edu">Education</h4>
                <h4 className="about-title">University of Uyo &nbsp;&nbsp;&nbsp;&nbsp;November 2021</h4>
                <p className="about-content">B.sc, Biochemistry.</p><br/>

                <h4 className="about-title">Great Faith Comprehensive College &nbsp;&nbsp;&nbsp;&nbsp;July 2013</h4>
                <p className="about-content">WAEC.</p><br/>

                <h4 className="about-title">James and Jones Nur./Pri. School &nbsp;&nbsp;&nbsp;&nbsp;June 2007</h4>
                <p className="about-content">FSLC.</p><br/>
            </Col>
      </Row>
    </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModalTest(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <h1 className="testimonial">TESTIMONIALS</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Container>
      <Row className="main-test">
          <Col sm={12}>
          <div className="test-div">
            <img className="test-img" src={Test}/>
            <p className="test-text">Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
            <img src={Stars}/>
            <h3 className="test-client">Regina Miles</h3>
            <p className="client">Designer</p>
          </div>
          </Col>
      </Row>
    </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function About() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowTest, setModalShowTest] = React.useState(false);
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
                <button onClick={() => setModalShow(true)} className="about-button-resume">Resume</button>&nbsp;&nbsp;
                <button onClick={() => setModalShowTest(true)} className="about-button-testimonials">Testimonials</button>


      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <MyVerticallyCenteredModalTest
        show={modalShowTest}
        onHide={() => setModalShowTest(false)}
      />
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