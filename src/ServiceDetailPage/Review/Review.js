import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    return (
        <div className='container text-white p-3 mt-5' style={{ background: '#03031824' }}>
            <h2 className='text-center mt-3 mb-4'>Reviews</h2>
            <ReviewCard></ReviewCard>
        </div>
    );
};

export default Review;