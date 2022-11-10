import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyReviewCard = ({ review, handleDelete }) => {
    const { titleName, message, serviceName, _id } = review;
    return (
        <Card className='' border="info" style={{ width: '18rem', backgroundColor: '#081329' }}>
            <Card.Header>Service Name: {serviceName}</Card.Header>
            <Card.Body>
                <Card.Title>{titleName}</Card.Title>
                <Card.Text>
                    {message}
                </Card.Text>
            </Card.Body>
            <div className='d-flex justify-content-evenly mb-4 mt-2'>

                {/* <Button variant="success">Update</Button> */}

                <Link to={`/myreviews/edit/${_id}`}><button className='btn btn-success'>Edit</button></Link>
                <Button onClick={() => handleDelete(_id)} variant="warning" className='text-decoration-underline'>Delete</Button>
            </div>
        </Card>
    );
};

export default MyReviewCard;