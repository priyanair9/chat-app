import React from 'react';
import { Link } from 'react-router-dom';

function HomePage(props) {
    return (
        <div>
            <div className='homepage-content'>
                <p>ChatApp</p>
                <Link to= {"/login"}className='login'>Login</Link>
                <Link to= {"/register"} className='register'>Register</Link>
            </div>
            <div className='artwork'></div>
        </div>
    );
}

export default HomePage;