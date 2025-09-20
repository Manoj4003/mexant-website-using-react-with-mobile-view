import React from "react";
import "./Service.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaBoxArchive } from "react-icons/fa6";
import Card from "react-bootstrap/Card";
import { FaCloud } from "react-icons/fa";
import { FaChargingStation } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa";
import { FaArchway } from "react-icons/fa6";
import { FaPuzzlePiece } from "react-icons/fa6";


export default function Service() {
  return (
    <div>
        

      <div className="service-part py-5 mt-5">
        <Container>
          <Row>
            <Col md={6} className="mt-5">
              <Card>
                <div className="card-body d-flex ">
                  <div className="card-logo">
                    <FaBoxArchive />
                  </div>
                  <div className="card-text mx-5">
                    <h1>CSS Templates</h1>
                    <p>
                      TemplateMo website is the best for you to explore and
                      download free website templates.
                    </p>
                  </div>
                </div>
              </Card>
            </Col>

            <Col md={6 } className="mt-5">
              <Card>
                <div className="card-body d-flex py-3">
                  <div className="card-logo">
                    <FaCloud />
                  </div>
                  <div className="card-text mx-5">
                    <h1>HTML5 Web Pages</h1>
                    <p>
                      Templates are based on Bootstrap 5 CSS framework. You can
                      easily adapt or modify based on your needs.
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mt-5">
              <Card>
                <div className="card-body d-flex  ">
                  <div className="card-logo">
                    <FaChargingStation />
                  </div>
                  <div className="card-text mx-5">
                    <h1>Responsive Designs</h1>
                    <p>
                      All of our CSS templates are 100% free to use for
                      commercial or business websites.
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={6} className=" mt-5">
              <Card>
                <div className="card-body d-flex">
                  <div className="card-logo">
                    <FaSuitcase />
                  </div>
                  <div className="card-text mx-5">
                    <h1>Mobile and Tablet ready!</h1>
                    <p>
                      Our HTML CSS templates are well-tested on mobile, tablet,
                      and desktop compatibility.
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6} className=" mt-5">
              <Card>
                <div className="card-body d-flex">
                  <div className="card-logo">
                   <FaArchway />
                  </div>
                  <div className="card-text mx-5">
                    <h1>Fast Customer Support</h1>
                    <p>
                      Do not be hesitated to contact us if you have any question
                      or concern about our templates.
                    </p>
                  </div>
                </div>
              </Card>
            </Col>{" "}
            <Col md={6} className=" mt-5">
              <Card >
                <div className="card-body d-flex">
                  <div className="card-logo">
                    <FaPuzzlePiece />
                  </div>
                  <div className="card-text mx-5">
                    <h1>Fully Customizable</h1>
                    <p>
                      If you have any idea or suggestion about new templates,
                      feel free to let us know.
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      
    </div>
  );
}
