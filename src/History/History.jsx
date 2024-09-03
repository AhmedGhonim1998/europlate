import React from 'react'
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imge from '/Imagescards/alpha.png';
const History = () => {
    return (
        <>
            <section className='historySection'>
                <Container>
                    <Row>
                        <Col lg={5} md={12} sm={12}>
                            <Card className='cardMostPopular unitCard'>
                                <h3 className='text-center'>FE-SCHRIFT</h3>
                                <div className="textContent">
                                    <p className='text-black ms-3'><span className='spanBold'>Date created:</span>  1978-1980</p>
                                    <p className='text-black ms-3'><span className='spanBold'>Glyphs:</span> 102</p>
                                    <div className="FE-Schrift d-flex justify-content-start ms-3">
                                        <p className='spanBold text-black'>Also known as :</p>
                                        <p className='text-black'>FE-Schrift <br /> Schrift für Kfz-Kennzeichen</p>
                                    </div>

                                    <div className="imageClass d-flex flex-column justify-content-center align-items-center">

                                        <Card.Img variant="top" src={imge} className='w-75' />

                                    </div>
                                </div>
                            </Card>
                        </Col>

                        <Col lg={7} md={12} sm={12} className='my-auto'>
                            <p className='text-black mt-3'><span className='spanBold'>The FE-Schrift or Fälschungserschwerende
                                Schrift</span><br /> ('forgery-impeding typeface') is a
                                sans serif typeface introduced for use on
                                licence plates.
                                Its monospaced letters and numbers
                                are slightly disproportionate to prevent
                                easy modification and to improve machine
                                readability. The typeface was developed in
                                Germany, where it has been mandatory since
                                November 2000.

                                The abbreviation "FE" is derived from the
                                compound German adjective
                                fälschungserschwerend combining the noun
                                Fälschung ('falsification') and the verb
                                erschweren ('to hinder'). Schrift means
                                'font' in German (cognate with the English
                                word script). Other countries have later
                                introduced the same or a derived typeface
                                for license plates taking advantage of the
                                proven design for the FE-Schrift.</p>
                        </Col>
                    </Row>
                    <div className="development mt-5">
                        <h2 className='text-black'>Development</h2>
                        <p className='text-black mb-5'>The motivation for the creation of the typeface arose in the late 1970s in the light of terrorism by the Red Army Faction when it was discovered that with the then-standard font for vehicle registration plates—the DIN 1451 font—it was particularly easy to modify letters by applying a small amount of black paint or tape. For example, it was easy to change a "P" to an "R" or "B", a "3" to an "8", or an "L" or "F" to an "E". Modifications to FE-font plates are somewhat more difficult, as they also require the use of white paint, which is easily distinguished at a distance from the retroreflective white background of the plate, in particular at night
                        compound German adjective fälschungserschwerend combining the noun Fälschung ('falsification') and the verb erschweren ('to hinder'). Schrift means 'font' in German (cognate with the English word script). Other countries have later introduced the same or a derived typeface for license plates taking advantage of the proven design for the FE-Schrift.</p>

                        <p className='text-black mt-5'>The original design for the FE-Schrift typeface was created by Karlgeorg Hoefer who was working for the Bundesanstalt für Straßenwesen (Federal Highway Institute of Germany) at the time. The typeface was slightly modified according to the results of tests that lasted from 1978 to 1980 at the University of Giessen (Department of Physiology and Cybernetic Psychology).[3] For example, the initial slashed zero () could be mistaken for an 8, so Hoefer replaced it by a design with a reduced white slash in the upper right corner.[4] Whilst the DIN typeface was using a proportional font, the FE-Schrift is a monospaced font (with different spacing for letters and numbers) for improved machine readability. Faked FE-Schrift letters (e.g., "P" to "R") appear conspicuously disproportionate.</p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default History