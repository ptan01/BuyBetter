import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Leyout/Main'
import Home from './Routes/Home/Home'
import Products from './Routes/Products/Products'
import Details from './Routes/Details/Details'
import ContextProvider from './privetRoute_Context/ContextProvider'
import Login from './Routes/Login/Login'
import Register from './Routes/Register/Register'
import PrivetRoute from './privetRoute_Context/PrivetRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element : <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/products',
        element: <PrivetRoute><Products></Products></PrivetRoute>
      },
      {
        path: '/details',
        element: <PrivetRoute><Details></Details></PrivetRoute>
      },
      {
        path : '/login',
        element: <Login></Login>
      },
      {
        path : '/register',
        element: <Register></Register>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <ContextProvider>
    <RouterProvider router={router}></RouterProvider>
  </ContextProvider>

)
