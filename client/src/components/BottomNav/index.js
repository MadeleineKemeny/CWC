import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

class BottomNav extends Component {
  state = {};
  render() {
    return (
      <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/terms">
              Terms & Conditions
            </Nav.Link>
            <Nav.Link as={Link} to="/faqs">
              FAQs
            </Nav.Link>
            <a href="https://cwc-admin.herokuapp.com/admin">
              <i className="fas fa-wine-glass fa-4x" id="adminPortal"></i>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default BottomNav;
