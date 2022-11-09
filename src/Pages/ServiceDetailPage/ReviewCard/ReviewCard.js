import React from 'react';
import { Card } from 'react-bootstrap';


const ReviewCard = ({review}) => {
    const {titleName, customerName, message} = review;
    return (
        <Card border="info" style={{ width: '18rem', backgroundColor: '#081329' }}>
            <Card.Header>{customerName}</Card.Header>
            <Card.Body>
                <Card.Title>{titleName}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ReviewCard;