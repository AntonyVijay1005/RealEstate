import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './index.css'
import App from './App.jsx'

import Login from './Login.jsx';
import Buy from './Buy.jsx';
import Property from './Property.jsx';
import Signup from './Signup.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/buy',
    element:<Buy/>
  },
  {
    path:'/property/:id',
    element:<Property/>
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
