import React from 'react';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Service></Service>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;