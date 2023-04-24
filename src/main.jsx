import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Leyout/Main'
import Home from './Routes/Home/Home'
import Products from './Routes/Products/Products'
import Details from './Routes/Details/Details'

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
        element: <Products></Products>
      },
      {
        path: '/details',
        element: <Details></Details>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}></RouterProvider>

)
