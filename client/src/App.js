import './App.css';
import {Routes, Route} from "react-router-dom";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ChatsPage from './pages/ChatsPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path='/' element= {<HomePage/>}/>
          <Route path='/login' element= {<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/chats' element={<ChatsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
