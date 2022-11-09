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
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            <Review></Review>
            <AddReview></AddReview>
        </>

    );
};

export default ServicePageDetail;