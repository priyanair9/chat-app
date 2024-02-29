import './App.css';
import {Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ChatsPage from './pages/ChatsPage';
// import ChatCard from './components/ChatCard';

function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path='/' element= {<LoginPage/>}/>
          <Route path='/login' element= {<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/chats' element={<ChatsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
