import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import serverRequests from '../serverRequests';
import RegisterForm from '../components/forms/RegisterForm';

function RegisterPage(props) {
    const registerFn = (newUserName, email, password, setFormErrorMsg) => {
        serverRequests.registerNewUser(newUserName, email, password)
        .then(data => {
            if (data.status === "username taken") {
                setFormErrorMsg('This username is already taken');
              } else if (data.status === "success") { // Check for the presence of username and token
                setFormErrorMsg('Registered! You can now login');
              } else {
                setFormErrorMsg('Registering was unsuccessful, please try again');
              }
        }).catch(error => {
            setFormErrorMsg('Registering was unsuccessful, please try again later')
        })
    }

    

    return (
        <div>
            <RegisterForm registerFn={registerFn}/>
        </div>
    );
}

export default RegisterPage;