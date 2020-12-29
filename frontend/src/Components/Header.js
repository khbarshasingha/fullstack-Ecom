import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" collapseOnSelect>
        <Container>
          {" "}
          <LinkContainer to="/">
            <Navbar.Brand>MyShop</Navbar.Brand>
          </LinkContainer>
          <Nav className="ml-auto">
            <Nav.Link href="/Cart">Cart</Nav.Link>
            <Nav.Link href="/login">Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
