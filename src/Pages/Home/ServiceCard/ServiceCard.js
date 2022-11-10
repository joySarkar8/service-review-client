import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ ser }) => {

    const { _id, service_name, image_url, details } = ser;
    return (

        <Card style={{ width: '18rem', backgroundColor: '#081329', border: '2px solid white', color: 'white' }}>

            <PhotoProvider>
                <PhotoView src={image_url}>
                    <Card.Img variant="top" src={image_url} style={{height: '180px'}} />
                </PhotoView>
            </PhotoProvider>

            <Card.Body>
                <Card.Title>{service_name}</Card.Title>
                <Card.Text>

                    {
                        details.length > 100

                            ?

                            <>{details.slice(0, 100) + '...'}</>

                            :

                            details
                    }

                </Card.Text>
                <Link to={`/services/${_id}`}><Button variant="primary">View Details</Button></Link>
            </Card.Body>
        </Card>

    );
};

export default ServiceCard;

// #282c34
