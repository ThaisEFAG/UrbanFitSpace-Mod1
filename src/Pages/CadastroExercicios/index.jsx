import "./style.css"
import { useForm } from "react-hook-form";

function cadastroExercicios() {
    const {register, handleSubmit } = useForm;

    function onSubmit(formValue2) {
        console.log("\nFormulario exerci cards\n", formValue2);
    }

    return(
        

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="descrLoc">Descreva o local:</label>
                <input type="text" {...register("descrLoc")} />
                <label htmlFor="cep">Cep:</label>
                <input type="text" {...register("cep")} />
                <label htmlFor="endLoc">Endereço:</label>
                <input type="text" {...register("endLoc")}/>
                <label htmlFor="cityLoc">Cidade:</label>
                <input type="text" {...register("cityLoc")} />
                <label htmlFor="estaLoc">Estado:</label>
                <input type="text" {...register("estaLoc")} />
                <label htmlFor="coorMaps">Coordenadas maps</label>
                <input type="text" {...register("coorMaps")} />
                <label htmlFor="typeExport">Tipos de esporte</label>
                <input type="text" {...register("typeExport")} />
                <button type="submit">Salvar</button>
            </form>
        
        
    )
}


export default cadastroExercicios;