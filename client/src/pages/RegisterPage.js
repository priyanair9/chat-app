import React from 'react';

function RegisterPage(props) {
    return (
        <div>
            <h1>Register</h1>
            <form className='register-form'>
                <input type="email" name="email" size="30" placeholder="Email"></input>
                <input name="username" size="30" placeholder="Username"></input>
                <input type="password" name="password" size="30" placeholder="Password"></input>
                <input type="password" name="confirm-password" size="30" placeholder="Confirm password"></input>
                <button>Create Account</button>
            </form>
        </div>
    );
}

export default RegisterPage;