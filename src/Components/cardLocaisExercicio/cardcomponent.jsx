

const cardcomponents = ({props}) => {

            return(

                <div>
                    <h1>{props.nomeLocal}</h1>
                    <span>{props.identificador_usuario}</span>
                    <span>{props.descrição_local}</span>
                    <span>{props.localizacao_cep}</span>
                    <span>{props.localizacao_endereco}</span>
                    <span>{props.localizacao_cidade}</span>
                    <span>{props.localizacao_estado}</span>
                    <span>{props.localizacao_coordenadas}</span>
                    <span>{props.tipos_esportes}</span>
                    <span>{props.id}</span>

                </div>

            )
}

export default cardcomponents