import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

function RegisterPage(props) {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
    });

    const handleChange = (event) => {
        const{name, value} = event.target
        setFormData(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            email: formData.email,
            username: formData.username,
            password: formData.password,
        }
        axios.post('http://localhost:3001/register', newUser)
    };

    

    return (
        <div>
            <h1>Register</h1>
            <form className='register-form' onSubmit={handleSubmit}>
                <input type="email" name="email" size="30" placeholder="Email" value={formData.email} onChange={handleChange}></input>
                <input name="username" size="30" placeholder="Username" value={formData.username} onChange={handleChange}></input>
                <input type="password" name="password" size="30" placeholder="Password" value={formData.password} onChange={handleChange}></input>
                <input type="password" name="confirm-password" size="30" placeholder="Confirm password"></input>
                <button>Create Account</button>
            </form>
            <p>Already have an account? <Link to={"/login"} className='redirect-link'>Login</Link></p>
        </div>
    );
}

export default RegisterPage;