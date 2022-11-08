import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../assets/sliderImg/bg1.jpg'
import img2 from '../../../assets/sliderImg/bg2.jpg'
import img3 from '../../../assets/sliderImg/bg3.jpg'
import img4 from '../../../assets/sliderImg/bg4.jpg'


function Slider() {
    return (
        <Carousel fade>
            <Carousel.Item className='vh-100'>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption style={{bottom: '50%'}}>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='vh-100'>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption style={{bottom: '50%'}}>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='vh-100'>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption style={{bottom: '50%'}}>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='vh-100'>
                <img
                    className="d-block w-100"
                    src={img4}
                    alt="Third slide"
                />

                <Carousel.Caption style={{bottom: '50%'}}>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;