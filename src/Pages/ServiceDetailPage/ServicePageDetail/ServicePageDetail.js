import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import AddReview from '../AddReview/AddReview';
import Review from '../Review/Review';





const ServicePageDetail = () => {
    const { data } = useLoaderData();
    const { service_name, price, image_url, details } = data;

    return (
        <>
            <div className='container text-white p-3' style={{ background: '#03031824' }}>
                <Card className='mt-5 m-auto' style={{ maxWidth: '50rem', border: '0', background: 'none' }}>
                    <Card.Img variant="top" className='rounded border' src={image_url} />
                    <Card.Body>
                        <Card.Title>{service_name}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <div className='d-flex justify-content-between'>
                        <Button variant="success">Purchase</Button>
                        <h5>Price: ${price}</h5>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <Review></Review>
            <AddReview></AddReview>
        </>

    );
};

export default ServicePageDetail;