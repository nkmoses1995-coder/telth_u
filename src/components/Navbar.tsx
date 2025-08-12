import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa'; // User icon
import logo from '../assest/logobg.png';

const CustomNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [show, setShow] = useState(false);

  const handleMouseEnter = () => setShow(true);
  const hanldeMouseLeave = () => setShow(false)

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
      variant="dark"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Medpass"
            width={50}
            className="img-fluid hero-image"
          />
          <span className="text-primary-blue ms-2">Medpass</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Center/Right Menu */}
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              as={Link}
              to="/"
              className={`contact-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`contact-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/program"
              className={`contact-link ${location.pathname === '/program' ? 'active' : ''}`}
            >
              Program Details
            </Nav.Link>
            {/* <Nav.Link
              as={Link}
              to="/apply"
              className={`contact-link ${location.pathname === '/apply' ? 'active' : ''}`}
            >
              Apply Now
            </Nav.Link> */}
            <Nav.Link
              as={Link}
              to="/contact"
              className={`contact-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Nav.Link>
            <NavDropdown
              title={<FaUserCircle size={30}/>}
              id="user-dropdown"
              // className="navbar-user-icon"
              align="end"
              show={show}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={hanldeMouseLeave}
            >
              <NavDropdown.Item as={Link} to="/login">
                Sign In
              </NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="/register">
                Register
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
