import axios from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaPhoneAlt } from "react-icons/fa";

const NavBar = () => {

  const [contect, setContect] = useState("");

  const BaseUrl = import.meta.env.VITE_API_BASEURL;

  const contectDetail = async () => {
    try {
      const res = await axios.get(
        `${BaseUrl}ContactDetails/viewContactDetails`
      );
      setContect(res.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    contectDetail();
  }, []);

  console.log(contect,"data")



  return (
    <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
      <Navbar
        style={{ backgroundColor: "white", color: "red" }}
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="/">
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
                  <NavDropdown.Item href="/support-faq">
                    Support FAQ
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/support-downloads">
                    Downloads
                  </NavDropdown.Item>
             
                </NavDropdown>
                
                <NavDropdown
                  title="About"
                  id="collapsible-nav-dropdown"
                  className="custom-dropdown-title"
                >
                  <NavDropdown.Item href="/about/clinical-advisors">
                  OasisNotes
                  </NavDropdown.Item>
                  {/* href="/about/partners" */}
                  <NavDropdown.Item >
                    Partners comming soon
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  style={{ color: "#1A9FB2", fontWeight: "600" }}
                  href="/resources"
                >
                  Resources
                </Nav.Link>
                <Nav.Link
                  style={{ color: "#1A9FB2", fontWeight: "600" }}
                  href="/pricing"
                >
                  Pricing
                </Nav.Link>
                <Nav.Link
                  style={{ color: "#1A9FB2", fontWeight: "600" }}
                  href="/contact-us"
                >
                  Contact
                </Nav.Link>

                <NavDropdown
                  title="Login"
                  id="collapsible-nav-dropdown"
                  className="custom-dropdown-title"
                >
                  
                  <NavDropdown.Item target="_blank" href="https://issa-patient-panel.vercel.app/" >
                    Patient Panel
                  </NavDropdown.Item>
                  <NavDropdown.Item target="_blank" href="https://issa-employee-panel.vercel.app/">
                    Employee Panel
                  </NavDropdown.Item>
                  <NavDropdown.Item target="_blank" href="https://issa-admin-api-ravindra.vercel.app/">
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
                  href="/demo-request"
                >
                  Request Demo
                </Nav.Link>
                <Nav.Link
                
                >
                  <FaPhoneAlt /> 
                  {contect?.supportText}
                </Nav.Link>

              </Nav>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};


export default NavBar;