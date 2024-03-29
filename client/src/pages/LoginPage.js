import React from 'react';
import {Link} from 'react-router-dom'

function LoginPage(props) {
    return (
        <div>
            <h1>Login</h1>
            <form className='register-form'>
                <input name="username" size="30" placeholder="Username"></input>
                <input type="password" name="password" size="30" placeholder="Password"></input>
                <button>Login</button>
            </form>
            <p>Don't have an account? <Link to={"/register"} className='redirect-link'>Register</Link></p>
        </div>
    );
}

export default LoginPage;