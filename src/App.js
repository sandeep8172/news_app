import './App.css';
import Home from './components/homePage/Home';
import Login from './components/loginPage/Login';
import SignUp from './components/signUpPage/SignUp';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
