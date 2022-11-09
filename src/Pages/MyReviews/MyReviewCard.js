import React from 'react';
import { Button, Card } from 'react-bootstrap';

const MyReviewCard = ({review}) => {
    const {titleName, customerName, message, serviceName} = review;
    return (
        <Card className='' border="info" style={{ width: '18rem', backgroundColor: '#081329' }}>
            <Card.Header>Service Name: {serviceName}</Card.Header>
            <Card.Body>
                <Card.Title>{titleName}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
            <div className='d-flex justify-content-evenly mb-4 mt-2'>
            <Button variant="success">Update</Button>
            <Button variant="warning" className='text-decoration-underline'>Delete</Button>
            </div>
        </Card>
    );
};

export default MyReviewCard;