import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    // const { providerLogin, createUser, updateUserProfile } = useContext(AuthContext);

    // const navigate = useNavigate();

    // const googleProvider = new GoogleAuthProvider();
    // const gitProvider = new GithubAuthProvider();



    const handleGoogleSignIn = () => {
        // providerLogin(googleProvider)
        //     .then(() => {
        //         navigate('/')
        //         toast.success('Google Login Successfull!')
        //     })
        //     .catch(e => {
        //         toast.error(e.message)
        //     })

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;



    //     createUser(email, password)
    //         .then(() => {
    //             form.reset();
    //             handleUpdateProfile(name, photoURL)
    //             navigate('/')
    //             toast.success('Create Account Successfull!')
    //         })
    //         .catch(e => {
    //             toast.error(e.message)
    //         })
    }

    const handleUpdateProfile = (name, photoURL) => {
        // const profile = { displayName: name, photoURL: photoURL }
        // updateUserProfile(profile)
        //     .then(() => { })
        //     .catch(e => toast.error(e.message))
    }

    return (
        <div className='mx-auto border rounded-4 mt- text-center mt-5' style={{ width: '500px', padding: '48px',  background: '#03031824'  }}>
            <h4 className='text-center mb-4 text-white'>Create Account</h4>
            <form onSubmit={handleSubmit} className='mb-4'>
                <div className='mb-3' >
                    <input name='name' style={{ outline: 'none', width: '400px', padding: '7px 16px' }} type="text" placeholder='Name' />
                </div>
                <div className='mb-3' >
                    <input name='photoURL' style={{ outline: 'none', width: '400px', padding: '7px 16px' }} type="text" placeholder='PhotoURL' />
                </div>
                <div className='mb-3' >
                    <input name='email' style={{ outline: 'none', width: '400px', padding: '7px 16px' }} type="eamil" placeholder='Email' />
                </div>
                <div className='mb-3'>
                    <input name='password' style={{ outline: 'none', width: '400px', padding: '7px 16px' }} type="password" placeholder='Password' />
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