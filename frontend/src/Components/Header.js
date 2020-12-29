import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

export const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" collapseOnSelect>
        <Container>
          {" "}
          <Navbar.Brand href="#home">MyShop</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/Cart">Cart</Nav.Link>
            <Nav.Link href="/login">Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
