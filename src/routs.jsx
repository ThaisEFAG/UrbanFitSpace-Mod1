import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../src/Pages/Home";
import Login from "../src/Pages/Login";
import Outlet from "./Outlet/Outlet.jsx";
import CadastroExercicios from "./Pages/CadastroExercicios/index.jsx";
import CadastroUsuarios from "./Pages/CadastroUsuarios/index.jsx";
import EditExercicios from "./Pages/EditExercicios/index.jsx";

const logLstorage = JSON.parse(localStorage.getItem("usuarioLogado")) || false;

export const PriviteRoute = ({ children }) => {
  return logLstorage ? children : <Navigate to="/login" />;
};

export const routers = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastroUsuarios",
    element: <CadastroUsuarios />,
  },
  {
    path: "/",
    element: (
      <PriviteRoute>
        <Outlet />
      </PriviteRoute>
    ),
    // errorElement: <PageErro/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/CadastroExercicios",
        element: <CadastroExercicios />,
      },
      {
        path: "/editExercicios",
        element: <EditExercicios />,
      },
    ],
  },
]);
