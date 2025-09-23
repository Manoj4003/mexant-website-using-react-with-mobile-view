import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <section>
      <div className="menu-bar">
        <div className="menu-list">
          <Navbar collapseOnSelect expand="lg">
            <Container>
              <img src={logo} alt="Logo" />
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav className="nav-items">
                  <Nav.Link href="/" className="px-4">
                    Home
                  </Nav.Link>
                  <Nav.Link href="/services" className="px-4">
                    Services
                  </Nav.Link>
                  <Nav.Link href="/about" className="px-4">
                    About
                  </Nav.Link>
                  <NavDropdown title="Pages" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="/pagesaboutus">
                      About Us
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/pageourservice">
                      Our Services
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/pagescontactus">
                      Contact Us
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/testnominals" className="px-4">
                    Testimonials
                  </Nav.Link>

                  <Nav.Item className="d-flex align-items-center px-3">
                    <Button href="/form" variant="success">
                      Contact Support
                    </Button>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </section>
  );
}

export default Header;
