import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditReview = () => {
    const router = useParams();
    const [reviewItem, setReviewItem] = useState({});
    const { id } = router;
    const navigate = useNavigate();

    
    // get id for review item for edit
    useEffect(() => {
        fetch(`https://photography-server-nu.vercel.app/reviews/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setReviewItem(data.data);
                } else {
                    console.error(data.error);
                }
            })
            .catch((err) => console.error(err.message));
    }, [id]);


    // update handleing function
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const message = form.message.value;

        console.log(title, message);

        const review = {
            titleName: title,
            message: message,

        }

        console.log(review);

        fetch(`https://photography-server-nu.vercel.app/myreviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    // alert(data.message);
                    navigate("/myreviews")
                    // handleClose();
                } else {
                    console.err(data.error)
                }
            })
            .catch(err => console.error(err.message))
    }

    return (
        <div className='container text-white p-4 mt-5' style={{ background: '#03031824' }}>
            <h2 className='mb-4'>Edit Review</h2>

            <form onSubmit={handleUpdate}>

                <div className='mb-3'>
                    <label htmlFor="title">Title</label>
                    <input name='title' type="text" defaultValue={reviewItem?.titleName} required className="input input-bordered w-100 p-2" />
                </div>
                <label htmlFor="message">Description</label>
                <textarea style={{ height: '140px' }} name='message' defaultValue={reviewItem?.message} className="w-100 mb-3 p-3" required></textarea>

                <input className='btn btn-success' type='submit' value="Save Changes"></input>
            </form>

        </div>
    );
};

export default EditReview;