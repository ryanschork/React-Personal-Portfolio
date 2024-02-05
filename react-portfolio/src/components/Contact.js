import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from "@emailjs/browser";

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('gmail', 'template_0oh9xsp', form.current, 'UJFKPqSJaFHFL8LtR')
        .then((result) => {
            alert('Message sent successfully');
            window.location.reload(false)
        }, (error) => {
            alert('Message failed to send, please try again.')
        });
    };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="First Name" name="user_name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Phone No." />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message" name="message" ></textarea>
                      <button type="submit"><span>Submit</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}