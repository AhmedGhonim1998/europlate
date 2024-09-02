import React, { useState, useEffect, useRef } from 'react';
import { Container, Card, Row, Col, InputGroup, Form } from 'react-bootstrap';
import imagePlate from '../assets/image/plateImageSk.png';
import imge from '/Imagescards/card4.png';
import SymbolKeyboard from '../Home/components/SymbolKeyboard';
const Kao4hh = () => {
    const [plateText, setPlateText] = useState('YOUR TEXT');
    const [plateColor, setPlateColor] = useState('lightgray');
    const [textColor, setTextColor] = useState('black');
    const maxChars = 16;

    const handleTextChange = (e) => {
        const newText = e.target.value;
        if (newText.length <= maxChars) {
            setPlateText(newText);
        }
    };
    const handleSymbolSelect = (symbol) => {
        if (plateText.length < maxChars) {
            setPlateText((prevText) => prevText + symbol);
        }
    };
    return (
        <>
        <section className='unitcard'>
                <Container>
                    <Row>
                        <Col lg={6} md={12} sm={12} className='columnUnitCard'>
                            <Card className='cardMostPopular unitCard'>
                                <div className="imageClass d-flex flex-column justify-content-center align-items-center my-auto">
                                    <div className="imageContainer my-auto">
                                        <Card.Img variant="top" src={imge} className='cardimage my-auto' />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={6} md={12} sm={12} className='my-auto'>
                            <div className="textContent">
                                <h2>Region European size Plate</h2>
                                <p className='price'>45.0$</p>
                                <p className='textunitCard'>
                                    Pick any of our European license plate text Embossed with your custom text.
                                    This plate fits up to 9 characters.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <div className="textEditingContent mt-5">
                        {/* Display the input text */}

                        <div className='plate-preview text-center pt-4 ps-4 pe-4'>
                            <div className="plateContainer mt-4 d-flex justify-content-center align-items-center mx-auto">
                                <div
                                    className="plate-display"
                                    style={{
                                        backgroundColor: plateColor,
                                        color: textColor,
                                        width: '300px',   // Fixed width
                                        height: '70px',  // Fixed height
                                        padding: '10px 20px',
                                        fontSize: '1.2rem',
                                        letterSpacing: '2px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden',  // Ensure text doesn't overflow
                                        textAlign: 'center', // Center text inside
                                        borderTopLeftRadius: '10px',
                                        borderBottomLeftRadius: '10px',
                                        border: '2px solid',
                                        borderColor: 'black',
                                        fontWeight: 'bold'

                                    }}
                                >
                                    {plateText}
                                </div>
                            </div>
                        </div>
                        <p className='text-center text-black mt-3'>Design your  plate with your text below.</p>
                        <div className="textContent">
                            <div className="input-container d-flex justify-content-center align-items-center">
                                {/* Text Input */}

                                <InputGroup size="lg" className='w-50 yourtextinput'>
                                    <Form.Control
                                        type="text"
                                        value={plateText}
                                        onChange={handleTextChange}
                                        placeholder="Enter your plate text"
                                        className="input-box w-25"
                                    />
                                </InputGroup>
                                <div className="charContent p-2 ms-3 my-auto">
                                    <span className="char-counter text-center align-items-center d-flex flex-column justify-content-center my-auto">
                                        {maxChars - plateText.length}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <SymbolKeyboard onSelectSymbol={handleSymbolSelect} />




                    </div>
                </Container>
            </section>
        </>
    )
}

export default Kao4hh