import { createBrowserRouter } from 'react-router-dom';
import Home from "../src/Pages/Home"
import Login from "../src/Pages/Login"
import CadastroUsuarios from "./Pages/CadastroUsuarios/index.jsx"
import CadastroExercicios from './Pages/CadastroExercicios/index.jsx';
import EditExercicios from "./Pages/EditExercicios/index.jsx";
import Outlet from "./Outlet/Outlet.jsx";

const routers = createBrowserRouter([


    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/cadastroUsuarios",
      element: <CadastroUsuarios/>
    },
    {
      path: "/",
      element: <Outlet />,
      // errorElement: <PageErro/>,
      children: [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/CadastroExercicios",
      element: <CadastroExercicios/>
    },
    {
      path: "/editExercicios",
      element:<EditExercicios/>
    }
  ]
}
])

export default routers;