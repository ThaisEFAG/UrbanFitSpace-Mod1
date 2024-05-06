import { useState, useContext } from "react"
import { LocaisContext } from "../../Context/LocaisContext";
import { useForm } from "react-hook-form"



const CardLocaisEdit = ({local, onSubmit}) => {

    const [desabilitar, setDesabilitar] = useState(true);

    const { removeLoc, editLoc } = useContext(LocaisContext);

    const { handleSubmit, register, reset } = useForm();


            return(

                <form onSubmit={handleSubmit(() => console.log("teste"))}>

                    <input disabled={desabilitar} {...register('nome_local', {required: true})} defaultValue={local.nome_local}></input>
                    <input disabled={desabilitar} {...register('id-user', {required: true})} defaultValue={local.identificador_usuario}></input>
                    <input disabled={desabilitar} {...register('descricao_local', {required: true})} defaultValue={local.descricao_local}></input>
                    <input disabled={desabilitar} {...register('localizacao_cep', {required: true})} defaultValue={local.localizacao_cep}></input>
                    <input disabled={desabilitar} {...register('localizacao_endereco', {required: true})} defaultValue={local.localizacao_endereco}></input>
                    <input disabled={desabilitar} {...register('localizacao_cidade', {required: true})} defaultValue={local.localizacao_cidade}></input>
                    <input disabled={desabilitar} {...register('localizacao_estado', {required: true})} defaultValue={local.localizacao_estado}></input>
                    <input disabled={desabilitar} {...register('localizacao_coordenadas', {required: true})} defaultValue={local.localizacao_coordenadas}></input>
                    <input disabled={desabilitar} {...register('tipos_esportes', {required: true})} defaultValue={local.tipos_esportes}></input>
                    <input disabled={desabilitar} {...register('id', {required: true})} defaultValue={local.id}></input>

                    <button type="submit" onClick={desabilitar ? (e) => {
                        e.preventDefault(); 
                        setDesabilitar(!desabilitar);
                        reset(local)
                    }: setDesabilitar(!desabilitar)
                    }>Editar</button>
                    <button>Excluir</button>

                </form>

            )
}

export default CardLocaisEdit;