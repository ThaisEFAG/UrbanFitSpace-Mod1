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
      <div>
      <label htmlFor="nome_local">Nome do local</label>
      <input
        {...register("nome_local", { required: true })}
        defaultValue={local.nome_local}
      />
      </div>
      <div>
        
      <label htmlFor="descricao_local">Descreva o local:</label>
      <input
        {...register("descricao_local", { required: true })}
        defaultValue={local.descricao_local}
        />
        </div>
        <div>
          
       <label htmlFor="cep">Cep:</label>
      <input
        {...register("localizacao_cep", { required: true })}
        defaultValue={local.localizacao_cep}
        />
        </div>
        <div>

      <label htmlFor="localizacao_endereco">Endereço:</label>
      <input
        {...register("localizacao_endereco", { required: true })}
        defaultValue={local.localizacao_endereco}
        />
        </div>
        <div>

       <label htmlFor="localizacao_cidade">Cidade:</label>
      <input
        {...register("localizacao_cidade", { required: true })}
        defaultValue={local.localizacao_cidade}
        />
        </div>
        <div>

       <label htmlFor="localizacao_estado">Estado:</label>
      <input
        {...register("localizacao_estado", { required: true })}
        defaultValue={local.localizacao_estado}
        />
        </div>
        <div>
      <label htmlFor="coorMaps">Latitude</label>
      <input
        {...register("localizacao_latitude", { required: true })}
        defaultValue={local.localizacao_latitude}
        />
        
        </div>
        <div>

       <label htmlFor="coorMaps">Longitude</label>
       <input
        {...register("localizacao_longitude", { required: true })}
        defaultValue={local.localizacao_longitude}
        />
        </div>
        <div>

      <label htmlFor="typeExport">Tipos de esporte</label>
      <input
        {...register("tipos_esportes", { required: true })}
        defaultValue={local.tipos_esportes}
        />
        </div>
        <div>


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
      </div>
    </form>
  );
};

export default CardLocaisEdit;
