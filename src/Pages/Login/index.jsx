import "./style.css";

function login() {

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
                        <input type="text" placeholder="Digite sua senha" />
                    </div>
                    <div className="cadastro-go">
                        <button>Cadastre-se</button>
                    </div>
                </div>
            
            </div>
    </>
    )
}

    export default login;