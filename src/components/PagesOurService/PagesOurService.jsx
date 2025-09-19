import React from "react";
import "./PagesOurService.css";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { FaArchive } from "react-icons/fa";
import service1 from "../../assets/service-image-01.jpg";
import service2 from "../../assets/service-image-02.jpg";
import service3 from "../../assets/service-image-03.jpg";
import BusinessSolution from "../BusinessSolution/BusinessSolution";
import servicedetails1 from '../../assets/service-details-01.jpg';
import servicedetails2 from '../../assets/service-details-02.jpg';
import servicedetails3 from '../../assets/service-details-03.jpg';
import Footer from "../FooterSection/Footer";
function PagesOurService() {
  return (
    <div>
      <div className="Pages-our-service ">
        <h1 className="text-white">Our Services</h1>
        <div className="line-part"></div>
      </div>

      <Container className="service-item my-4 py-5 mt-5">
        {/* First Service */}
        <Row className="py-5 ">
          <Col md={6}>
            <div className="left-image">
              <img src={service1} alt="Service1" />
            </div>
          </Col>
          <Col md={6} className="d-flex align-items-center ">
            <div className="right-text-content">
              <div className="outer-layer-img">
                <FaArchive size={80} className="mb-3 " />
              </div>
              <h4 className="fw-bolder">Digital Currencies</h4>
              <p>
                You will see a bunch of free CSS templates when you search on
                Google. TemplateMo is the best one because it is 100% free for
                anyone. We do not ask you anything in return. You are free to
                use our templates for any purpose.
              </p>
            </div>
          </Col>
        </Row>

        {/* Second Service */}
        <Row className="py-5 mt-5 ">
          <Col md={6} className="d-flex align-items-center">
            <div className="right-text-content">
              <div className="outer-layer-img">
                <FaArchive size={80} className="mb-3" />
              </div>

              <h4 className="fw-bolder">Financial Solutions</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                et ex massa. In ac laoreet urna. Curabitur eu enim nibh.
                Phasellus sodales nisi vel leo aliquam, ut tempus augue
                hendrerit. Pellentesque eu risus tincidunt, condimentum eros in,
                auctor augue. Vivamus et urna blandit, varius sapien sed.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="left-image">
              <img src={service2} alt="Service2" />
            </div>
          </Col>
        </Row>

        {/* Third Service */}
        <Row className="py-5 mt-5  ">
          <Col md={6}>
            <div className="left-image">
              <img src={service3} alt="Service3" />
            </div>
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div className="right-text-content">
             <div className="outer-layer-img">
               <FaArchive size={80} className="mb-3" />
             </div>
              <h4 className="fw-bolder">Cryptocurrency Exchanges</h4>
              <p>
                Mauris id efficitur ante, vitae ultrices metus. Donec et nunc
                massa. Nullam non felis dignissim, dapibus turpis semper,
                vulputate lorem. Nam volutpat posuere tellus, in porttitor justo
                interdum nec. Aenean in dapibus risus, in euismod ligula.
                Aliquam vel scelerisque elit. Business Solutions and Crypto
                Investments.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <BusinessSolution/>
       <Container>
      <Row>
        <Col md={6} className="offset-lg-3 text-center">
          <div className="section-heading py-5">
            <h6>Investment in Details</h6>
            <h4 className="py-2">Upgrade your knowledge</h4>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={10} className="offset-lg-1 ">
          <Tab.Container defaultActiveKey="crypto">
            <Row>
              <Col md={12} className="color-btn">
                <Nav className="menu justify-content-center mb-4">
                  <Nav.Item>
                    <Nav.Link eventKey="crypto" className="gradient-border">
                      Crypto Investments
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="market" className="gradient-border">
                      Cryptocurrency Market
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="planning" className="gradient-border">
                      Financial Planning
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col md={12}>
                <Tab.Content>
                  {/* Tab 1: Crypto Investments */}
                  <Tab.Pane eventKey="crypto">
                    <Row className="py-5 mt-5 gap-4 shadow px-5">
                      <Col md={5} className="py-5">
                        <div className="left-image">
                         <img src={servicedetails1} alt="Service Details" />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="right-content py-5">
                          <h4>Learn more about cryptocurrency investments</h4>
                          <p>
                            Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum
                            lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan
                            porta. Nullam pulvinar eros porttitor risus condimentum tempus.
                          </p>
                          <div className="span-list py-5">
                            <span>- Top Crypto prices and charts</span>
                          <br />
                          <span>- Is Cryptocurrency a good investment?</span>
                          <br />
                          <span>- Crypto Market Insiders and News</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>

                  {/* Tab 2: Cryptocurrency Market */}
                  <Tab.Pane eventKey="market">
                    <Row className="py-5 mt-5 gap-4 shadow px-5">
                      <Col md={5} className="py-5">
                        <div className="left-image">
                           <img src={servicedetails2} alt="Service Details" />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="right-content py-5">
                          <h4>Read more on Cryptocurrency Market</h4>
                          <p>
                            Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In
                            blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar
                            eros porttitor risus condimentum tempus.
                          </p>
                         <div className="span-list py-5">
                           <span>- Digital Currency Exchange</span>
                          <br />
                          <span>- Trading Cryptocurrencies Online</span>
                          <br />
                          <span>- Different Categories of Digital Currencies</span>
                         </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>

                  {/* Tab 3: Financial Planning */}
                  <Tab.Pane eventKey="planning">
                    <Row className="py-5 mt-5 gap-5 shadow px-5">
                      <Col md={5} className="py-5">
                        <div className="left-image">
                          <img src={servicedetails3}   alt="Service Details" />
                        </div>
                      </Col>
                      <Col md={6} >
                        <div className="right-content py-5 ">
                          <h4 className="fw-bolder">How to carefully plan on your online financials</h4>
                          <p >
                            Pellentesque ipsum elit, congue a sapien laoreet, pellentesque
                            ultricies risus. Nulla facilisi. Mauris vitae lacinia magna. Nam
                            euismod sapien sit amet elementum blandit. Nulla non placerat
                            neque.
                          </p>
                         <div className="span-list ">
                           <span>- Financial Planning and Investments</span>
                          <br />
                          <span>- Business Networking</span>
                          <br />
                          <span>- Managing Digital Assets</span>
                         </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  
<Footer/>
    </div>
  );
}

export default PagesOurService;
