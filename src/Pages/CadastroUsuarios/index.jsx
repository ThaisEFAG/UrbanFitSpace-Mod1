import "./style.css"
import PropTypes from 'prop-types'

    function cadastroUsuarios(){


    // useEffect(() => {
    //     fetch("http://http://localhost:5174/usurios")
    //     .then(response => response.json())
    //     .then(dados => setUsuarios(dados))
    //     .catch(erro => console.log(erro))
    // }, [])

    // function cadastrarUsuario() {
        
    // }

    return(
        <>
     <div className="container-cadasto">
        <div className="content-cadastro">
            <form action="">
                <div className="form-name">
                    <label htmlFor="">Nome:</label>
                    <input type="text" placeholder="Digite seu nome" />
                </div>
                <div className="form-sexo">
                    <label htmlFor="" className="sel-sexo">Sexo:</label>
                    <select name="" id="">
                    <option value="">selecione</option>
                    <option value="Feminino">F</option>
                    <option value="Masculino">M</option>
                    </select>
                </div>
                <div className="form-cpf">
                    <label htmlFor="">CPF:</label>
                    <input type="text" placeholder="Digite seu CPF" />
                </div>
                <div className="form-nasc">
                    <label htmlFor="">Data de nascimento:</label>
                    <input type="date" placeholder="Digite sua data de nascimento" />
                </div>
                <div className="form-email">
                    <label htmlFor="">E-mail:</label>
                    <input type="email" placeholder="Digite seu e-mail" />
                </div>
                <div className="form-senha">
                    <label htmlFor="">Senha:</label>
                    <input type="text" placeholder="Digite sua senha" />
                </div>
                <div className="form-endereco">
                    <label htmlFor="">Endereço:</label>
                    <input type="text" placeholder="Digite seu endereço" />
                </div>
                <div className="form-senha">
                    <label htmlFor="">Crie uma senha:</label>
                    <input type="password" placeholder="Digite sua senha" />
                </div>
                <div className="save">
                    {/* <button className="save-click" onClick={cadastroUsuarios}>Salvar</button> */}
                </div>
            </form>
        </div>
     </div>
    </>
    )
}

    // Round.PropTypes = {
    //     nome:PropTypes.string.isRequired
        

    // }

export default cadastroUsuarios;

