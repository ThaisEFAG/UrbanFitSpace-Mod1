

import { useContext } from "react";
import CardLocaisEdit from '../../Components/CardLocaisEdit/CardLocaisEdit'
import {LocaisContext} from "../../Context/LocaisContext"
import "./style.css";

function EditExercicios() {
  
  const {listLocaisUser} = useContext(LocaisContext)



  
if(listLocaisUser.length === 0) return <h1>Você não possui locais cadastrados</h1>
  return (
    <>
      {/* dupla !! verifica se é diferente de undefined, null ou array vazio, se a resposta for sim ele executa o que está a direita se a resposta for não ele não executa nada */}

      {!!listLocaisUser &&
        listLocaisUser.map(local =>
         (<CardLocaisEdit key={local.id} local={local}></CardLocaisEdit>)
        //  (<Cardcomponents key={listLocais.id} nomeLocal = {local.nome_local}>  </Cardcomponents>)
        )}
    </>
  );
}

export default EditExercicios;


// function EditExercicios() {
// //   function getLista() {
// //     //LISTAR LOCAIS PARA EDITAR OU APAGAR
// //     const [listUsuarios, setlistUsuarios] = useState([]);}



//   return <h1>Página de edição</h1>;
// }

// export default EditExercicios;
