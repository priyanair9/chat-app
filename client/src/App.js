import './App.css';
import {Routes, Route} from "react-router-dom";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ChatsPage from './pages/ChatsPage';
import HomePage from './pages/HomePage';
import React, {useState, useEffect} from 'react';

function App() {
  // Variable to control state of users logged in status.
  const [userInfo, setUserInfo] = useState({"status": "logged out"})
  const[user, setUser] = useState(null)
  const [loggedOut, setloggedOut] = useState(false)

  // Store user's session so that the webpage will remember them next time they visit.
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    console.log(loggedInUser)
    if (loggedInUser) {
      const loggedInUserInfo = JSON.parse(loggedInUser);
      setUser(loggedInUser)
      setUserInfo(loggedInUserInfo);
    } 
    if(loggedInUser === null) {
      setloggedOut(true)
    }
  }, [])

  return (
    <div className='App'>
      <Routes>
          <Route path='/' element= {<HomePage/>}/>
          <Route path='/login' element= {<LoginPage setUserInfo={setUserInfo}/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/chats' element={<ChatsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
