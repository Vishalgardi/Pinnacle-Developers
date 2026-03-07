import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('Submitting...');
        try {
            // In advanced implementation, this will hit the Spring Boot backend
            const response = await fetch('http://localhost:8080/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('Message sent successfully! We will get back to you soon.');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setSubmitStatus('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error("Error submitting form", error);
            // Temporary success for testing frontend before backend is up
            setSubmitStatus('Failed to connect to server. Please ensure backend is running.');
        }
    };

    return (
        <>
            <section className="bg-secondary text-white py-5 text-center mt-5 border-bottom border-dark">
                <Container>
                    <h1 className="display-4 mb-3 text-uppercase pt-4" style={{ letterSpacing: '2px' }}>Contact Us</h1>
                    <p className="lead text-white opacity-75 mx-auto mb-4" style={{ maxWidth: '800px', fontWeight: 300 }}>
                        Looking for bespoke spaces in Baramati? Let's build the future together. Reach out to us for project inquiries, collaborations, or just to say hello.
                    </p>
                </Container>
            </section>

            <section className="section-padding bg-dark text-white">
                <Container>
                    <Row className="gy-5">
                        <Col lg={5} className="pe-lg-5">
                            <div className="mb-5">
                                <h6 className="text-primary text-accent mb-3">G E T  I N  T O U C H</h6>
                                <h2 className="display-6 mb-4 text-white">We'd love to hear from you</h2>
                                <p className="text-white opacity-75 fs-6" style={{ lineHeight: '1.8', fontWeight: 300 }}>
                                    Our dedicated team is always ready to assist you. Every connection is built on trust, transparency, and a shared desire.
                                </p>
                            </div>

                            <div className="d-flex align-items-center mb-4 p-4 bg-secondary border border-dark">
                                <div className="bg-primary text-white d-flex align-items-center justify-content-center me-4" style={{ width: '60px', height: '60px' }}>
                                    <FaMapMarkerAlt size={24} />
                                </div>
                                <div>
                                    <h5 className="mb-1" style={{ fontFamily: 'Montserrat', fontWeight: 500 }}>Head Office</h5>
                                    <p className="text-white opacity-50 mb-0 small">Pinnacle Developers HQ, Baramati, Maharashtra, India.</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4 p-4 bg-secondary border border-dark">
                                <div className="bg-primary text-white d-flex align-items-center justify-content-center me-4" style={{ width: '60px', height: '60px' }}>
                                    <FaPhoneAlt size={24} />
                                </div>
                                <div>
                                    <h5 className="mb-1" style={{ fontFamily: 'Montserrat', fontWeight: 500 }}>Call Us</h5>
                                    <a href="tel:+912066664444" className="text-white opacity-50 text-decoration-none small">+91 20 6666 4444</a>
                                </div>
                            </div>

                            <div className="d-flex align-items-center p-4 bg-secondary border border-dark">
                                <div className="bg-primary text-white d-flex align-items-center justify-content-center me-4" style={{ width: '60px', height: '60px' }}>
                                    <FaEnvelope size={24} />
                                </div>
                                <div>
                                    <h5 className="mb-1" style={{ fontFamily: 'Montserrat', fontWeight: 500 }}>Email Us</h5>
                                    <a href="mailto:info@pinnacledevelopers.com" className="text-white opacity-50 text-decoration-none small">info@pinnacledevelopers.com</a>
                                </div>
                            </div>
                        </Col>

                        <Col lg={7}>
                            <div className="bg-secondary p-5 border border-dark">
                                <h3 className="mb-4 text-white" style={{ fontFamily: 'Montserrat', fontWeight: 400 }}>Send us a message</h3>
                                <Form onSubmit={handleSubmit}>
                                    <Row className="g-4">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label className="text-accent text-white opacity-75">YOUR NAME</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="John Doe"
                                                    className="py-3 bg-dark border-0 text-white shadow-none rounded-0"
                                                    style={{ color: 'white' }}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label className="text-accent text-white opacity-75">EMAIL ADDRESS</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="john@example.com"
                                                    className="py-3 bg-dark border-0 text-white shadow-none rounded-0"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group>
                                                <Form.Label className="text-accent text-white opacity-75">PHONE NUMBER</Form.Label>
                                                <Form.Control
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="+91 98765 43210"
                                                    className="py-3 bg-dark border-0 text-white shadow-none rounded-0"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group>
                                                <Form.Label className="text-accent text-white opacity-75">YOUR MESSAGE</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={5}
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="Tell us about what you're looking for..."
                                                    className="py-3 bg-dark border-0 text-white shadow-none rounded-0"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Button variant="primary" type="submit" size="lg" className="w-100 py-3 rounded-0" style={{ letterSpacing: '2px', fontSize: '0.9rem' }}>
                                                <FaPaperPlane className="me-2" /> SEND MESSAGE
                                            </Button>
                                            {submitStatus && (
                                                <div className={`mt-3 text-center fw-semibold ${submitStatus.includes('successfully') ? 'text-success' : 'text-danger'}`}>
                                                    {submitStatus}
                                                </div>
                                            )}
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Contact;
