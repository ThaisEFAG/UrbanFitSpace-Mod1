import "./style.css"
import { useForm } from "react-hook-form";

function cadastroExercicios() {
    const {register, handleSubmit } = useForm;

    function onSubmit(formValue2) {
        console.log("\nFormulario exerci cards\n", formValue2);
    }

    return(
        

            <form onSubmit={handleSubmit()}>
                <label htmlFor="descrLoc">Descreva o local:</label>
                <input type="text" {...register("descrLoc", {required: true, maxLength: 150})} />
                <label htmlFor="cep">Cep:</label>
                <input type="text" {...register("cep", {required: true, maxLength: 8})} />
                <label htmlFor="endLoc">Endereço:</label>
                <input type="text" {...register("endLoc", {required:true})}/>
                <label htmlFor="cityLoc">Cidade:</label>
                <input type="text" {...register("cityLoc",{required: true})} />
                <label htmlFor="estaLoc">Estado:</label>
                <input type="text" {...register("estaLoc", {required: true})} />
                <label htmlFor="coorMaps">Coordenadas maps</label>
                <input type="text" {...register("coorMaps")} />
                <label htmlFor="typeExport">Tipos de esporte</label>
                <input type="text" {...register("typeExport", {required: true, maxLength: 100})} />
                <button type="submit">Salvar</button>
            </form>
        
        
    )
}


export default cadastroExercicios;