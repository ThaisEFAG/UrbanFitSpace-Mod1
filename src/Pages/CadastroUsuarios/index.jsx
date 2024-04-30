import { useForm } from "react-hook-form";
import "./style.css"
// import PropTypes from 'prop-types'

    function cadastroUsuarios(){
            const {register, handleSubmit, formstate: {errors} } = useForm( );

            function onSubmit(formValue) {
                console.log("\nValores form cad user: \n", formValue);
            }

    // useEffect(() => {
    //     fetch("http://http://localhost:5174/usurios")
    //     .then(response => response.json())
    //     .then(dados => setUsuarios(dados))
    //     .catch(erro => console.log(erro))
    // }, [])

    // function cadastrarUsuario() {
        
    // }

    return(
        
     <div className="container-cadasto">
        <div className="content-cadastro">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-name">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" {...register("name", {required: true, maxLength: 50})} placeholder="Digite seu nome" />
                </div>
                <div className="form-sexo">
                    <label htmlFor="sex" className="sel-sexo">Sexo:</label>
                    <select name="" {...register("sex", {required: true, maxLength: 1})} id="">
                    <option value="">selecione</option>
                    <option value="Feminino">F</option>
                    <option value="Masculino">M</option>
                    </select>
                </div>
                <div className="form-cpf">
                    <label htmlFor="cpf">CPF:</label>
                    <input type="text" {...register("cpf", {required: true, maxLength: 11})} placeholder="Digite seu CPF" />
                </div>
                <div className="form-nasc">
                    <label htmlFor="dtNasc">Data de nascimento:</label>
                    <input type="date" {...register("dtNasc", {required:true})} placeholder="Digite sua data de nascimento" />
                </div>
                <div className="form-email">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" {...register("email", {required: true, maxLength: 50})} placeholder="Digite seu e-mail" />
                </div>
                <div className="form-endereco">
                    <label htmlFor="endereco">Endereço:</label>
                    <input type="text" {...register("endereco", {required:true})} placeholder="Digite seu endereço" />
                </div>
                <div className="form-senha">
                    <label htmlFor="senha">Crie uma senha:</label>
                    <input type="password" {...register("senha", {required: true, maxLength: 15})} placeholder="Digite sua senha" />
                </div>
                <div className="save">
                    <button className="save-click" type="submit">Salvar</button>
                </div>
            </form>
        </div>
     </div>
    
    )
}

    // Round.PropTypes = {
    //     nome:PropTypes.string.isRequired
        

    // }

export default cadastroUsuarios;

