import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from "react-toastify";


const Login = () => {

    const { googleProviderLogin, login } = useContext(AuthContext);
    const [loader, setLoader] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();




    const handleGoogleSignIn = () => {
        setLoader(true)
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                user && navigate(from, { replace: true })
                toast.success('Google Login Successfull!')
                console.log(user);
            })
            .catch(e => {
                console.error(e.message);
            })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);
        setLoader(true)
        login(email, password)
            .then(result => {
                form.reset();
                toast.success('Login Successfull!')
                navigate('/')
            })
            .catch(e => {
                toast.error(e.message)
            })

    }

    return (

        <div className='mx-auto border rounded-4 mt- text-center mt-5' style={{ width: '500px', padding: '48px', background: '#03031824' }}>
            <div className='position-relative'>
                <h4 className='text-center text-white mb-4'>Log In</h4>
                {
                    loader && <div className="spinner-border text-light position-absolute" style={{ top: '3px', right: '8px' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
            </div>
            <form onSubmit={handleSubmit} className='mb-4'>
                <div className='mb-3' >
                    <input style={{ outline: 'none', width: '400px', padding: '7px 16px' }} type="eamil" id='email' placeholder='Email' />
                </div>
                <div className='mb-3'>
                    <input style={{ outline: 'none', width: '400px', padding: '7px 16px' }} type="password" id='password' placeholder='Password' />
                </div>
                <button className='btn btn-primary shadow' style={{ width: '400px', padding: '8px 16px' }}>LOGIN</button>
            </form>
            <hr className='mb-4 text-white ' />
            <button onClick={handleGoogleSignIn} className='btn btn-danger shadow mb-3' style={{ width: '400px', padding: '8px 16px' }}>SIGN IN WITH GOOGLE</button>
            {/* <p className='text-danger'>{error}</p> */}
            <p className='text-white'>New member? <Link to='/register'>Register</Link> here.</p>
        </div>

    );
};

export default Login;