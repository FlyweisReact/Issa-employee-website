import axios from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [contect, setContect] = useState(null); // Initialize contect as null initially

  useEffect(() => {
    const BaseUrl = import.meta.env.VITE_API_BASEURL;

    const fetchContect = async () => {
      try {
        const res = await axios.get(`${BaseUrl}ContactDetails/viewContactDetails`);
        setContect(res.data?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchContect();
  }, []);

  return (
    <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
      <Navbar
        style={{ backgroundColor: "white", color: "red" }}
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="/logo.png"
              alt="logo"
              style={{ height: "50px", maxWidth: "145px", width: "auto" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav className="me-auto">
                <NavDropdown
                  title="Support"
                  id="collapsible-nav-dropdown"
                  className="custom-dropdown-title"
                >
                  <NavDropdown.Item as={Link} to="/support-faq">
                    Support FAQ
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/support-downloads">
                    Downloads
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="About"
                  id="collapsible-nav-dropdown"
                  className="custom-dropdown-title"
                >
                  <NavDropdown.Item as={Link} to="/about/clinical-advisors">
                    OasisNotes
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Partners coming soon
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  style={{ color: "#1A9FB2", fontWeight: "600" }}
                  as={Link}
                  to="/resources"
                >
                  Resources
                </Nav.Link>
                <Nav.Link
                  style={{ color: "#1A9FB2", fontWeight: "600" }}
                  as={Link}
                  to="/pricing"
                >
                  Pricing
                </Nav.Link>
                <Nav.Link
                  style={{ color: "#1A9FB2", fontWeight: "600" }}
                  as={Link}
                  to="/contact-us"
                >
                  Contact
                </Nav.Link>
                <NavDropdown
                  title="Login"
                  id="collapsible-nav-dropdown"
                  className="custom-dropdown-title"
                >
                  <NavDropdown.Item
                    target="_blank"
                    href="https://resident.oasisnotes.com/"
                  >
                    Patient Panel
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    href="https://employee.oasisnotes.com/"
                  >
                    Employee Panel
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    href="https://admin.oasisnotes.com/"
                  >
                    Admin Panel
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  style={{
                    color: "white",
                    fontWeight: "500",
                    backgroundColor: "#1C5877",
                    borderRadius: "50px",
                    padding: "0.5rem 1.5rem",
                    textAlign: "center",
                  }}
                  as={Link}
                  to="/demo-request"
                >
                  Request Demo
                </Nav.Link>
                {contect && (
                  <Nav.Link>
                    <FaPhoneAlt /> {contect?.supportText}
                  </Nav.Link>
                )}
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
