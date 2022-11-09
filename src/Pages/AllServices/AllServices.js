import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Home/ServiceCard/ServiceCard';

const AllServices = () => {
    const servicesData = useLoaderData();
    // console.log(servicesData);
    return (
        <div className='container'>
            <h1 className='text-white text-center mb-5 mt-5'>All Services</h1>

            <div className=' d-flex justify-content-center flex-wrap mb-5' style={{ gap: '40px' }}>
                {
                    servicesData?.data.map(ser => <ServiceCard
                        key={ser._id}
                        ser={ser}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default AllServices;