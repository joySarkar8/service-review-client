import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    return (
        <div className=' text-white container mt-5 p-5' style={{ background: '#03031824' }}>
            <h1 className='text-center mb-5'>Services</h1>
            <div className=' d-flex flex-wrap justify-content-center mb-5' style={{ gap: '40px' }}>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
            </div>
            <div className='text-center'>
                <button className='btn btn-success'>See All</button>
            </div>
        </div>
    );
};

export default Service;