import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../assets/sliderImg/bg1.jpg'
import img2 from '../../../assets/sliderImg/bg2.jpg'
import img3 from '../../../assets/sliderImg/bg3.jpg'
import img4 from '../../../assets/sliderImg/bg4.jpg'


function Slider() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption style={{bottom: '50%'}}>
                    <h3>STREET , NATURE & EVENT PHOTOGRAPHER</h3>
                    <h1 style={{fontSize: '100px'}}>JOHN SMITH</h1>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 vh-lg-100"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption style={{bottom: '50%'}}>
                <h3>STREET , NATURE & EVENT PHOTOGRAPHER</h3>
                    <h1 style={{fontSize: '100px'}}>JOHN SMITH</h1>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 vh-lg-100"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption style={{bottom: '50%'}}>
                <h3>STREET , NATURE & EVENT PHOTOGRAPHER</h3>
                    <h1 style={{fontSize: '100px'}}>JOHN SMITH</h1>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 vh-lg-100"
                    src={img4}
                    alt="Third slide"
                />

                <Carousel.Caption style={{bottom: '50%'}}>
                <h3>STREET , NATURE & EVENT PHOTOGRAPHER</h3>
                    <h1 style={{fontSize: '100px'}}>JOHN SMITH</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;