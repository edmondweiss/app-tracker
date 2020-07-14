import React, { FC } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreateTicketModalControl from "../CreateTicketModal/CreateTicketModalControl";

// TODO: Fix alignment of icons in dropdown items.
export const Header: FC = () => (
  <Navbar bg="light" expand="lg" fixed="top">
    <Navbar.Brand href="#home">App Tracker</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown id="header-projects" title="Projects">
          <NavDropdown.Item>All projects</NavDropdown.Item>
          <NavDropdown.Item>
            Create project <FontAwesomeIcon icon="plus" />
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown id="header-dashboards" title="Dashboards">
          <NavDropdown.Item>View all dashboards</NavDropdown.Item>
          <NavDropdown.Item>
            Create dashboard <FontAwesomeIcon icon="plus" />
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown id="header-filters" title="Filters">
          <NavDropdown.Item>View all filters</NavDropdown.Item>
          <NavDropdown.Item>
            Create filter <FontAwesomeIcon icon="plus" />
          </NavDropdown.Item>
        </NavDropdown>
        <CreateTicketModalControl />
      </Nav>

      <Form inline>
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
      </Form>

      <NavDropdown
        title={<FontAwesomeIcon icon="user" />}
        id="header-user"
        alignRight
      >
        <NavDropdown.Item className="d-flex justify-content-between">
          Account settings <FontAwesomeIcon icon="cog" />
        </NavDropdown.Item>
        <NavDropdown.Item className="d-flex justify-content-between">
          Log out <FontAwesomeIcon icon="sign-out-alt" />
        </NavDropdown.Item>
      </NavDropdown>
    </Navbar.Collapse>
  </Navbar>
);
