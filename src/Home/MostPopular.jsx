import React from 'react'

import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLocationArrow } from "react-icons/fa6";

const cards = [
    {
        name: 'Region European size Plate',
        selling: 'best seller',
        pirce: '45.0$',
        imageUrl: '../Imagescards/card1.png',
        link: '/hheu19'
    },
    {
        name: 'Color European size plate',
        selling: 'best seller',
        pirce: '45.0$',
        imageUrl: '../Imagescards/card2.png',
        link: '/europlatz'
    },
    {
        name: 'Color European size plate',
        selling: 'best seller',
        pirce: '45.0$',
        imageUrl: '../Imagescards/card3.png',
        link: '/slk55'
    },
    {
        name: 'Color European size plate',
        selling: 'best seller',
        pirce: '45.0$',
        imageUrl: '../Imagescards/card4.png',
        link: '/kao4hh'
    },
    {
        name: 'Region European size Plate',
        selling: 'best seller',
        pirce: '45.0$',
        imageUrl: '../Imagescards/card5.png',
        link: '/bdo9325'
    },
    {
        name: 'Region European size Plate',
        selling: 'best seller',
        pirce: '45.0$',
        imageUrl: '../Imagescards/card6.png',
        link: '/gutentag'
    }
];
const MostPopular = () => {
    const scrollUp = () => {
        window.scroll(0, 0);
    };
    return (
        <>
            <section className='mostPopularContent mt-5'>
                <Container>
                    <div className="mostPopularUp mb-4">
                        <h2 className='text-capitalize text-center'>most popular</h2>
                    </div>
                    <div className="mostPopularDown">
                        <Row>

                            {
                                cards.map((item, index) => (
                                    <Col lg={4} md={6} sm={12} xs={12} className='mb-3'>

                                        <Card className='cardMostPopular ' key={index}>
                                            <div className="imageClass d-flex flex-column justify-content-center align-items-center">
                                                <div className="imageContainer ">
                                                    <Card.Img variant="top" src={item.imageUrl} className='cardimage ' />
                                                </div>
                                            </div>
                                            <Link to={item.link} className='nav-link' onClick={scrollUp}>
                                                <Card.Body className='cardBody'>
                                                    
                                                    <div className="cardTextContainer">
                                                        <div className="cardContent p-3">
                                                            <div className="d-flex justify-content-between">
                                                                <Card.Title>{item.name}</Card.Title>
                                                                <FaLocationArrow className='arrowcard my-auto' />
                                                            </div>

                                                            <div className="starContent">
                                                                <div className="textcard">
                                                                    <Card.Text className='text-capitalize'>
                                                                        {item.selling}
                                                                    </Card.Text>
                                                                    <div className="d-flex justify-content-between">
                                                                        <div className="d-flex justify-content-start">
                                                                            <i class="icofont-star starcard me-3 my-auto"></i>
                                                                            <i class="icofont-star starcard me-3 my-auto"></i>
                                                                            <i class="icofont-star starcard me-3 my-auto"></i>
                                                                            <i class="icofont-star starcard me-3 my-auto"></i>
                                                                            <i class="icofont-star starcard me-3 my-auto"></i>
                                                                        </div>
                                                                        <p className='mb-0'>
                                                                            {item.pirce}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Link>
                                        </Card>

                                    </Col>
                                ))
                            }

                        </Row>

                    </div>
                </Container>
            </section>
        </>
    )
}

export default MostPopular