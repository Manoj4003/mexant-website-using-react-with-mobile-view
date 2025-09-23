import React from "react";
import './PagesAboutus.css';
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import leftimg from "../../assets/about-left-image.jpg";
import BusinessSolution from "../BusinessSolution/BusinessSolution";


export default function PagesAboutus() {
  return (
    <div>
      {/* Top Banner */}
      <div className="pages-about-us text-center py-5 mt-5">
        <div className="tittle">
          <h1 className="text-white fw-bolder">About Us</h1>
          <div className="line-part"></div>
        </div>
      </div>

      {/* About Image + Accordion */}
      <Container>
        <Row className="py-5 mt-5 align-items-center">
          <Col md={6} className="about-img">
            <img src={leftimg} alt="About Us" className="img-fluid" />
          </Col>
          <Col md={6} className="accordian-part">
            <Accordion defaultActiveKey="0" className="shadow">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Mexant Financial Planning</Accordion.Header>
                <Accordion.Body>
                  You will see a bunch of free CSS templates when you search on
                  Google. TemplateMo website is probably the best one because it
                  is 100% free.
                  <br />
                  <br />
                  We do not ask you anything in return. You are free to use our
                  templates for any purpose.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Mexant Crypto Investing</Accordion.Header>
                <Accordion.Body>
                  Mexant HTML5 Template is available to download 100% free of
                  charge. This CSS layout is based on Bootstrap 5 framework.
                  <br />
                  <br />
                  Anyone can edit and use this layout for all professional
                  websites. Thank you for visiting TemplateMo website.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Cryptocurrency Investments</Accordion.Header>
                <Accordion.Body>
                  Ut dictum vehicula massa, ac pharetra leo tincidunt eu.
                  Phasellus in tristique magna, ac gravida leo.
                  <br />
                  <br />
                  Integer sed lorem sapien. Ut viverra mauris sed lobortis
                  commodo. Mauris scelerisque venenatis justo, sed interdum sem.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      <BusinessSolution />
      {/* Idea + Steps Section */}
      <Container className="py-5">
        <Row className="align-items-center">
          {/* Left Side - Text */}
          <Col md={6}>
            <h3 className="py-3">
              Please tell us about your idea and how you want it to be
            </h3>
            <p>
              If you need more HTML templates, you can try visiting TooCSS blog
              and Tooplate websites. You can get many good templates on those
              websites.
            </p>
            <p className="py-3">
              Nulla non placerat neque, a gravida elit. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Morbi sed dolor condimentum tellus commodo volutpat non malesuada
              turpis.
            </p>
            <div className="py-3 btn">
              <Button variant="success">Discover More</Button>
            </div>
          </Col>

          {/* Right Side - 4 Steps Grid */}
          <Col md={6}>
            <Row className="g-4">
              <Col md={6}>
                <div className="shadow py-4 h-100 px-3">
                  <div className="card-tittle d-flex justify-content-between text-success">
                    <h4>First Step</h4>
                    <h3>01</h3>
                  </div>
                  <p className="py-2">
                    Pellentesque ipsum elit, congue a sapien laoreet,
                    pellentesque ultricies risus.
                  </p>
                </div>
              </Col>

              <Col md={6}>
                <div className="shadow py-4 h-100 px-3">
                  <div className="card-tittle d-flex justify-content-between text-success">
                    <h4>Second Step</h4>
                    <h3>02</h3>
                  </div>
                  <p className="py-2">
                    Pellentesque ipsum elit, congue a sapien laoreet,
                    pellentesque ultricies risus.
                  </p>
                </div>
              </Col>

              <Col md={6}>
                <div className="shadow py-4 h-100 px-3">
                  <div className="card-tittle d-flex justify-content-between text-success">
                    <h4>Third Step</h4>
                    <h3>03</h3>
                  </div>
                  <p className="py-2">
                    Pellentesque ipsum elit, congue a sapien laoreet,
                    pellentesque ultricies risus.
                  </p>
                </div>
              </Col>

              <Col md={6}>
                <div className="shadow py-4 h-100 px-3">
                  <div className="card-tittle d-flex justify-content-between text-success">
                    <h4>Fourth Step</h4>
                    <h3>04</h3>
                  </div>
                  <p className="py-2">
                    Pellentesque ipsum elit, congue a sapien laoreet,
                    pellentesque ultricies risus.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    
    </div>
  );
}
