import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddReview = () => {
    const { data } = useLoaderData();
    const { _id, service_name, price, image_url, details } = data;
    const {user} = useContext(AuthContext);
    // console.log(data);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const email = user?.email || 'unregisterd';
        const title = form.title.value;
        const message = form.message.value;
        const photoURL = user?.photoURL;
        const serviceName = service_name;



        
        const review = {
            service: _id,
            titleName: title,
            customerName: name,
            message,
            email,
            photoURL,
            serviceName
        }

        // console.log(review);
        
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.data.acknowledged) {
                    alert('Review placed successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }

    
    return (
        <div className='container text-white p-4 mt-5' style={{ background: '#03031824' }}>
            <h2 className='mb-4'>Add Review</h2>

            <form onSubmit={handleReview}>
                <div className='row mb-3'>
                    <div className='col-lg-6 mb-3'>
                        <input name='name' defaultValue={user?.displayName} readOnly type="text" placeholder="Your Name" className="input input-bordered w-100 p-2" />
                    </div>
                    <div className='col-lg-6'>
                        <input name='title' type="text" placeholder="Title" className="p-2 input input-bordered w-100" />
                    </div>
                </div>
                <textarea style={{ height: '140px' }} name='message' className="w-100 mb-3 p-3" placeholder="Your Message" required></textarea>

                <input className='btn btn-success' type='submit' value="Post Review"></input>
            </form>

        </div>
    );
};

export default AddReview;