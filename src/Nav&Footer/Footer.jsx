import React from 'react'
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo2 from '../assets/image/logo2.png'
import line from '../assets/image/line.png'
const Footer = () => {
    return (
        <>
            <footer className='footerSection mt-5'>
                <div className="footerContent p-5">
                    <Row className='footerMainRow'>
                        <Col lg={5} md={12} sm={12} xs={12} className='my-auto footerMainRow'>
                            <Link>
                                <img src={logo2} alt="img" width={400} />
                            </Link>
                        </Col>
                        <Col lg={6} md={12} sm={12} xs={12} className='pb-5 footerMainRow'>
                            <Row className='footerMainRow'>
                                <Col lg={6} md={12} sm={12} xs={12} className='mt-5'>
                                    <div className="d-flex justify-content-start" >
                                        <hr className='text-white ms-0' width={50} />
                                        <h5 className='my-auto text-white'>Home</h5>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} sm={12} xs={12} className='mt-5'>
                                    <div className="d-flex justify-content-start">
                                        <hr className='text-white ms-0' width={50} />
                                        <h5 className='my-auto text-white text-capitalize'>privacy policy</h5>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='footerMainRow'>
                                <Col lg={6} md={12} sm={12} xs={12} className='mt-5'>
                                    <div className="d-flex justify-content-start">
                                        <hr className='text-white ms-0' width={50} />
                                        <h5 className='my-auto text-white text-capitalize'>contact us</h5>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} sm={12} xs={12} className='mt-5'>
                                    <div className="d-flex justify-content-start">
                                        <hr className='text-white ms-0' width={50} />
                                        <h5 className='my-auto text-white text-capitaize'>our mission</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <p className='text-capitalize text-white text-center mb-0 mt-3'>&copy; all rights are reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer