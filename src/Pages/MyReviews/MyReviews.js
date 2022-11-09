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


    console.log(reviews);
    return (
        <div className='container text-white p-3 mt-5' style={{ background: '#03031824' }}>
            <h2 className='text-center mt-3 mb-4'>My Reviews</h2>
            <div className=' d-flex flex-wrap justify-content-center mb-5' style={{ gap: '40px' }}>
                {
                    reviews.map(review => <MyReviewCard
                        key={review._id}
                        review={review}
                    ></MyReviewCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;