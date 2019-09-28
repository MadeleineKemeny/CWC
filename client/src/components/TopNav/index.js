import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

class TopNav extends Component {
  state = {};
  render() {
    return (
      <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/wines">
              Browse Our Collection
            </Nav.Link>
            {/* <NavDropdown title="My Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Contact Details</NavDropdown.Item>
              <NavDropdown.Item href="#">Payment Information</NavDropdown.Item>
              <NavDropdown.Item href="#">My Purchases</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">My Reviews</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link as={Link} to="/producers">
              Our Producers
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              Blogs We Love
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <i className="fas fa-shopping-cart"> {this.props.cartItems.length} </i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNav;
