import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {

    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services?limit=3')
        .then(res => res.json())
        .then(data => setServicesData(data.data))
    },[]);

    // console.log(servicesData);
    return (
        <div className=' text-white container mt-5 p-5' style={{ background: '#03031824' }}>
            <h1 className='text-center mb-5'>Services</h1>
            <div className=' d-flex flex-wrap justify-content-center mb-5' style={{ gap: '40px' }}>
                {
                    servicesData?.map(ser => <ServiceCard
                    key={ser._id}
                    ser={ser}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center'>
                <Link to='/services'><button className='btn btn-success'>See All</button></Link>
            </div>
        </div>
    );
};

export default Service;