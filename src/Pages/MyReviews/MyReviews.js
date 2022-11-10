import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data.data))
    }, [user?.email])

    const handleDelete = id => {
        // console.log(id);
        const proceed = window.confirm('Continue to DELETE this review ple click ok')
        if (proceed) {
            fetch(`http://localhost:5000/myreviews/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.data.deletedCount > 0) {
                    alert('Deleted successfull')
                    const remaing = reviews.filter(odr => odr._id !== id);
                    setReviews(remaing);
                }
            })
        }
    };

    const handleUpdate = id => {
        fetch(`https://server-car-taupe.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                const remaing = reviews.filter(odr => odr._id !== id);
                const approving = reviews.find(odr => odr._id === id);
                approving.status = 'Approved';
                console.log(approving);
                const newOrders = [...remaing, approving];
                setReviews(newOrders)
            }
        })
    }


    console.log(reviews);
    return (
        <div className='container text-white p-3 mt-5' style={{ background: '#03031824' }}>
            <h2 className='text-center mt-3 mb-4'>My Reviews</h2>
            <div className=' d-flex flex-wrap justify-content-center mb-5' style={{ gap: '40px' }}>
                {
                    reviews.map(review => <MyReviewCard
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                    ></MyReviewCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;