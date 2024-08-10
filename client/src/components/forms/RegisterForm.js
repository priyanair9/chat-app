import React, {useState} from 'react';
import validator from 'validator';
import axios from 'axios'
import {Link} from 'react-router-dom'


function RegisterForm({registerFn}) {

    // const [userName, setUserName] = useState("")
    // const [email, setEmail]       = useState("")
    // const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
  
    // const updateUserNameField = (event) => { setUserName(event.target.value) }
    // const updateEmailField    = (event) => { setEmail(event.target.value) }
    // const updatePasswordField = (event) => { setPassword(event.target.value) }


    const [input, setInput] = useState({
        email: '',
        username: '',
        password: '',
        // profilePicColour: '#'+randomColour
    })

    function handleChange(event) {
        const{name, value} = event.target

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    //Handles submission of the form, checks if the username, email and password have been filled in, and then tries to register the user
    function handleSubmit(event) {
        event.preventDefault()
        const newUser = {
            email: input.email,
            username: input.username,
            password: input.password,
            // profilePicColour: input.profilePicColour
        }
        axios.post('http://localhost:3001/register', newUser)
        console.log(input)
        if (input.username.length === 0) {
            setErrorMsg("Please enter a username")
            return
          }
          if (input.email.length === 0) {
            setErrorMsg("Please enter a email")
            return
          }
          if (input.password.length === 0) {
            setErrorMsg("Please enter a password")
            return
          }
          if (!validator.isEmail(input.email)){
            setErrorMsg("Please enter a valid email address")
            return
          }
          registerFn(input.username, input.email, input.password, setErrorMsg)
    }
    return (
        <div>
            <h1>Register</h1>
            <form className='register-form' onSubmit={handleSubmit}>
                <input type="email" name="email" size="30" placeholder="Email" value = {input.email} onChange={handleChange}></input>
                <input name="username" size="30" placeholder="Username" value = {input.username} onChange={handleChange}></input>
                <input type="password" name="password" size="30" placeholder="Password" value = {input.password} onChange={handleChange}></input>
                <input type="password" name="confirm-password" size="30" placeholder="Confirm password"></input>
                <button>Create Account</button>
                <div className='error'>
                    {errorMsg}
                </div>
            </form>
            <p>Already have an account? <Link to={"/login"} className='redirect-link'>Login</Link></p>
        </div>
    );
}

export default RegisterForm;