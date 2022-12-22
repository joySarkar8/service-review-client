import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../ReviewCard/ReviewCard'



const Review = ({ updateReview }) => {

    const { data } = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        fetch(`https://photography-server-nu.vercel.app/reviews?service=${data?._id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data.data)
                setLoader(false)
            })
    }, [data?._id, updateReview])


    // console.log(reviews);

    // console.log(loader);
    return (
        <div className='container text-white p-3 mt-5' style={{ background: '#03031824' }}>
            <h2 className='text-center mt-3 mb-4'>Reviews</h2>
            {
                loader ?
                    <div className='text-center'><div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div></div>
                    :
                    <div className=' d-flex flex-wrap justify-content-center mb-5' style={{ gap: '40px' }}>
                        {
                            reviews.length ? reviews.map(review => <ReviewCard
                                key={review._id}
                                review={review}
                            ></ReviewCard>)
                                :

                                <h1 className='text-white'>No Reviews</h1>
                        }
                    </div>
            }
        </div>
    );
};

export default Review;