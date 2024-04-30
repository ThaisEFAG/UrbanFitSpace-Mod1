import NavHeader from "../Components/NavHeader";
import FooterPage from "../Components/FooterPage";
import { Outlet } from "react-router-dom";
import { UsuariosContextProvider } from "../Context/UsuariosContext"



function outlet() {

    return(
        <UsuariosContextProvider>
            <NavHeader />
            <Outlet />
            <FooterPage />
        </UsuariosContextProvider>
        
    )
}

export default outlet;