import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { LocaisContext } from "../../Context/LocaisContext";

const CardLocaisEdit = ({ local }) => {
  const [desabilitar, setDesabilitar] = useState(true);

  const { removeLoc, editLoc } = useContext(LocaisContext);

  const { handleSubmit, reset, register } = useForm();

  const toggleDisable = () => {
    setDesabilitar(!desabilitar);
    reset(local);
  };

  const handleEdit = (data) => {
    editLoc(data);
    setDesabilitar(true);
  };

  return (
    <form onSubmit={handleSubmit(handleEdit)}>
      <input
        {...register("nome_local", { required: true })}
        defaultValue={local.nome_local}
      />
      <input
        {...register("descricao_local", { required: true })}
        defaultValue={local.descricao_local}
      />
      <input
        {...register("localizacao_cep", { required: true })}
        defaultValue={local.localizacao_cep}
      />
      <input
        {...register("localizacao_endereco", { required: true })}
        defaultValue={local.localizacao_endereco}
      />
      <input
        {...register("localizacao_cidade", { required: true })}
        defaultValue={local.localizacao_cidade}
      />
      <input
        {...register("localizacao_estado", { required: true })}
        defaultValue={local.localizacao_estado}
      />
      <input
        {...register("localizacao_coordenadas", { required: true })}
        defaultValue={local.localizacao_coordenadas}
      />
      <input
        {...register("tipos_esportes", { required: true })}
        defaultValue={local.tipos_esportes}
      />

      <button type="button" onClick={toggleDisable}>
        {desabilitar ? "Editar" : "Cancelar"}
      </button>
      <button type="submit" disabled={desabilitar}>
        Salvar
      </button>
      <button
        type="button"
        onClick={() => removeLoc(local.id)}
        disabled={desabilitar}
      >
        Excluir
      </button>
    </form>
  );
};

export default CardLocaisEdit;
