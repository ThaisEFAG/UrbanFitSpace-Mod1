

const Cardcomponents = (props) => {
    const local = props.localprop
            return(

                <div>
                    <h1>{local.nome_local}</h1>
                    <span>{local.identificador_usuario}</span>
                    <span>{local.descrição_local}</span>
                    <span>{local.localizacao_cep}</span>
                    <span>{local.localizacao_endereco}</span>
                    <span>{local.localizacao_cidade}</span>
                    <span>{local.localizacao_estado}</span>
                    <span>{local.localizacao_coordenadas}</span>
                    <span>{local.tipos_esportes}</span>
                    <span>{local.id}</span>

                </div>

            )
}

export default Cardcomponents