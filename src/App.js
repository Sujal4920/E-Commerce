import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
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
  {
    path:"/cart",
    element:<CartPage/>,
  },
  
])
export default function App() {
  return (
    <div className="App">
    <RouterProvider router= {router}/>
    </div>
  );
}


