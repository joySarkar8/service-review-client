import React from 'react';
import img1 from './../../../assets/portfolio/p1.jpg'
import img2 from './../../../assets/portfolio/p2.jpg'
import img3 from './../../../assets/portfolio/p3.jpg'
import img4 from './../../../assets/portfolio/p4.jpg'
import img5 from './../../../assets/portfolio/p5.jpg'
import img6 from './../../../assets/portfolio/p6.jpg'
import img7 from './../../../assets/portfolio/p7.jpg'
import img8 from './../../../assets/portfolio/p8.jpg'
import img9 from './../../../assets/portfolio/p9.jpg'
import img10 from './../../../assets/portfolio/p10.jpg'
import img11 from './../../../assets/portfolio/p11.jpg'
import img12 from './../../../assets/portfolio/p12.jpg'
import img13 from './../../../assets/portfolio/p13.jpg'
import Masonry from 'react-masonry-css'
import './Portfolio.css'

const Portfolio = () => {
    let data = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
        {
            id: 7,
            imgSrc: img7,
        },
        {
            id: 8,
            imgSrc: img8,
        },
        {
            id: 9,
            imgSrc: img9,
        },
        {
            id: 10,
            imgSrc: img10,
        },
        {
            id: 11,
            imgSrc: img11,
        },
        {
            id: 12,
            imgSrc: img12,
        },
        {
            id: 13,
            imgSrc: img13,
        },
    ];

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        900: 2,
        500: 1
    };

    return (

        <div className='text-white p-5 mt-5 rounded container' style={{ background: '#03031824' }}>
            <h1 className='text-center'>My Portfolio</h1>
            <h5 className='text-center mb-5'>I absolutely love shooting undiscovered places around the world. Someday maybe outside...</h5>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">

                {data.map((item, index) => (

                    <img key={index} src={item.imgSrc} alt="" style={{ marginBottom: "20px", width: '100%' }} />

                ))}
            </Masonry>
        </div>
    );
};

export default Portfolio;