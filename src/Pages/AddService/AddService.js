import React from 'react';

const AddService = () => {

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const service = form.service.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;

        
        const AddService = {
            
            service_name: service,
            price: price,
            image_url: image,
            details: description
        }

        // console.log(AddService);

        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.data.acknowledged) {
                    alert('Service Added successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));

    }



    return (
        <div className='container text-white p-4 mt-5' style={{ background: '#03031824' }}>
            <h2 className='mb-4'>Add New Service</h2>

            <form onSubmit={handleAddService}>
                <div className='row mb-3'>
                    <div className='col-lg-6 mb-3'>
                        <input name='service' type="text" placeholder="Service Name" className="input input-bordered w-100 p-2" />
                    </div>
                    <div className='col-lg-6 mb-3'>
                        <input name='price' type="text" placeholder="Price" className="input input-bordered w-100 p-2" />
                    </div>
                    <div className='col-lg-6 mb-3'>
                        <input name='image' type="text" placeholder="Image URL" className="input input-bordered w-100 p-2" />
                    </div>
                    
                </div>
                <textarea style={{ height: '140px' }} name='description' className="w-100 mb-3 p-3" placeholder="Description"></textarea>

                <input className='btn btn-success' type='submit' value="Add Service"></input>
            </form>

        </div>
    );
};

export default AddService;