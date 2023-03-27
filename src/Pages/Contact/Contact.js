import React from 'react';
import './Contact.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {RiWhatsappFill, RiInstagramFill, RiFacebookCircleFill} from 'react-icons/ri';

function Contact() {
  return (
    <div className="contact">
      <Container className="contact-main">
        <Row className="row-contact">
          <div>
          <hr className="contact-line"/>
          <h2 className="contact-head">Contact me</h2>
          </div>
            
        </Row>
        <Form className="contact-form">
      <Row>
        <Col md={3} xs={1}>

        </Col>
        <Col md={3} xs={10}>
          <Form.Control className="input" placeholder="First name" />
        </Col>
        <br/><br className="con-br"/><br className="con-br"/>
        <Col md={3} xs={10}>
          <Form.Control className="input extra" placeholder="Last name" />
        </Col>
        <Col md={3} xs={1}>
          
        </Col>
      </Row>
      <br/>
      <Row>
      <Col md={3} xs={1}>
          
          </Col>
        <Col md={6} xs={10}>
        <Form.Control className="input" placeholder="Last name" />
        </Col>
        <Col md={3} xs={1}>
          
        </Col>
      </Row>
      <br/>
      <Row>
      <Col md={3} xs={1}>
          
        </Col>
        <Col md={6} xs={10}>
        <Form.Control
         className="input"
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
        </Col>
        <Col md={3} xs={1}>
          
          </Col>
      </Row>
      <br/>
      <Row>
        <Col>
        <button className="con-mail">Send mail</button> 
        </Col>
      </Row>
    </Form>
        <div className="social-holder-contact">
        <RiWhatsappFill className="social-icons" />&nbsp;&nbsp;
        <RiInstagramFill className="social-icons" />&nbsp;&nbsp;
        <RiFacebookCircleFill className="social-icons" />&nbsp;&nbsp;
        <AiFillTwitterCircle className="social-icons" />&nbsp;&nbsp;
        </div>
    </Container>
    </div>
  )
}

export default Contact