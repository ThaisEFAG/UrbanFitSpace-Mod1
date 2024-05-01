import { useEffect, useState } from "react";
import "./style.css";



function home() {

  // const { usuarios, setUsuarios} = useContext(UsuariosContext)
    const {listLocais, setListLocais} = useState([])

      useEffect(() => {
        fetch("http://localhost:3000/listLocais")
        .then(response => response.json())
        .then(dados => setListLocais(dados))
        .catch(erro => console.log(erro))
      }, [])
   

  

    // const stringLocais = dbLocais.listLocais;
    // console.log(stringLocais)

    // function getLista() {

      //LISTAR LOCAIS PARA

          // const listLocaisDt = stringLocais.map((itemAtual) => {
    
    return(
      <>
      {/* dupla !! verifica se é diferente de undefined, null ou array vazio, se a resposta for sim ele executa o que está a direita se a resposta for não ele não executa nada */}

   {!!listLocais && listLocais.map((local) => ( 
    <h3 key={local.id}>{local.nome_local}</h3>
   ))}

     
  </>
  )
}

export default home;
