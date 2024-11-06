import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx/Root';
import Home from './Components/Home/Home';
import AllUser from './Components/AllUser/AllUser';
import ErrorPages from './Components/Pages/ErrorPages';
import LoginPage from './Components/Pages/LoginPage/LoginPage';
import SingleItem from './Components/SingleFoodItem/SingleItem';
import RegisterPage from './Components/Pages/RegisterPage/RegisterPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPages></ErrorPages>,
    
    children: [
      {
        path: '/',
        element: <Home></Home>,
        
      
      },
      {
        path: '/:id',
        element:<SingleItem></SingleItem>,
        loader: ({params}) => fetch(`http://localhost:5000/foodItems/${params.id}`)
     

      },
      {
        path:'/allUser',
        element: <AllUser></AllUser>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path:'/register',
        element: <RegisterPage></RegisterPage>
      }

    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
