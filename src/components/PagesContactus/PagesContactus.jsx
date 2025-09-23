import React, { useState } from "react";
import "./PagesContactus.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

const PagesContactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation logic
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      alert("✅ Message sent successfully!");
      console.log("Form Data:", formData);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div className="pages-contact-us text-center py-5 mt-5">
        <h1 className="text-white ">Contact Us</h1>
        <div className="line-part"></div>
      </div>

      {/* Map Section */}
      <Container className="py-5">
        <Row>
          <Col lg={12}>
            <div id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.78997548554!2d144.9805125252687!3d-37.84132841005892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6681f3e9cb7e1%3A0x9d52778f56cab5a8!2sFawkner%20Park!5e1!3m2!1sen!2sth!4v1648201596364!5m2!1sen!2sth"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: 0, borderRadius: "5px", position: "relative", zIndex: 2 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </Col>

          {/* Contact Info Boxes */}
          <Col lg={{ span: 10, offset: 1 }} className="mt-4">
            <Row>
              <Col lg={4} className="mb-4">
                <div className="info-item text-center shadow p-5">
                  <FaEnvelope size={24} className="mb-2 text-success fw-bolder" />
                  <h4>Email Address</h4>
                  <a href="mailto:info@company.com" className="text-success fw-bold">
                    info@company.com
                  </a>
                </div>
              </Col>
              <Col lg={4} className="mb-4">
                <div className="info-item text-center shadow p-5">
                  <FaPhone size={24} className="mb-2 text-success fw-bolder" />
                  <h4>Phone Number</h4>
                  <a href="tel:0100200340" className="text-success fw-bold">
                    010-020-0340
                  </a>
                </div>
              </Col>
              <Col lg={4} className="mb-4">
                <div className="info-item text-center shadow p-5">
                  <FaMapMarkedAlt size={24} className="mb-2 text-success fw-bolder" />
                  <h4>Address</h4>
                  <a
                    href="https://www.google.com/maps/place/Victoria,+Australia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-success fw-bold"
                  >
                    Victoria, Australia
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Contact Form */}
      <Container className="py-5">
        <Row>
          <Col lg={6} className="offset-lg-3 text-center">
            <div className="section-heading mb-4">
              <h6>Contact Us</h6>
              <h4>Feel free to message us</h4>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={10} className="offset-lg-1">
            <Form id="contact" onSubmit={handleSubmit} noValidate>
              <Row>
                <Col lg={6} className="mb-3">
                  <Form.Group controlId="formName">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your Name..."
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col lg={6} className="mb-3">
                  <Form.Group controlId="formPhone">
                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="Your Phone..."
                      value={formData.phone}
                      onChange={handleChange}
                      isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phone}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col lg={6} className="mb-3">
                  <Form.Group controlId="formEmail">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Your E-mail..."
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col lg={6} className="mb-3">
                  <Form.Group controlId="formSubject">
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Subject..."
                      value={formData.subject}
                      onChange={handleChange}
                      isInvalid={!!errors.subject}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.subject}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col lg={12} className="mb-3">
                  <Form.Group controlId="formMessage">
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={4}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col lg={12} className="text-center">
                  <Button type="submit" id="form-submit" className="orange-button">
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PagesContactus;
