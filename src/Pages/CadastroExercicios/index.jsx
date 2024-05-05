import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { LocaisContext } from "../../Context/LocaisContext";
import fetchCep from "../../Uteis";
import "./style.css";

function cadastroExercicios() {
  const { onSubmitLoc } = useContext(LocaisContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    setError,
  } = useForm();

  const cep = watch("localizacao_cep");

  async function ValidarCep() {
    const resposta = await fetchCep(cep);
    if (resposta.erro) {
      setError("localizacao_cep", {
        message: "Digite um CEP válido!",
        type: "custom",
      });
    } else {
      setValue("localizacao_endereco", resposta.logradouro);
      setValue("localizacao_cidade", resposta.localidade);
      setValue("localizacao_estado", resposta.uf);
    }
  }
  console.log(errors);

  useEffect(() => {
    if (cep?.length == 8) {
      ValidarCep();
    }
  }, [cep]);

  return (
    <div className="container-cadastro">
      <div className="content-cadastro">
        <form onSubmit={handleSubmit((outracoisa) => onSubmitLoc(outracoisa))}>
          <div className="form-group">
            <label htmlFor="descricao_local">Descreva o local:</label>
            <input
              type="text"
              id="descricao_local"
              {...register("descricao_local", {
                required: true,
                maxLength: 150,
              })}
              className={errors?.descricao_local && "input-error"}
            />
            {errors?.descricao_local?.type === "required" && (
              <p className="error-message">
                O campo de descrição é obrigatório
              </p>
            )}
            {errors?.descricao_local?.type === "maxLength" && (
              <p className="error-message">
                Quantidade máxima de 150 caracteres
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="cep">Cep:</label>
            <input
              type="text"
              {...register("localizacao_cep", {
                required: { message: "Campo CEP obrigatório", value: true },
                maxLength: { message: "Digite 8 caracteres", value: 8 },
              })}
              className={errors?.localizacao_cep && "input-error"}
            />

            {errors?.localizacao_cep && (
              <p className="error-message">{errors.localizacao_cep?.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="localizacao_endereco">Endereço:</label>
            <input
              type="text"
              {...register("localizacao_endereco", { required: true })}
              className={errors?.localizacao_endereco && "input-error"}
            />
            {errors?.localizacao_endereco?.type === "required" && (
              <p className="error-message">O campo endereço é obrigatório</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="localizacao_cidade">Cidade:</label>
            <input
              type="text"
              {...register("localizacao_cidade", { required: true })}
              className={errors?.localizacao_cidade && "input-error"}
            />
            {errors?.localizacao_cidade?.type === "required" && (
              <p className="error-message">O campo Cidade é obrigatório</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="localizacao_estado">Estado:</label>
            <input
              type="text"
              {...register("localizacao_estado", { required: true })}
              className={errors?.localizacao_estado && "input-error"}
            />
            {errors?.localizacao_estado?.type === "required" && (
              <p className="error-message">O campo Estado é obrigatório</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="coorMaps">Coordenadas maps</label>
            <input type="text" {...register("localizacao_coordenadas")} />
          </div>
          <div className="form-group">
            <label htmlFor="typeExport">Tipos de esporte</label>
            <input
              type="text"
              {...register("tipos_esportes", { required: true })}
              className={errors?.tipos_esportes && "input-error"}
            />
            {errors?.tipos_esportes?.type === "required" && (
              <p className="error-message"></p>
            )}
          </div>
          <div className="button">
            <button className="save-click" type="submit">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default cadastroExercicios;
