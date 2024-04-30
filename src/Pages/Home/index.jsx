import { useContext } from "react";
import { ContextLocais } from "../../Context/LocaisContext";
import "./style.css";



function home() {

    const {locais, setLocais} = useContext(ContextLocais)

    // const { usuarios, setUsuarios} = useContext(UsuariosContext)

  

    // const stringLocais = dbLocais.listLocais;
    // console.log(stringLocais)

    function getLista() {

      //LISTAR LOCAIS PARA

          // const listLocaisDt = stringLocais.map((itemAtual) => {
    }
    return(
      <>
   {!!locais && locais.map((local) => ( 
    <h3 key={local.id}>{local.nome_local}</h3>
   ))}

     
  </>
  )
}

export default home;
