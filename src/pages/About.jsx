import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUserTie, FaTools, FaBuilding, FaHandshake } from 'react-icons/fa';

const About = () => {
    return (
        <>
            <section className="bg-secondary text-white py-5 text-center mt-5 border-bottom border-dark">
                <Container>
                    <h1 className="display-4 mb-3 text-uppercase pt-4" style={{ letterSpacing: '2px' }}>Value Added Services</h1>
                    <p className="lead text-white opacity-75 mx-auto mb-4" style={{ maxWidth: '800px', fontWeight: 300 }}>
                        At Pinnacle Developers, we go beyond traditional offerings to provide a holistic and personalized real estate journey.
                    </p>
                </Container>
            </section>

            <section className="section-padding bg-dark text-white">
                <Container>
                    <Row className="align-items-center gx-5 mb-5 pb-5">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100" alt="Team Meeting" className="img-fluid border border-secondary" style={{ borderRadius: '0' }} />
                        </Col>
                        <Col lg={6}>
                            <h6 className="text-primary text-accent mb-3">O U R  P H I L O S O P H Y</h6>
                            <h2 className="display-6 mb-4 text-white">Elevating Your Real Estate Experience</h2>
                            <p className="text-white opacity-75 fs-6 mb-4" style={{ lineHeight: '1.8', fontWeight: 300 }}>
                                We understand that the process of leasing, purchasing, and investing in real estate involves more than simply acquiring a property; it entails various aspects that can enhance the overall value of your transaction.
                            </p>
                            <p className="text-white opacity-75" style={{ lineHeight: '1.8', fontWeight: 300 }}>
                                To ensure a holistic approach, we provide an extensive range of supplementary services carefully crafted to address your specific needs in Baramati.
                            </p>
                        </Col>
                    </Row>

                    <div className="text-center mb-5 pt-5 border-top border-secondary">
                        <h6 className="text-primary text-accent mb-3">C O M P R E H E N S I V E  S O L U T I O N S</h6>
                        <h2 className="display-5 mb-3 text-white">Our Services</h2>
                        <div className="mx-auto bg-primary mb-5" style={{ width: '40px', height: '2px' }}></div>
                    </div>

                    <Row className="g-4">
                        <Col md={6} lg={3}>
                            <Card className="h-100 hover-card text-center p-4">
                                <div className="text-primary mb-4 d-inline-block mx-auto bg-secondary p-4" style={{ width: '80px', height: '80px' }}>
                                    <FaUserTie size={30} />
                                </div>
                                <h4 className="mb-3 fs-5" style={{ fontFamily: 'Montserrat', fontWeight: 500, letterSpacing: '1px' }}>Development Management</h4>
                                <p className="text-white opacity-50 mb-0 small" style={{ lineHeight: '1.6' }}>Upholding a standard of excellence, staffed by dedicated professionals with extensive real estate expertise.</p>
                            </Card>
                        </Col>

                        <Col md={6} lg={3}>
                            <Card className="h-100 hover-card text-center p-4">
                                <div className="text-primary mb-4 d-inline-block mx-auto bg-secondary p-4" style={{ width: '80px', height: '80px', borderRadius: '0' }}>
                                    <FaHandshake size={30} />
                                </div>
                                <h4 className="mb-3 fs-5" style={{ fontFamily: 'Montserrat', fontWeight: 500, letterSpacing: '1px' }}>Leasing & Resale</h4>
                                <p className="text-white opacity-50 mb-0 small" style={{ lineHeight: '1.6' }}>Accurately determining market value to provide valuable benefits for a successful transaction.</p>
                            </Card>
                        </Col>

                        <Col md={6} lg={3}>
                            <Card className="h-100 hover-card text-center p-4">
                                <div className="text-primary mb-4 d-inline-block mx-auto bg-secondary p-4" style={{ width: '80px', height: '80px', borderRadius: '0' }}>
                                    <FaTools size={30} />
                                </div>
                                <h4 className="mb-3 fs-5" style={{ fontFamily: 'Montserrat', fontWeight: 500, letterSpacing: '1px' }}>Interiors & Remodeling</h4>
                                <p className="text-white opacity-50 mb-0 small" style={{ lineHeight: '1.6' }}>Coordinating trades and schedules flawlessly to ensure business operations run without disruption.</p>
                            </Card>
                        </Col>

                        <Col md={6} lg={3}>
                            <Card className="h-100 hover-card text-center p-4">
                                <div className="text-primary mb-4 d-inline-block mx-auto bg-secondary p-4" style={{ width: '80px', height: '80px', borderRadius: '0' }}>
                                    <FaBuilding size={30} />
                                </div>
                                <h4 className="mb-3 fs-5" style={{ fontFamily: 'Montserrat', fontWeight: 500, letterSpacing: '1px' }}>Facility Management</h4>
                                <p className="text-white opacity-50 mb-0 small" style={{ lineHeight: '1.6' }}>Assisting tenants and investors in attaining operational goals to enhance productivity and profitability.</p>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    );
};

export default About;
