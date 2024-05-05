import "./style.css";
import { Link } from "react-router-dom";

function login() {

    //lembrar de depois de fazer a lógica do login adicionar algo daqui para referencia na função da quantidade de usuarios logados na pasta de hooks

    return(
        
        <>
            <div className="container-login">
                <div className="content-login">
                    <div className="login-div">
                        <label htmlFor="">Login:</label>
                        <input type="text" placeholder="Digite seu e-mail" />
                    </div>
                    <div className="senha-div">
                        <label htmlFor="">Senha:</label>
                        <input type="password" placeholder="Digite sua senha" />
                    </div>
                    <div className="enterLogin">
                        <button className="login-enter" onClick={() => addUserLogin()}>Entrar</button>
                    </div>
                    <div className="cadastro-go">
                        <button> <Link to="/cadastroUsuarios">Cadastre-se</Link></button>
                    </div>
                </div>
            
            </div>
    </>
    )
}

    export default login;