import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBuilding, FaHandshake, FaLeaf } from 'react-icons/fa';
import Img4989 from '../assets/IMG_4989.PNG';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section
                className="position-relative d-flex align-items-center justify-content-center"
                style={{
                    minHeight: '100vh',
                    background: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100') center/cover no-repeat`
                }}
            >
                <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>

                <Container className="position-relative text-center text-white z-index-1">
                    <h1 className="display-2 fw-bold mb-4" style={{ letterSpacing: '4px' }}>We Build Futures</h1>
                    <p className="lead mb-5 mx-auto" style={{ maxWidth: '800px', fontSize: '1.1rem', letterSpacing: '1px', fontWeight: 300 }}>
                        Pinnacle Developers is dedicated to being more than mere constructors. We craft spaces in Baramati that surpass physical structures and leave an enduring impression.
                    </p>
                    <div className="d-flex justify-content-center gap-4">
                        <Button as={Link} to="/projects" variant="primary" size="lg" className="px-5 py-3">
                            Explore Projects
                        </Button>
                    </div>
                </Container>
            </section>

            {/* Introduction Snippet */}
            <section className="section-padding bg-secondary text-white">
                <Container>
                    <Row className="align-items-center gx-5">
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <div className="position-relative">
                                <img
                                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100"
                                    alt="Modern Architecture"
                                    className="img-fluid border border-dark"
                                />
                                <div className="position-absolute bottom-0 start-0 bg-primary text-white p-4 shadow" style={{ transform: 'translateY(20px) translateX(-20px)' }}>
                                    <h3 className="fw-bold mb-0" style={{ fontFamily: 'Montserrat' }}>20+ Years</h3>
                                    <p className="mb-0 text-accent">OF EXCELLENCE</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} className="offset-lg-1">
                            <h6 className="text-primary text-accent mb-3">P I N N A C L E  D E V E L O P E R S</h6>
                            <h2 className="display-5 mb-4 text-white">Environmental Care</h2>
                            <p className="text-white mb-5 fs-6" style={{ lineHeight: '1.8', fontWeight: 300 }}>
                                "Our construction practice is firmly committed to the ideals of energy efficient, environmentally responsible design practices and construction. Our reputation for sustainable architecture extends over decades and forms an integral part of our approach to projects. Wherever possible, we work with and follow IGBC guidelines to provide our clients with a design approach that can address each project’s sustainable design needs".
                            </p>
                            <Button as={Link} to="/about" variant="outline-light" className="px-5 py-3 rounded-0" style={{ letterSpacing: '2px', fontSize: '0.85rem' }}>READ MORE</Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Featured Projects Summary */}
            <section className="section-padding bg-dark text-white">
                <Container>
                    <div className="text-center mb-5 pb-4">
                        <h6 className="text-primary text-accent mb-3">O U R  P O R T F O L I O</h6>
                        <h2 className="display-5 mb-3 text-white">Featured Projects</h2>
                        <div className="mx-auto bg-primary" style={{ width: '40px', height: '2px' }}></div>
                    </div>

                    <Row className="g-5">
                        <Col md={6} lg={4}>
                            <Card className="h-100 project-card overflow-hidden">
                                <div className="project-img-wrapper">
                                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100" style={{ height: '350px', objectFit: 'cover', borderRadius: '0' }} />
                                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75  opacity-0 hover-overlay p-4 text-center" style={{ transition: '0.5s', opacity: 0 }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0}>
                                        <div>
                                            <h4 className="text-white mb-3" style={{ letterSpacing: '1px' }}>Pinnacle Summit</h4>
                                            <Button as={Link} to="/projects" variant="primary">KNOW MORE</Button>
                                        </div>
                                    </div>
                                </div>
                                <Card.Body className="p-4 bg-secondary">
                                    <div className="text-primary text-accent mb-2">BESPOKE RESIDENTIAL</div>
                                    <Card.Title className="fs-5 mb-0 text-white" style={{ fontFamily: 'Montserrat', fontWeight: 300 }}>Baramati</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} lg={4}>
                            <Card className="h-100 project-card overflow-hidden">
                                <div className="project-img-wrapper">
                                    <Card.Img variant="top" src={Img4989} style={{ height: '350px', objectFit: 'cover', borderRadius: '0' }} />
                                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75  opacity-0 hover-overlay p-4 text-center" style={{ transition: '0.5s', opacity: 0 }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0}>
                                        <div>
                                            <h4 className="text-white mb-3" style={{ letterSpacing: '1px' }}>Pinnacle KrushnaKunj</h4>
                                            <Button as={Link} to="/projects" variant="primary">KNOW MORE</Button>
                                        </div>
                                    </div>
                                </div>
                                <Card.Body className="p-4 bg-secondary">
                                    <div className="text-primary text-accent mb-2">RESIDENTIAL</div>
                                    <Card.Title className="fs-5 mb-0 text-white" style={{ fontFamily: 'Montserrat', fontWeight: 300 }}>Baramati Jalochi</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} lg={4}>
                            <Card className="h-100 project-card overflow-hidden">
                                <div className="project-img-wrapper">
                                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100" style={{ height: '350px', objectFit: 'cover', borderRadius: '0' }} />
                                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75  opacity-0 hover-overlay p-4 text-center" style={{ transition: '0.5s', opacity: 0 }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0}>
                                        <div>
                                            <h4 className="text-white mb-3" style={{ letterSpacing: '1px' }}>Pinnacle Oasis</h4>
                                            <Button as={Link} to="/projects" variant="primary">KNOW MORE</Button>
                                        </div>
                                    </div>
                                </div>
                                <Card.Body className="p-4 bg-secondary">
                                    <div className="text-primary text-accent mb-2">PREMIUM VILLAS</div>
                                    <Card.Title className="fs-5 mb-0 text-white" style={{ fontFamily: 'Montserrat', fontWeight: 300 }}>Baramati Outskirts</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <div className="text-center mt-5 pt-4">
                        <Button as={Link} to="/projects" variant="outline-light" className="px-5 py-3">VIEW ALL</Button>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Home;
