import React from 'react';
import { Card } from 'react-bootstrap';


const ReviewCard = ({ review }) => {
    const { titleName, customerName, message } = review;
    console.log(review);
    return (
        <Card border="info" style={{ width: '18rem', backgroundColor: '#081329', minHeight: '200px' }}>
            <div className='d-flex justify-content-between align-items-center ps-3 pe-3 pt-2 pb-0'>
                <p>Review by: <span style={{ color: 'orangered' }}>{customerName}</span></p>
                <img style={{ width: '50px' }} className='rounded-circle' src={review?.photoURL} alt="" />
            </div>
            <Card.Body>
                <Card.Title>Title: <span style={{ color: 'orangered' }}>{titleName}</span></Card.Title>
                <Card.Text>
                    {message}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ReviewCard;