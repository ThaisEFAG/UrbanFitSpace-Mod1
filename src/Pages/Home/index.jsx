
import { useContext } from "react";
import Cardcomponents from "../../Components/cardLocaisExercicio"
import {LocaisContext} from "../../Context/LocaisContext"
import "./style.css";

function Home() {
  
  const {listLocais} = useContext(LocaisContext)
  console.log(listLocais)

  

  return (
    <>
      {/* dupla !! verifica se é diferente de undefined, null ou array vazio, se a resposta for sim ele executa o que está a direita se a resposta for não ele não executa nada */}

      {!!listLocais &&
        listLocais.map(local => 
         (<Cardcomponents key={listLocais.id} localprop={local}>  </Cardcomponents>)
        //  (<Cardcomponents key={listLocais.id} nomeLocal = {local.nome_local}>  </Cardcomponents>)
        )}
    </>
  );
}

export default Home;
