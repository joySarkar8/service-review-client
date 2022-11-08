import React from 'react';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;