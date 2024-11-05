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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPages></ErrorPages>,
    
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/allUser',
        element: <AllUser></AllUser>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      }

    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
