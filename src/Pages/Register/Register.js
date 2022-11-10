import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from "react-toastify";

const Register = () => {

    const { googleProviderLogin, createUser, updateUserProfile } = useContext(AuthContext);
    const [loader, setLoader] = useState(false);

    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        setLoader(true)
        googleProviderLogin(googleProvider)
            .then(() => {
                navigate('/')
                toast.success('Google Login Successfull!')
            })
            .catch(e => {
                toast.error(e.message)
            })

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        setLoader(true)
        createUser(email, password)
            .then(() => {
                form.reset();
                handleUpdateProfile(name, photoURL)
                navigate('/')
                toast.success('Create Account Successfull!')
            })
            .catch(e => {
                toast.error(e.message)
            })
    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => toast.error(e.message))
    }

    return (
        <div className='mx-auto border rounded-4 mt- text-center mt-5' style={{ width: '500px', padding: '48px', background: '#03031824' }}>
            <div className='position-relative'>
                <h4 className='text-center text-white mb-4'>Create Account</h4>
                {
                    loader && <div className="spinner-border text-light position-absolute" style={{ top: '3px', right: '8px' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
            </div>
            <form onSubmit={handleSubmit} className='mb-4'>
                <div className='mb-3' >
                    <input name='name' style={{ outline: 'none', width: '400px', padding: '7px 16px' }} type="text" placeholder='Name' required />
                </div>
                <div className='mb-3' >
                    <input name='photoURL' style={{ outline: 'none', width: '400px', padding: '7px 16px' }} type="text" placeholder='PhotoURL' required />
                </div>
                <div className='mb-3' >
                    <input name='email' style={{ outline: 'none', width: '400px', padding: '7px 16px' }} type="eamil" placeholder='Email' required />
                </div>
                <div className='mb-3'>
                    <input name='password' style={{ outline: 'none', width: '400px', padding: '7px 16px' }} type="password" placeholder='Password' required />
                </div>
                <button className='btn btn-primary shadow' style={{ width: '400px', padding: '8px 16px' }}>REGISTER</button>
            </form>
            <hr className='mb-4 text-white' />
            <button onClick={handleGoogleSignIn} className='btn btn-danger shadow mb-3' style={{ width: '400px', padding: '8px 16px' }}>SIGN IN WITH GOOGLE</button>
            <p className='text-white'>Allready have account? <Link to='/login'>Login</Link> here.</p>
        </div>
    );
};

export default Register;