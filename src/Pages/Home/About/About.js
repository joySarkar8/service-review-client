import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AbouyImg from './../../../assets/about.jpg'

const About = () => {
    return (
        <Container className='text-white p-5 mt-5 rounded' style={{ background: '#03031824' }}>
            <Row>
                <Col lg='5'>
                    <img className='rounded w-100' src={AbouyImg} alt="" />
                </Col>
                <Col lg='7'>
                    <Row>
                        <h1>Life is an adventure. Capture every minute.</h1>
                        <h3 className='mb-4 text-white-50'>I'm John Smith, a street and nature photographer. My passion is taking photos of the most stunning places around the world.</h3>
                        <Col lg='6'>
                            <h2>A Little About Me</h2>
                            <p className='text-white-50'>Nulla vitae elit libero, a pharetra augue. Dapuis mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus.</p>
                        </Col>
                        <Col lg='6'>
                            <h2>My Equipment</h2>
                            <div className='text-white-50'>
                                <li>Canon Eos 5D Mark IV 24-105mm</li>
                                <li>Manfrotto Compact Tripod</li>
                                <li>DJI Ronin MX 3-Axis Gimbal Stabilizer</li>
                                <li>Wondlan Wer01 Slider Time Lapse</li>
                                <li>Canon EF100-400MM Lens</li>
                                <li>Nikon D5 24-70mm F2.8</li>
                                <li>Nikon Af-S 24Mm F/1.4G Ed Lens</li>
                                <li>Wondlan Sniper Sn 2.1 Wf Wireless Dslr</li>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default About;