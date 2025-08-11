import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { GraduationCap } from 'lucide-react';
import logo from '../assest/logobg.png'

const CustomNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          {/* <GraduationCap size={32} className="me-2" /> */}
          <img
            src={logo}
            alt="Telth UK Program"
            width={50}
            className="img-fluid hero-image"
          />
          <span className='text-primary-blue'> Telth UK Program</span>
          
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
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
            <Nav.Link
              as={Link}
              to="/apply"
              className={`contact-link ${location.pathname === '/apply' ? 'active' : ''}`}
            >
              Apply Now
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`contact-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;