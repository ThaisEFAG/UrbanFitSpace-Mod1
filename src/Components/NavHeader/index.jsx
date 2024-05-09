import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UsuariosContext } from "../../Context/UsuariosContext";

function navHeader() {
  const [isLogCount, setIsLogCount] = useState(0);
  const { logout } = useContext(UsuariosContext);

  useEffect(() => {
    fetch("http://localhost:3000/listUsuarios?isLogado=true")
      .then((response) => response.json())
      .then((data) => setIsLogCount(data.length))
      .catch((error) => console.error(error));
  }, []);

  return (
    <nav>
      <div className="links-menu">
        <Link to="/">Home</Link>
        <Link to="/cadastroExercicios">Cadastro de Locais</Link>
        <Link to="/editExercicios">Edição Locais</Link>
      </div>
      <div className="users-logs">
        Usuarios logados: {isLogCount && isLogCount}
      </div>

      <button onClick={logout}>Sair</button>
    </nav>
  );
}

export default navHeader;
