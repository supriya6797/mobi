import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route element={<Register/>} path='/'></Route>
    <Route element={<Login/>} path='/login'></Route>
    <Route element={<Home/>} path='/home'></Route> 
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
