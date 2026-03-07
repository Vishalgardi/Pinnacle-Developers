import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-3 mt-auto border-top border-secondary">
            <Container>
                <Row className="gy-4 mb-4">
                    <Col lg={4} md={6}>
                        <h5 className="text-uppercase mb-3 text-white" style={{ letterSpacing: '2px', fontFamily: 'Cinzel', fontWeight: 600 }}>Pinnacle Developers</h5>
                        <p className="text-white opacity-50 pe-lg-4" style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                            We Build Futures. Delivering bespoke residential homes and commercial spaces that leave a profound and enduring impression on communities.
                        </p>
                        <div className="d-flex gap-3 mt-4">
                            <a href="#" className="text-light text-decoration-none border border-secondary d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', transition: 'background 0.3s' }}>
                                <FaFacebookF size={18} color="#1877F2" />
                            </a>
                            <a href="https://www.instagram.com/pinnacle_.developers?igsh=MTEyMm1kYzFkdWk5" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none border border-secondary d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', transition: 'background 0.3s' }}>
                                <FaInstagram size={18} style={{ fill: 'url(#ig-gradient)' }} />
                                <svg width="0" height="0">
                                    <radialGradient id="ig-gradient" r="150%" cx="30%" cy="107%">
                                        <stop stopColor="#fdf497" offset="0%" />
                                        <stop stopColor="#fdf497" offset="5%" />
                                        <stop stopColor="#fd5949" offset="45%" />
                                        <stop stopColor="#d6249f" offset="60%" />
                                        <stop stopColor="#285AEB" offset="90%" />
                                    </radialGradient>
                                </svg>
                            </a>
                            <a href="#" className="text-light text-decoration-none border border-secondary d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', transition: 'background 0.3s' }}>
                                <FaLinkedinIn size={18} color="#0A66C2" />
                            </a>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <h5 className="text-uppercase mb-4 text-white" style={{ letterSpacing: '1px', fontFamily: 'Montserrat', fontSize: '1rem' }}>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-3"><a href="/" className="text-decoration-none custom-footer-link" style={{ letterSpacing: '1px', fontSize: '0.9rem' }}>Home</a></li>
                            <li className="mb-3"><a href="/projects" className="text-decoration-none custom-footer-link" style={{ letterSpacing: '1px', fontSize: '0.9rem' }}>Projects</a></li>
                            <li className="mb-3"><a href="/about" className="text-decoration-none custom-footer-link" style={{ letterSpacing: '1px', fontSize: '0.9rem' }}>Value Added Services</a></li>
                            <li className="mb-3"><a href="/contact" className="text-decoration-none custom-footer-link" style={{ letterSpacing: '1px', fontSize: '0.9rem' }}>Contact Us</a></li>
                        </ul>
                    </Col>

                    <Col lg={4} md={12}>
                        <h5 className="text-uppercase mb-4 text-white" style={{ letterSpacing: '1px', fontFamily: 'Montserrat', fontSize: '1rem' }}>Get in Touch</h5>
                        <ul className="list-unstyled text-white opacity-75" style={{ fontSize: '0.9rem' }}>
                            <li className="mb-3 d-flex align-items-start">
                                <FaMapMarkerAlt className="mt-1 me-3 text-primary" size={18} />
                                <span>Pinnacle Developers HQ,<br />Baramati, Maharashtra, India.</span>
                            </li>
                            <li className="mb-3 d-flex align-items-center">
                                <FaPhoneAlt className="me-3 text-primary" size={16} />
                                <a href="tel:+912066664444" className="text-decoration-none custom-footer-link">+91 20 6666 4444</a>
                            </li>
                            <li className="mb-3 d-flex align-items-center">
                                <FaEnvelope className="me-3 text-primary" size={16} />
                                <a href="mailto:info@pinnacledevelopers.com" className="text-decoration-none custom-footer-link">info@pinnacledevelopers.com</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <hr className="border-secondary mb-4 opacity-25" />

                <Row>
                    <Col className="text-center">
                        <p className="text-white opacity-50 mb-0" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
                            &copy; {new Date().getFullYear()} PINNACLE DEVELOPERS. ALL RIGHTS RESERVED.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
