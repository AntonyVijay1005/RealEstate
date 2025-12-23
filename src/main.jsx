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
import Search from './Search.jsx';
import Reactangle from './Reactangle.jsx';
import Admin from './Admin.jsx';
import AddProperty from './AddProperty.jsx';
import EditProperty from './EditProperty.jsx';
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
    element:<Search/>
  },
  {
    path:'/property/:id',
    element:<Property/>
  },
  {
    path:'/search',
    element:<Search />
  },
  {
    path:"/rect",
    element:<Reactangle/>
  },
  {
    path:"/admin",
    element:<Admin/>
  },
  {
    path:"/add",
    element:<AddProperty/>
  },
  {
    path:"/edit/:id",
    element:<EditProperty/>
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
