import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logo.png";
import Button from "react-bootstrap/Button";
import SliderPart from "../HomePage/SliderPart";
import Service from "../ServicePart/Service";
import About from "../AboutPart/About";
import Form from "../FormPart/Form";
import TestiMonials from "../TestimonialsPart/Testimonials";
import Footer from "../FooterSection/Footer";
import PagesAboutus from "../PagesAboutus/PagesAboutus";
import BusinessSolution from "../BusinessSolution/BusinessSolution";
import PagesContactus from "../PagesContactus/PagesContactus";
import PagesOurService from "../PagesOurService/PagesOurService";

function CollapsibleExample() {
  return (
    <section>
      <div className="menu-bar ">
        <div className="menu-list ">
          <Navbar collapseOnSelect expand="lg">
            <Container>
              <img src={logo} alt="" />
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link href="#deets" className="px-4">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#deets" className="px-4">
                    Services
                  </Nav.Link>
                  <Nav.Link href="#deets" className="px-4">
                    About
                  </Nav.Link>
                  <NavDropdown title="Pages" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      About Us
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Our Services
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Contact Us
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#deets" className="px-4">
                    Testimonials
                  </Nav.Link>
                  <Button variant="success">Contact Support</Button>
                </Nav>
              </Navbar.Collapse>
              
            </Container>
            
          </Navbar>
          
 
        </div>
       
      
      </div>
      <SliderPart/>
      <Service/>
      <BusinessSolution/>
      <About/>
      <Form/>
      <TestiMonials/>
      <Footer/>
      <PagesAboutus/>
      <PagesContactus/>
      <PagesOurService/>
    </section>
  );
}

export default CollapsibleExample;
