import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [fullScreenImage, setFullScreenImage] = useState(null);

    const handleClose = () => setShowModal(false);
    const handleShow = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const projects = [
        { id: 1, title: 'Pinnacle Summit', category: 'residential', location: 'Baramati Central', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100', status: 'Coming Soon' },
        {
            id: 2,
            title: 'Pinnacle KrushnaKunj',
            category: 'residential',
            location: 'Jalochi',
            img: '/src/assets/IMG_4989.PNG ',
            gallery: ['/src/assets/IMG_4987.PNG '],
            status: 'ON-Going',
            price: 'On Request',
            configuration: '2BHK',
            amenities: ['Playing Area', 'Garden', 'Parking', 'Security']
        },
        { id: 3, title: 'Pinnacle Oasis', category: 'residential', location: 'Baramati Outskirts', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100', status: 'Coming Soon' },
        { id: 4, title: 'Pinnacle Westview', category: 'residential', location: 'Pune Road, Baramati', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100', status: 'Coming Soon' },
        { id: 5, title: 'Pinnacle Corporate', category: 'commercial', location: 'Baramati MIDC', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100', status: 'Coming Soon' },
        { id: 6, title: 'Pinnacle Landmark', category: 'residential', location: 'Baramati', img: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100', status: 'Coming Soon' },
    ];

    const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab);

    return (
        <>
            <section className="bg-secondary text-white py-5 text-center mt-5 border-bottom border-dark">
                <Container>
                    <h1 className="display-4 mb-3 text-uppercase pt-4" style={{ letterSpacing: '2px' }}>Our Projects</h1>
                    <p className="lead text-white opacity-75 mx-auto mb-4" style={{ maxWidth: '700px', fontWeight: 300 }}>
                        Explore our diverse portfolio of bespoke residential homes and commercial spaces in Baramati.
                    </p>
                </Container>
            </section>

            <section className="section-padding bg-dark">
                <Container>
                    <Nav variant="pills" className="justify-content-center mb-5 gap-3">
                        <Nav.Item>
                            <Nav.Link
                                className={`rounded-0 px-4 fw-semibold ${activeTab === 'all' ? 'bg-primary text-white' : 'text-white bg-secondary border border-dark'}`}
                                style={{ cursor: 'pointer', letterSpacing: '1px', fontSize: '0.85rem' }}
                                onClick={() => setActiveTab('all')}
                            >
                                ALL PROJECTS
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                className={`rounded-0 px-4 fw-semibold ${activeTab === 'residential' ? 'bg-primary text-white' : 'text-white bg-secondary border border-dark'}`}
                                style={{ cursor: 'pointer', letterSpacing: '1px', fontSize: '0.85rem' }}
                                onClick={() => setActiveTab('residential')}
                            >
                                BESPOKE RESIDENTIAL
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                className={`rounded-0 px-4 fw-semibold ${activeTab === 'commercial' ? 'bg-primary text-white' : 'text-white bg-secondary border border-dark'}`}
                                style={{ cursor: 'pointer', letterSpacing: '1px', fontSize: '0.85rem' }}
                                onClick={() => setActiveTab('commercial')}
                            >
                                COMMERCIAL
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Row className="g-5">
                        {filteredProjects.map((project) => (
                            <Col md={6} lg={4} key={project.id}>
                                <Card className="h-100 project-card overflow-hidden">
                                    <div className="project-img-wrapper position-relative" style={{ cursor: 'pointer' }} onClick={() => handleShow(project)}>
                                        <Card.Img variant="top" src={project.img} style={{ height: '350px', objectFit: 'cover', borderRadius: '0' }} />
                                        <div className="position-absolute top-0 end-0 m-3 z-index-1">
                                            <span className="badge bg-primary text-white px-3 py-2 text-uppercase rounded-0" style={{ letterSpacing: '1px' }}>{project.status}</span>
                                        </div>
                                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75 opacity-0 hover-overlay p-4 text-center" style={{ transition: '0.5s', opacity: 0 }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0}>
                                            <div>
                                                <h4 className="text-white mb-3" style={{ letterSpacing: '1px' }}>{project.title}</h4>
                                                <Button variant="outline-light" className="me-2" onClick={(e) => { e.stopPropagation(); handleShow(project); }}>VIEW DETAILS</Button>
                                                <Button as={Link} to="/contact" variant="primary" onClick={e => e.stopPropagation()}>ENQUIRE NOW</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <Card.Body className="p-4 bg-secondary">
                                        <div className="text-primary text-accent mb-2">{project.category === 'residential' ? 'BESPOKE RESIDENTIAL' : 'COMMERCIAL'}</div>
                                        <Card.Title className="fs-5 mb-2 text-white" style={{ fontFamily: 'Montserrat', fontWeight: 300 }}>{project.title}</Card.Title>
                                        <Card.Text className="text-white opacity-50 d-flex align-items-center small" style={{ letterSpacing: '1px' }}>
                                            <i className="bi bi-geo-alt-fill me-2"></i> {project.location}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Project Details Modal */}
            <Modal show={showModal} onHide={handleClose} size="lg" centered>
                {selectedProject && (
                    <>
                        <Modal.Header closeButton className="bg-dark text-white border-dark">
                            <Modal.Title style={{ letterSpacing: '1px' }}>{selectedProject.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="p-0 bg-secondary">
                            <img src={selectedProject.img} alt={selectedProject.title} className="w-100" style={{ height: '400px', objectFit: 'cover', cursor: 'pointer' }} onClick={() => setFullScreenImage(selectedProject.img)} />
                            <div className="p-4 text-white">
                                <Row className="g-4">
                                    <Col md={8}>
                                        <h4 className="text-primary mb-3">Project Overview</h4>
                                        <p className="opacity-75 mb-4" style={{ lineHeight: '1.8' }}>
                                            Experience luxury living at {selectedProject.title}, located in the prime area of {selectedProject.location}.
                                            {selectedProject.category === 'residential' ? ' Designed to offer bespoke residential homes with modern amenities and a vibrant community.' : ' Designed for modern commercial spaces.'}
                                        </p>

                                        {selectedProject.amenities && (
                                            <>
                                                <h5 className="text-white mb-3 pt-2">Amenities</h5>
                                                <ul className="list-unstyled opacity-75 d-flex flex-wrap gap-3 mb-4">
                                                    {selectedProject.amenities.map((amenity, idx) => (
                                                        <li key={idx} className="bg-dark px-3 py-2 rounded"><i className="bi bi-check2-circle text-primary me-2"></i> {amenity}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}

                                        {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                                            <>
                                                <h5 className="text-white mb-3 pt-2">Gallery</h5>
                                                <Row className="g-3">
                                                    {selectedProject.gallery.map((galleryImg, idx) => (
                                                        <Col sm={6} key={idx}>
                                                            <img
                                                                src={galleryImg}
                                                                alt={`${selectedProject.title} Gallery ${idx + 1}`}
                                                                className="w-100 rounded"
                                                                style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
                                                                onClick={() => setFullScreenImage(galleryImg)}
                                                            />
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </>
                                        )}
                                    </Col>
                                    <Col md={4}>
                                        <div className="bg-dark p-4 rounded h-100">
                                            <h5 className="text-white mb-4 border-bottom border-secondary pb-2">Key Details</h5>
                                            <ul className="list-unstyled opacity-75 mb-0">
                                                <li className="mb-3">
                                                    <i className="bi bi-geo-alt text-primary me-2"></i> <strong>Location:</strong><br />
                                                    <span className="ms-4 text-white">{selectedProject.location}</span>
                                                </li>
                                                <li className="mb-3">
                                                    <i className="bi bi-building text-primary me-2"></i> <strong>Status:</strong><br />
                                                    <span className="ms-4 text-white">{selectedProject.status}</span>
                                                </li>
                                                {selectedProject.price && (
                                                    <li className="mb-3">
                                                        <i className="bi bi-tag text-primary me-2"></i> <strong>Price:</strong><br />
                                                        <span className="ms-4 text-white">{selectedProject.price}</span>
                                                    </li>
                                                )}
                                                {selectedProject.configuration && (
                                                    <li className="mb-3">
                                                        <i className="bi bi-house text-primary me-2"></i> <strong>Configuration:</strong><br />
                                                        <span className="ms-4 text-white">{selectedProject.configuration}</span>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Modal.Body>
                        <Modal.Footer className="bg-dark border-dark">
                            <Button variant="outline-light" onClick={handleClose}>
                                Close
                            </Button>
                            <Button as={Link} to="/contact" variant="primary" onClick={handleClose}>
                                Enquire Now
                            </Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>

            {/* Full Screen Image Modal */}
            <Modal show={!!fullScreenImage} onHide={() => setFullScreenImage(null)} size="xl" centered contentClassName="bg-transparent border-0" backdropClassName="bg-dark opacity-100">
                <Modal.Body className="p-0 text-center position-relative d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                    <Button
                        variant="light"
                        onClick={() => setFullScreenImage(null)}
                        className="position-absolute top-0 end-0 m-2 rounded-circle d-flex align-items-center justify-content-center p-0"
                        style={{ width: '40px', height: '40px', zIndex: 1050, opacity: 0.8 }}
                    >
                        <i className="bi bi-x-lg text-dark"></i>
                    </Button>
                    {fullScreenImage && <img src={fullScreenImage} alt="Full Screen" className="img-fluid rounded shadow" style={{ maxHeight: '90vh', objectFit: 'contain' }} />}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Projects;
