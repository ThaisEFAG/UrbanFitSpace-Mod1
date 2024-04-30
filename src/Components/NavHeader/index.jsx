import { Link } from "react-router-dom";
import useCountUsers from "../../Pages/Hooks/useCountUsers"

function navHeader() {


    return(
        
            <nav>
                <div className="links-menu">
                <Link to="/">Home</Link>
                <Link to="/cadastroExercicios">Cadastro de Locais</Link>
                <Link to="/editExercicios">Edição Locais</Link>
                </div>
                <div className="users-logs">
                    Usuarios logados: {useCountUsers}
                </div>


            </nav>
    
    
    )
}

export default navHeader;