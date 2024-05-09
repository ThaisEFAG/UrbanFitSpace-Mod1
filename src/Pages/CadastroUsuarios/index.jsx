import { React, useContext } from "react";
import { useForm } from "react-hook-form";
import { UsuariosContext } from "../../Context/UsuariosContext";
import "./style.css";

//mapa by coordenadas pra react
//cadastro no google console

function cadastroUsuarios() {
  const dataInit = {
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
  };

  function buscarCep() {
    if (cep < 8) {
      return;
    } else {
      const url = `http://viacep.com.br/ws/${cep}/json/`;
      fetch(url, { mode: "cors" })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.erro == true) {
            alert("Digite um CEP válido");
          } else {
            console.log(data.logradouro);
            alterarValor(data);
          }
        })
        .catch((err) => console.log(err));
    }
  }

  function alterarValor(data) {
    setValue("endereco", data.logradouro);
    setValue("cidade", data.localidade);
    setValue("estado", data.uf);
  }

  var cep;
  var endereco;

  function setCEP(value) {
    cep = value;
  }
  function CEPIsValid() {
    console.log(cep);
    if (cep.length != 8) {
      alert("Digite 8 números");
      return;
    }
    console.log("Tamanho valido");
    buscarCep();
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  const { onSubmitUser } = useContext(UsuariosContext);

  return (
    <div className="container-cadasto">
      <div className="content-cadastro">
        <form onSubmit={handleSubmit((data) => onSubmitUser(data))}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              className={errors?.nome && "input-error"}
              type="text"
              {...register("nome", { required: true, maxLength: 50 })}
              placeholder="Digite seu nome"
            />
            {errors?.nome?.type === "maxLength" && (
              <p className="error-message">
                Nome deve conter no máximo 50 caracteres
              </p>
            )}
            {errors?.nome?.type === "required" && (
              <p className="message-error">O campo nome é obrigatório</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="sex">Sexo:</label>
            <select
              name=""
              className={errors?.sex && "input-error"}
              {...register("sex", {
                validate: (value) => {
                  return value != "0";
                },
              })}
              id=""
            >
              <option value="0">selecione</option>
              <option value="Feminino">F</option>
              <option value="Masculino">M</option>
            </select>
            {errors?.sex?.type === "validate" && (
              <p className="error-message">O campo sexo é obrigatório</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="cpf">CPF:</label>
            <input
              type="text"
              {...register("cpf", { required: true, maxLength: 11 })}
              className={errors?.cpf && "input-error"}
              placeholder="Digite seu CPF"
            />
            {errors?.cpf?.type === "maxLength" && (
              <p className="error-messege">
                O campo CPF deve conter 11 dígitos{" "}
              </p>
            )}
            {errors?.cpf?.type === "required" && (
              <p className="error-message">O campo CPF é obrigatório</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="dtNasc">Data de nascimento:</label>
            <input
              type="date"
              {...register("dtNasc", { required: true })}
              className={errors?.dtNasc && "input-error"}
              placeholder="Digite sua data de nascimento"
            />
            {errors?.dtNasc?.type === "require" && (
              <p className="erro-message">
                Campo Data de nascimento obrigatório
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Digite seu e-mail"
              className={errors?.email && "input-error"}
            />
            {errors?.email?.type === "required" && (
              <p className="erro-message">Campo email é obrigatório</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="cep">CEP:</label>
            <input
              type="text"
              onChange={(e) => setCEP(e.target.value)}
              onBlur={CEPIsValid}
              value={cep}
              placeholder="Digite seu CEP"
            />
          </div>
          <div className="form-group">
            <label htmlFor="endereco">Endereço:</label>
            <input
              type="text"
              {...register("endereco", { required: true })}
              placeholder="Digite seu endereço"
              className={errors?.endereco && "input-error"}
            />
            {errors?.endereco?.type === "required" && (
              <p className="error-message">O campo endereço é obrigatório</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="cidade">Cidade:</label>
            <input
              type="text"
              {...register("cidade", { required: true })}
              className={errors?.cidade && "input-error"}
            />
            {errors?.cidade?.type === "required" && (
              <p className="error-message">O campo Cidade é obrigatório</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="estado">Estado:</label>
            <input
              type="text"
              {...register("estado", { required: true })}
              className={errors?.localizacao_estado && "input-error"}
            />
            {errors?.estado?.type === "required" && (
              <p className="error-message">O campo Estado é obrigatório</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="senha">Crie uma senha:</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 7 })}
              placeholder="Digite sua senha"
              className={errors?.password && "input-error"}
            />

            {errors?.password?.type === "minLength" && (
              <p className="error-message">
                A senha deve ter o mínimo de 7 caracteres
              </p>
            )}
            {errors?.password?.type === "required" && (
              <p className="error-message"> O campo senha é obrigatório</p>
            )}
          </div>
          <div className="form-group">
            <div className="checkbox-group">
              <input
                type="checkbox"
                name="privacy-policy"
                {...register("privacyTerms", { required: true })}
              />
              <label>
                Marcando esse campo você concorda com nossa política de
                privacidade.
              </label>
            </div>
            {errors?.privacyTerms?.type === "required" && (
              <p className="error-message">
                Você precisa aceitar os termos de privacidade
              </p>
            )}
          </div>
          <div className="button">
            <button className="save-click" type="submit">
              Criar conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Round.PropTypes = {
//     nome:PropTypes.string.isRequired

// }

export default cadastroUsuarios;
