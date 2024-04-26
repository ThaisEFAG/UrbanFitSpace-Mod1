import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "../src/Pages/Home"
import Login from "../src/Pages/Login"
import CadastroUsuarios from "../src/Pages/CadastroUsuarios"
import CadastroExercicios from './Pages/CadastroExercicios';


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
      path: "/cadastroUsuarios",
      element: <CadastroUsuarios/>
    },
    {
      path: "/cadastroExercicios",
      element: <CadastroExercicios/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
        <RouterProvider router = {routers}>

        </RouterProvider> 
)
