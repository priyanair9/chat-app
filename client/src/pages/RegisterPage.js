import React, { useState } from 'react';
import axios from 'axios';

function RegisterPage(props) {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/register', formData);
          console.log('User registered successfully:', response.data);
        } catch (error) {
          console.error('Error registering user:', error.response.data.message);
        }
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
        </div>
    );
}

export default RegisterPage;