import React from 'react';
import { Card } from 'react-bootstrap';

const BlogCard = ({ blog }) => {
    const { question, answer } = blog;
    return (
        <Card border="info" style={{ width: '100%', backgroundColor: '#081329', marginBottom: '30px', padding: '10px' }}>
            <h2>{question}</h2>
            <Card.Body>
                <Card.Text>
                    {answer}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default BlogCard;