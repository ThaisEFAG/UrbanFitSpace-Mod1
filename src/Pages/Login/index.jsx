import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UsuariosContext } from "../../Context/UsuariosContext";
import "./style.css";

function login() {
  const { register, handleSubmit } = useForm();

  const { loginUser } = useContext(UsuariosContext);

  //lembrar de depois de fazer a lógica do login adicionar algo daqui para referencia na função da quantidade de usuarios logados na pasta de hooks

  return (
      <form
        onSubmit={handleSubmit((formLogin) => loginUser(formLogin))}
        className="container-login"
      >
        <div className="login-div">
          <label htmlFor="">Login:</label>
          <input
            {...register("email")}
            type="text"
            placeholder="Digite seu e-mail"
          />
        </div>
        <div className="senha-div">
          <label htmlFor="">Senha:</label>
          <input
            {...register("password")}
            type="password"
            placeholder="Digite sua senha"
          />
        </div>
        <div className="enterLogin">
          <button className="login-enter" type="submit">
            Entrar
          </button>
        </div>
        <div className="cadastro-go">
          <button>
            {" "}
            <Link to="/cadastroUsuarios">Cadastre-se</Link>
          </button>
        </div>
      </form>
    
  );
}

export default login;
