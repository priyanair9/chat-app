import React from 'react';

function LoginPage(props) {
    return (
        <div>
            <h1>Login</h1>
            <form className='register-form'>
                <input name="username" size="30" placeholder="Username"></input>
                <input type="password" name="password" size="30" placeholder="Password"></input>
                <button>Login</button>
            </form>
        </div>
    );
}

export default LoginPage;