import React from 'react'
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo2 from '../assets/image/logo2.png'
import line from '../assets/image/line.png'
const Footer = () => {
    return (
        <>
            <footer className='footerSection'>
                <div className="footerContent p-5">
                    <Row>
                        <Col lg={6} md={12} sm={12} xs={12} className='my-auto'>
                            <Link>
                                <img src={logo2} alt="img" width={400} />
                            </Link>
                        </Col>
                        <Col lg={6} md={12} sm={12} xs={12} className='pb-5'>
                            <Row>
                                <Col lg={6} md={12} sm={12} xs={12} className='mt-5'>
                                    <div className="d-flex justify-content-start" >
                                        <hr className='text-white' width={50} />
                                        <h5 className='my-auto text-white'>Home</h5>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} sm={12} xs={12} className='mt-5'>
                                    <div className="d-flex justify-content-start">
                                        <hr className='text-white' width={50} />
                                        <h5 className='my-auto text-white text-capitalize'>privacy policy</h5>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} md={12} sm={12} xs={12} className='mt-5'>
                                    <div className="d-flex justify-content-start">
                                        <hr className='text-white' width={50} />
                                        <h5 className='my-auto text-white text-capitalize'>contact us</h5>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} sm={12} xs={12} className='mt-5'>
                                    <div className="d-flex justify-content-start">
                                        <hr className='text-white' width={50} />
                                        <h5 className='my-auto text-white text-capitaize'>our mission</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </footer>
        </>
    )
}

export default Footer