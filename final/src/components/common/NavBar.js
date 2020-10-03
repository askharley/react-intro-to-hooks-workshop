import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="info" expand="sm">
      <Navbar.Brand>Nintendo Power</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/create" className="text-dark mr-3">
            Create
          </Link>
          <Link to="/profile" className="text-dark mr-3">
            Profile
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
