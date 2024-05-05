import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routers from './routs.jsx';
// import PageErro from "./Pages/PageErro.jsx"
import { UsuariosContextProvider } from './Context/UsuariosContext.jsx';
import { LocaisContextProvider } from './Context/LocaisContext.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
          <LocaisContextProvider>
          <UsuariosContextProvider>
          <RouterProvider router = {routers}>

          </RouterProvider> 
          </UsuariosContextProvider>
          </LocaisContextProvider>
          

        
)
