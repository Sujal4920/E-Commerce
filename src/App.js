import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
const router =  createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },

  {
    path:"/login",
    element:<LoginPage/>,
  },
  {
    path:"/signup",
    element:<SignupPage/>,
  },
  
])
export default function App() {
  return (
    <div className="App">
    <RouterProvider router= {router}/>
    </div>
  );
}


