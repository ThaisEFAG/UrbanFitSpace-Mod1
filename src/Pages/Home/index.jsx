import { useState } from 'react'
import CardLocaisExercicios from "../../Components/CardLocaisExercicios"
import listUsuarios from "../../../Data/db-user.json"
import listLocais from "../../../Data/db-locais.json"



function home() {

    const stringLocais = listLocais;
    console.log(stringLocais)

    

    // const listLocaisDt = stringLocais.map((itemAtual) => {

    // })

  return (
    <>
    {stringLocais.map((itemAtual, index) => (
      <div key={index}>
        <CardLocaisExercicios nomeLocal={itemAtual.nome_local}
                              idUsuario={itemAtual.identificador_usuario}
                              descricaoLocal={itemAtual.descricao_local}
                              localEnder={itemAtual.loalizacao_endereco}
                              localCoorden={itemAtual.localizacao_coordenadas}
                              atividadesExport={itemAtual.tipos_esportes}/>
      </div>                         
    ))}
   
  </>
  )
}

export default home;
