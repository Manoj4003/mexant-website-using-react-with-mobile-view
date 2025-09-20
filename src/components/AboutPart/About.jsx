import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Tab, Nav } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import './About.css';

function About() {
  return (
    <div className="about_us_part py-5 mt-5 ">
      {/* Section Heading */}
      <Container fluid>
        <Row>
          <Col className="text-center mb-4 py-5">
            <h5 className="text-danger">ABOUT US</h5>
            <h1>Know Us Better</h1>
          </Col>
        </Row>
      </Container>

      {/* Content */}
      <Container>
        <Row>
          {/* Tabs + Tables */}
          <Col md={8}>
            <Tab.Container defaultActiveKey="home">
              {/* Nav Pills */}
              <Nav variant="pills" className="mb-4 btn-color">
                <Nav.Item>
                  <Nav.Link eventKey="home" className=" text-dark p-3">
                    Web Design
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="profile"
                    className=" text-dark mx-4 p-3"
                  >
                    Graphics
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="contact" className=" text-dark p-3 mobile-responsive">
                    Web Coding
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              {/* Tab Content */}
              <Tab.Content>
                {/* Web Design Table */}
                <Tab.Pane eventKey="home">
                  <div className="table-responsive mobile-table">
                    <Table bordered hover>
                      <thead>
                        <tr>
                          <th>Project Title</th>
                          <th>Budget</th>
                          <th>Deadline</th>
                          <th>Client</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-success">Website Redesign</td>
                          <td>$1,500 to $2,200</td>
                          <td>2022 Dec 12</td>
                          <td>Web Biz</td>
                        </tr>
                        <tr>
                          <td className="text-success">Website Renovation</td>
                          <td>$2,500 to $3,600</td>
                          <td>2022 Dec 10</td>
                          <td>Online Ads</td>
                        </tr>
                        <tr>
                          <td className="text-success">Marketing Plan</td>
                          <td>$2,500 to $4,200</td>
                          <td>2022 Dec 8</td>
                          <td>Web Biz</td>
                        </tr>
                        <tr>
                          <td className="text-success">All-new Website</td>
                          <td>$3,000 to $6,600</td>
                          <td>2022 Dec 2</td>
                          <td>Web Presence</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Tab.Pane>

                {/* Graphics Table */}
                <Tab.Pane eventKey="profile">
                  <div className="table-responsive mobile-table">
                    <Table bordered hover>
                      <thead>
                        <tr>
                          <th>Project Title</th>
                          <th>Budget</th>
                          <th>Deadline</th>
                          <th>Client</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-success">Graphics Redesign</td>
                          <td>$500 to $800</td>
                          <td>2022 Nov 24</td>
                          <td>Media One</td>
                        </tr>
                        <tr>
                          <td className="text-success">Digital Graphics</td>
                          <td>$1,500 to $3,000</td>
                          <td>2022 Nov 18</td>
                          <td>Second Media</td>
                        </tr>
                        <tr>
                          <td className="text-success">New Artworks</td>
                          <td>$2,200 to $4,400</td>
                          <td>2022 Nov 10</td>
                          <td>Artwork Push</td>
                        </tr>
                        <tr>
                          <td className="text-success">Complex Arts</td>
                          <td>$1,100 to $2,400</td>
                          <td>2022 Nov 3</td>
                          <td>Media One</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Tab.Pane>

                {/* Web Coding Table */}
                <Tab.Pane eventKey="contact">
                  <div className="table-responsive mobile-table">
                    <Table bordered hover>
                      <thead>
                        <tr>
                          <th>Project Title</th>
                          <th>Budget</th>
                          <th>Deadline</th>
                          <th>Client</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-success">Backend Coding</td>
                          <td>$2,000 to $5,000</td>
                          <td>2022 Nov 28</td>
                          <td>PHP MySQL</td>
                        </tr>
                        <tr>
                          <td className="text-success">New Web App</td>
                          <td>$1,500 to $3,000</td>
                          <td>2022 Nov 18</td>
                          <td>Python Programming</td>
                        </tr>
                        <tr>
                          <td className="text-success">Frontend Interactions</td>
                          <td>$3,000 to $6,000</td>
                          <td>2022 Nov 10</td>
                          <td>JavaScripts</td>
                        </tr>
                        <tr>
                          <td className="text-success">Video Creations</td>
                          <td>$1,800 to $4,400</td>
                          <td>2022 Nov 3</td>
                          <td>Multimedia</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>

          {/* Side Content */}
          <Col md={4} className="paragraph">
            <p className="fw-bolder fs-5">
              Please tell us about your idea and how you want it to be
            </p>
            <p>
              You are allowed to use this template for your websites. You are{" "}
              <b>NOT allowed</b> to redistribute the template ZIP file on any
              other template websites.
            </p>
            <p>
              Thank you for downloading and using our templates. Please tell
              your friends about our website.
            </p>
            <Button variant="success ">Discover More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
