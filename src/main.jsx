import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "../src/Pages/Home"
import Login from "../src/Pages/Login"
import Cadastro from "../src/Pages/Cadastro"


const routers = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/cadastro",
      element: <Cadastro/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
        <RouterProvider router = {routers}>

        </RouterProvider> 
)
