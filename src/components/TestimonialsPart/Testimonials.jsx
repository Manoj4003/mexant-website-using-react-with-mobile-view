import Card from "react-bootstrap/Card";
import "./Testimonials.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { ImQuotesLeft } from "react-icons/im";
import client from "../../assets/testimonials-01.jpg";

function TestiMonials() {
  return (
    <div className="TestiMonials_part py-5">
      <Container>
        <Row>
          <Col className="text-center">
            <h5 className="text-danger">TESTIMONIALS</h5>
            <h1 className="fw-bolder">What They Say</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="py-5 ">
            <Card className="bg-light text-dark">
              {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
              <Carousel>
                <Carousel.Item>
                  <div className="slider-part">
                    <div className="text-part">
                      <Row className="mx-5 mt-5">
                        <Col md={8} className="tittle">
                         <div className="outer-layer">
                           <ImQuotesLeft className="quote-icon"/>
                         </div>
                          <p>
                            “Donec et nunc massa. Nullam non felis dignissim,
                            dapibus turpis semper, vulputate lorem. Nam volutpat
                            posuere tellus, in porttitor justo interdum nec.
                            Aenean in dapibus risus, in euismod ligula. Aliquam
                            vel scelerisque elit.”
                          </p>
                          <h4>David Eigenberg</h4>
                          <span>CEO of Mexant</span>
                        </Col>
                        <Col className="ms-5 client-img">
                          <img src={client} alt="Client-image" />
                        </Col>
                      </Row>
                    </div>
                    
                  </div>
                 
                </Carousel.Item>
                <Carousel.Item>
                  <div className="slider-part">
                    <div className="text-part">
                      <Row className="mx-5 mt-5">
                        <Col md={8} className="tittle">
                         <div className="outer-layer">
                           <ImQuotesLeft className="quote-icon"/>
                         </div>
                          <p>
                            “Donec et nunc massa. Nullam non felis dignissim,
                            dapibus turpis semper, vulputate lorem. Nam volutpat
                            posuere tellus, in porttitor justo interdum nec.
                            Aenean in dapibus risus, in euismod ligula. Aliquam
                            vel scelerisque elit.”
                          </p>
                          <h4>Ganapathi Raja</h4>
                          <span>CEO of SLA</span>
                        </Col>
                        <Col className="ms-5 client-img">
                          <img src={client} alt="Client-image" />
                        </Col>
                      </Row>
                    </div>
                    
                  </div>
                 
                </Carousel.Item>
                <Carousel.Item>
                  <div className="slider-part">
                    <div className="text-part">
                      <Row className="mx-5 mt-5">
                        <Col md={8} className="tittle">
                         <div className="outer-layer">
                           <ImQuotesLeft className="quote-icon"/>
                         </div>
                          <p>
                            “Donec et nunc massa. Nullam non felis dignissim,
                            dapibus turpis semper, vulputate lorem. Nam volutpat
                            posuere tellus, in porttitor justo interdum nec.
                            Aenean in dapibus risus, in euismod ligula. Aliquam
                            vel scelerisque elit.”
                          </p>
                          <h4>Manojkumar</h4>
                          <span>CEO of HCL</span>
                        </Col>
                        <Col className="ms-5 client-img">
                          <img src={client} alt="Client-image" />
                        </Col>
                      </Row>
                    </div>
                    
                  </div>
                 
                </Carousel.Item>
              </Carousel>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TestiMonials;
