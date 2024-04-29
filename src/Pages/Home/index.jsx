import { useState, useEffect } from 'react'
import CardLocaisExercicios from "../../Components/CardLocaisExercicios"
import db from "../../../data/db.json"
import dbLocais from "../../../data/db-locais.json"
import "./style.css"
import { useContext } from "react"
import { UsuariosContext } from "../../Context/UsuariosContext"
  import { LocaisContext } from "../../Context/LocaisContext"




function home() {

    // const { usuarios, setUsuarios} = useContext(UsuariosContext)

  

    // const stringLocais = dbLocais.listLocais;
    // console.log(stringLocais)

    function getLista() {

      //LISTAR LOCAIS PARA VISUALIZAÇÃO
      const [listUsuarios, setlistUsuarios] = useState([])


  }

    

    // const listLocaisDt = stringLocais.map((itemAtual) => {

    // })

  return (
     <>
     

    {/* {stringLocais.map((itemAtual, index) => (
      <div key={index}>
        <CardLocaisExercicios nomeLocal={itemAtual.nome_local}
                              idUsuario={itemAtual.identificador_usuario}
                              descricaoLocal={itemAtual.descricao_local}
                              localEnder={itemAtual.loalizacao_endereco}
                              localCoorden={itemAtual.localizacao_coordenadas}
                              atividadesExport={itemAtual.tipos_esportes}/>
      </div>
    ))} */}
  </>
  )
}

export default home;
