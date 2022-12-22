import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../ReviewCard/ReviewCard'



const Review = ({updateReview}) => {

    const { data } = useLoaderData();
    const [reviews, setReviews] = useState([]);
    

    useEffect(() => {
        fetch(`https://photography-server-nu.vercel.app/reviews?service=${data?._id}`)
            .then(res => res.json())
            .then(data => setReviews(data.data))
    }, [data?._id, updateReview])
    // console.log(updateReview);

    // console.log(reviews);
    return (
        <div className='container text-white p-3 mt-5' style={{ background: '#03031824' }}>
            <h2 className='text-center mt-3 mb-4'>Reviews</h2>
            <div className=' d-flex flex-wrap justify-content-center mb-5' style={{ gap: '40px' }}>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;