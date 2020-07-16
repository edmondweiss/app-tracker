import React, { FC } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TicketCreateControl from "../ticket/ticket-create-control";
import Dropdown from "react-bootstrap/esm/Dropdown";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { DropdownToggleProps } from "react-bootstrap/DropdownToggle";
import { Link, useRouteMatch } from "react-router-dom";

const IconToggle = React.forwardRef<DropdownToggle, DropdownToggleProps>(
  ({ className, onClick, children }, ref) => {
    return (
      <div
        className={className}
        onClick={onClick}
        // TODO: Figure out why ref is incompatible with div ref.
        ref={(ref as unknown) as string}
      >
        {children}
      </div>
    );
  }
);

// TODO: Fix alignment of icons in dropdown items.
export const Header: FC = () => {
  const match = useRouteMatch();
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        <Link to="/">App Tracker</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown id="header-projects" title="Projects">
            <NavDropdown.Item>
              <Link to="/projects">All projects</Link>
            </NavDropdown.Item>
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
          <TicketCreateControl />
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
        </Form>
        <Dropdown alignRight>
          <Dropdown.Toggle as={IconToggle} id="header-user">
            <FontAwesomeIcon icon="user" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="1" as={NavDropdown.Item}>
              Account settings <FontAwesomeIcon icon="cog" />
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" as={NavDropdown.Item}>
              Log out <FontAwesomeIcon icon="sign-out-alt" />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};
