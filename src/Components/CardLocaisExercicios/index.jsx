import "./style.css";

function cardLocaisExercicios(props) {
    return(

        <>
        <h3>{props.nomeLocal}</h3>
        <h2>{props.idUsuario}</h2>
        <h2>{props.descricaoLocal}</h2>
        <h2>{props.localEnder}</h2>
        <h2>{props.localCoorden}</h2>
        <h2>{props.atividadesExport}</h2>
        </>
    )
}

export default cardLocaisExercicios;