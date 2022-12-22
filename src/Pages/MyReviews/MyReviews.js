import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [loader, setLoader] = useState(true);

    // console.log(reviews);
    

    useEffect(() => {
        fetch(`https://photography-server-nu.vercel.app/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data.data))
    }, [user?.email])

    const handleDelete = id => {
        // console.log(id);
        const proceed = window.confirm('Continue to DELETE this review ple click ok')
        if (proceed) {
            fetch(`https://photography-server-nu.vercel.app/myreviews/${id}`, {
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




    // console.log(reviews);
    return (
        <div className='container text-white p-3 mt-5' style={{ background: '#03031824' }}>
            {
                reviews.length ? <h2 className='text-center mt-3 mb-4'>Reviews</h2>
                :
                <h2 className='text-center mt-3 mb-4'>No reviews were added</h2>
            }
            <div className=' d-flex flex-wrap justify-content-center mb-5' style={{ gap: '40px' }}>
                {
                    reviews.map(review => <MyReviewCard
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                    ></MyReviewCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;